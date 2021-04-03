import { useState } from 'react';
import { Empty, Spin } from 'antd';
import { IconicTaxaSelector } from './IconicTaxaSelector';
import { ListerButton } from './ListerButton';
import { SpeciesList } from './SpeciesList';
import { recursiveObservationFetcher } from './utilities/fetchObservations';

export function ListerContent() {
  const [iconicTaxa, setIconicTaxa] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const createSpeciesList = (dataPages) => {
    let speciesSet = new Set();

    dataPages.forEach(page => {
        page.forEach(observation => {
            // console.log(observation);
            if (observation['taxon']['preferred_common_name']) {
              speciesSet.add(observation['taxon']['preferred_common_name']);
            }
        })
    });

    let speciesList = [...speciesSet].sort();
    return speciesList;
  }

  const handleIconicTaxaChange = (value) => {
    setIconicTaxa(value);
  }
  
  const handleListerButtonClick = (e) => {
    setLoading(true);
    if (data) {
      setData([]);
    }
    recursiveObservationFetcher(iconicTaxa, 1, []).then(data => {
      let speciesList = createSpeciesList(data);
      setData(speciesList);
      setLoading(false);
    })
  }

  const handleClearListerButtonClick = (e) => {
    setData([]);
  }

  console.log(`${data.length} species observed`);
  console.log(data);


  return (
    <div className='lister-content'>
      <IconicTaxaSelector handleIconicTaxaChange={handleIconicTaxaChange} />
      <ListerButton
        handleListerButtonClick={handleListerButtonClick}
        handleClearListerButtonClick={handleClearListerButtonClick}
      />
      {!data.length ?
        loading ?
          <Spin className='spinner' size='large' /> :
            <Empty /> :
              <SpeciesList
                speciesList={data}
                iconicTaxa={iconicTaxa}
              />
      }
    </div>
  )
}