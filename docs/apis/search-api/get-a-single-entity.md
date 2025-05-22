# Get a single entity

This page describes the API endpoints for retrieving a single entity using its unique identifier. 
Each entity type has a dedicated endpoint following the pattern:
```http
GET {base_url}/api/{entity_type}/{local_identifier}
```

where `base_url` is the base URL of the API, `entity_type` is the type of entity (e.g., product, person, etc.), and `local_identifier` is the unique identifier of the entity.

Below is a list of the available single-entity endpoints:

- **Research Products** – `/api/products/{local_identifier}`
- **Agents** – `/api/agents/{local_identifier}`
- **Grants** – `/api/grants/{local_identifier}`
- **Venues** – `/api/venues/{local_identifier}`
- **Topics** – `/api/topics/{local_identifier}`
- **Data Sources** – `/api/datasources/{local_identifier}`


You can retrieve the data of a single entity by providing the entity's [local identifier](https://skg-if.github.io/interoperability-framework/#local-identifiers-of-entities) in the corresponding endpoint.


## Response
The response for a single entity request will return the entity's data in JSON format. The structure of the response will depend on the entity type, and can be one of the following: [Product](https://skg-if.github.io/interoperability-framework/docs/research-product.html), [Agent](https://skg-if.github.io/interoperability-framework/docs/agent.html), [Grant](https://skg-if.github.io/interoperability-framework/docs/grant.html), [Venue](https://skg-if.github.io/interoperability-framework/docs/venue.html), [Topic](https://skg-if.github.io/interoperability-framework/docs/topic.html), or [Data source](https://skg-if.github.io/interoperability-framework/docs/data-source.html).

## Example
If you want to retrieve the metadata of the research product with the local identifier `12345`, you would make a GET request to the following URL:
```http
GET {base_url}/api/products/12345
```
The response will include all the relevant metadata for that research product, including its title, description, contributors, and any associated grants or venues.
```json
{
  "@context": [
    "https://w3id.org/skg-if/context/1.0.1/skg-if.json",
    {
      "@base": "http://example.com/"
    }
  ],
  "entity_type": "product",
  "product_type": "literature",
  "titles": {
    "en": [
      "The FAIR Guiding Principles for scientific data management and stewardship"
    ]
  },
  "identifiers": [
    {
      "value": "10.1038/sdata.2016.18",
      "scheme": "doi"
    },
    {
      "value": "26978244",
      "scheme": "pmid"
    }
  ],
  // the response continues with more metadata fields
}
```