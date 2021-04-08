export const recursiveObservationFetcher = async (
    iconicTaxa, pageNum, numPages, lat, long, radius, results
)  => {
    console.log(pageNum);
    let uri = `https://api.inaturalist.org/v1/observations?page=${pageNum}&per_page=200&iconic_taxa=${iconicTaxa}&lat=${lat}&lng=${long}&radius=${radius}&quality_grade=research&order=desc&order_by=created_at`
    console.log(uri);
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
    
    if (pageNum === numPages) {
        return results;
    } else {
        let nextPage = pageNum + 1
        return recursiveObservationFetcher(iconicTaxa, nextPage, numPages, lat, long, radius, results)
    }
}
