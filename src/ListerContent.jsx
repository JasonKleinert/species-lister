import { useState } from 'react';
import { ListerButton } from './ListerButton';
import { SpeciesList } from './SpeciesList';
import { recursiveObservationFetcher } from './utilities/observationFetcher';

export function ListerContent() {
  const [data, setData] = useState([]);

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

  const handleListButtonClick = (e) => {
    recursiveObservationFetcher('Mammalia', 1, []).then(data => {
      let speciesList = createSpeciesList(data);
      setData(speciesList);
    })
  }

  const handleClearListButtonClick = (e) => {
    setData([]);
  }

  console.log(`${data.length} species observed`);
  console.log(data);


  return (
    <div className='lister-content'>
      <ListerButton
        handleListButtonClick={handleListButtonClick}
        handleClearListButtonClick={handleClearListButtonClick}
      />
      {data.length ? <SpeciesList speciesList={data} /> : ''}
    </div>
  )
}