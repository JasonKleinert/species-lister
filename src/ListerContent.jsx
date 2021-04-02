import { useState } from 'react';
import { Empty, Spin, Skeleton } from 'antd';
import { ListerButton } from './ListerButton';
import { SpeciesList } from './SpeciesList';
import { recursiveObservationFetcher } from './utilities/fetchObservations';

export function ListerContent() {
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

  const handleListButtonClick = (e) => {
    setLoading(true);
    if (data) {
      setData([]);
    }
    recursiveObservationFetcher('Mammalia', 1, []).then(data => {
      let speciesList = createSpeciesList(data);
      setData(speciesList);
      setLoading(false);
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
      {!data.length ?
        loading ?
          <Skeleton active paragraph={{ rows: 10 }} /> :
            <Empty /> :
              <SpeciesList speciesList={data} />}
    </div>
  )
}