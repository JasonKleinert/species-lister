from pyinaturalist import node_api

# Recursive getter for paginated results
def get_observations(iconic_taxa, page_num, results):
    
    obs = node_api.get_observations(
        quality_grade = 'research',
        iconic_taxa = iconic_taxa,
        lat = 30.2672,
        lng = -97.7431,
        radius = 100,
        per_page = 200,
        page = page_num
    )

    results.append(obs['results'])
    
    # num_pages = obs['total_results'] / obs['per_page']
    num_pages = 10

    if page_num == num_pages:
        return results
    else:
        next_page = page_num + 1
        return get_observations(iconic_taxa, next_page, results)

def create_species_list(data_pages):
    s = set()
    for data in data_pages:
      for ob in data:
        #   print(ob['taxon']['preferred_common_name'])
          s.add(ob['taxon']['preferred_common_name'])
    return s

if __name__ == '__main__':
    iconic_taxons = ['Mammalia', 'Aves']

    for it in iconic_taxons:
        it_results = get_observations(it, 1, [])
        print(f"number of {it} response pages: {len(it_results)}")
        it_lst = create_species_list(it_results)
        print(f"Found {len(it_lst)} species")

        for species in sorted(it_lst):
            print(species)
