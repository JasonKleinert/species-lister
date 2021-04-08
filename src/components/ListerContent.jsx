import { useState } from 'react';
import { Empty, Spin } from 'antd';
import { IconicTaxaSelector } from './IconicTaxaSelector';
import { LocationControls } from './LocationControls';
import { SearchRadiusSelector } from './SearchRadiusSelector';
import { NumPagesSelector } from './NumPagesSelector';
import { ListerButton } from './ListerButton';
import { SpeciesList } from './SpeciesList';
import { recursiveObservationFetcher } from '../utilities/fetchObservations';

export function ListerContent() {
  const [iconicTaxa, setIconicTaxa] = useState();
  const [location, setLocation] = useState();
  const [locationName, setLocationName] = useState();
  const [radius, setRadius] = useState();
  const [numPages, setNumPages] = useState();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const createSpeciesList = (dataPages) => {
    let speciesSet = new Set();

    dataPages.forEach(page => {
        page.forEach(observation => {
            if (observation["taxon"]["preferred_common_name"]) {
              speciesSet.add(observation["taxon"]["preferred_common_name"]);
            }
        })
    });

    let speciesList = [...speciesSet].sort();
    return speciesList;
  }

  const handleIconicTaxaChange = (value) => {
    setIconicTaxa(value);
  }

  const handleSelectLocation = (value) => {
    setLocation(value);
    setLocationName(value);
  }

  const success = (pos) => {
    let crd = pos.coords;
    setLocation(`${crd.latitude}, ${crd.longitude}`);
    setLocationName("My current location");

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }

  const error = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const handleLocationButtonClick = (e) => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, options);
    } else {
      window.alert("Geolocation is not supported by this browser.");
    }
  }

  const handleSelectSearchRadius = (value) => {
    setRadius(value);
  }

  const handleSelectNumPages = (value) => {
    setNumPages(value);
  }
  
  const handleListerButtonClick = (e) => {
    console.log(location.split(",")[0]);
    setLoading(true);
    if (data) {
      setData([]);
    }
    recursiveObservationFetcher(
      iconicTaxa,
      1,
      numPages,
      location.split(",")[0],
      location.split(",")[1],
      radius,
      []
    ).then(data => {
      console.log(data);
      let speciesList = createSpeciesList(data);
      setData(speciesList);
      setLoading(false);
    })
  }

  const handleClearListerButtonClick = (e) => {
    setData([]);
    setIconicTaxa(null);
    setLocation(null);
    setLocationName(null);
    setRadius(null);
    setNumPages(null);
  }

  return (
    <div className="lister-content">
      <IconicTaxaSelector
        iconicTaxa={iconicTaxa}
        handleIconicTaxaChange={handleIconicTaxaChange} />
      <LocationControls
        location={location}
        locationName={locationName}
        handleLocationButtonClick={handleLocationButtonClick}
        handleSelectLocation={handleSelectLocation}
      />
      <SearchRadiusSelector
        radius={radius}
        handleSelectSearchRadius={handleSelectSearchRadius}
      />
      <NumPagesSelector
        numPages={numPages}
        handleSelectNumPages={handleSelectNumPages}
      />
      <ListerButton
        handleListerButtonClick={handleListerButtonClick}
        handleClearListerButtonClick={handleClearListerButtonClick}
      />
      {!data.length ?
        loading ?
          <Spin
            className="spinner"
            size="large"
            tip="Gathering observations from iNaturalist..."
          /> :
          <Empty /> :
            <SpeciesList
              speciesList={data}
              iconicTaxa={iconicTaxa}
            />
      }
    </div>
  )
}
