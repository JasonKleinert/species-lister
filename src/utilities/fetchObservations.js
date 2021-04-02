export const recursiveObservationFetcher = async (iconicTaxa, pageNum, results)  => {
    console.log(pageNum);
    // let uri = `https://api.inaturalist.org/v1/observations?page=${pageNum}&per_page=200&iconic_taxa=${iconicTaxa}&lat=30.2672&lng=-97.7431&radius=100&quality_grade=research&order=desc&order_by=created_at`
    let uri = `https://api.inaturalist.org/v1/observations?page=${pageNum}&per_page=200&iconic_taxa=${iconicTaxa}&lat=26.2290&lng=-97.3473&radius=100&quality_grade=research&order=desc&order_by=created_at`
    const response = await fetch(
        uri, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
        }
    );
    
    if (!response.ok) {
        const message = `An error has occured: ${response.status}`;
        throw new Error(message);
    }

    let observations = await response.json();
    results.push(observations.results);

    console.log(observations.results[observations.results.length - 1]['created_at']);
    
    const numPages = 10;

    if (pageNum === numPages) {
        return results;
    } else {
        let nextPage = pageNum + 1
        return recursiveObservationFetcher(iconicTaxa, nextPage, results)
    }
}