---
id: search-api
title: Search API
sidebar_label: Search API
slug: /api-spec/search-api
---

The Search API enables users to explore the various RA-SKG entities, 
facilitating structured metadata retrieval for different types of research-related information.
Each entity has a dedicated endpoint; the available endpoints are listed below:

- **Research Products** – `/api/search/research-products`
- **Agents** – `/api/search/agents`
- **Grants** – `/api/search/grants`
- **Venues** – `/api/search/venues`
- **Topics** – `/api/search/topics`
- **Data Sources** – `/api/search/data-sources`

Each endpoint enables the retrieval of all instances of the respective entity, 
supporting [entity-specific filtering](#entity-specific-filtering) along with [common request parameters](#common-request-parameters) for pagination and sorting.


## Common request parameters

All entity-specific endpoints support a set of common query parameters to ensure consistent way to fiter, paginate, and sort API results:


| Parameter      |    Description |
|----------------|---------------|
| `filter.local_identifier`  | Filters by the unique local identifier. |
| `filter.identifier`        | Filters by an external identifier in the form of `scheme:value`, e.g., `filter.identifier=doi:10.1234/example`. |
| `filters.{parameter_name}`    | A specific filter applied to the search resuls: each entity defines [its own applicable filters](#entity-specific-filtering). |
| `page`           | The page number for pagination (starting from 1). |
| `page_size`       | Number of results per page. |
| `sort`           | Field by which to sort the results (e.g., `sort=year:desc`); supports ascending (`asc`) and descending (`desc`) order. |

## Common response format

Each API response follows a standardised JSON format, including a common header segment that provides metadata about the search results:

```json
{
    "header": {
        "num_found": 100, 
        "page": 1,
        "page_size": 10
    },
    "results": [ ... ]
}
```

The `header` segment in the response contains the following properties:

* **num_found** - Total number of results matching the query.
* **page** - Current page number.
* **page_size** - Number of results returned per page.

Finally, the `results` field contains an array of entity objects, as described in the RA-SKG, matching the query.


## Entity-specific filtering

Each entity supports a set of filters based on its specific attributes, allowing users to refine the API results more effectively. 
These filters correspond to key properties of each entity, e.g., the publication year for research products.

All entity-specific filters are applied using the `filter.{parameter_name}` query parameter format, where `{parameter_name}` corresponds to the specific filter name. 
The following sections detail the available filters for each entity.


### Research Product Filters  

The following filters can be used to refine search results for research products. 

| Filter name                | Description  |
|----------------------------|-------------|
| `filter.product_type`      | Filters by research product type: `literature`, `research data`, `research software`, or `other`. |
| `filter.topic`             | Filters by associated topic identifier. |
| `filter.contibutions.by`       | Filters by agent identifier who contributed to the research product. |
| `filter.contibutions.declared_affiliation`       | Filters by the declared affiliation of the agent that contributed to the research product. |
| `filter.relevant_organisation` | Filters by relevant organisation identifiers associated with the research product. |
| `filter.funding`           | Filters by associated grant identifiers. |
<!-- These are defined inside the manifestations (that is an array); how should we include those?-->
<!-- | `filter.date_created`      | Filters by the creation date of the research product. | -->
<!-- | `filter.date_modified`     | Filters by the last modification date. | -->
<!-- | `filter.date_published`    | Filters by the publication date of the research product. | -->
<!-- | `filter.access_rights`     | Filters by access rights (`open`, `closed`, `embargoed`, `restricted`, `unavailable`). | -->
<!-- | `filter.license`           | Filters by license type or URL. | -->


### Agents

The following filters can be used to refine search results for agents. 

| **Filter name**         | **Description** |
|-------------------------|----------------|
| `filter.entity_type` | Filter by the type of agent: `agent` (generic), `person`, or `organisation`. |
| `filter.name` | Filter agents by their full name. |
| `filter.affiliations.affiliation` | Filter agents by affiliated organisation ID. |
| `filter.short_name` | Filter organisations by their short name or acronym. |
| `filter.other_names` | Filter organisations by alternative names. |
| `filter.country` | Filter organisations by country code (ISO 3166-1 alpha-2). |
| `filter.type` | Filter organisations by type; refer [here](https://skg-if.github.io/interoperability-framework/docs/agent.html#type) for all available type options. |

### Grants

The following filters can be used to refine search results for grants. 

| **Filter name**                  | **Description** |
|----------------------------------|----------------|
| `filter.grant_number`           | Filter grants by their unique code (used by the funder). |
| `filter.acronym`                | Filter grants by their acronym. |
| `filter.funding_agency`         | Filter grants by the local identifier of the funding organisation. |
| `filter.funding_stream`         | Filter grants by the funding stream (e.g., Horizon Europe). |
| `filter.currency`               | Filter grants by the currency of the funded amount (ISO 4217 format). |
| `filter.funded_amount.from`          | Filter grants to include only those with a funded amount greater than or equal to the specified value. |
| `filter.funded_amount.to`          | Filter grants to include only those with a funded amount less than or equal to the specified value. |
| `filter.keywords`               | Filter grants by keywords associated with them. |
| `filter.duration.start.from`            | Filter grants to include only those with a **start date on or after** the specified date (ISO 8601 format). |
| `filter.duration.start.to`              | Filter grants to include only those with a **start date on or before** the specified date (ISO 8601 format). |
| `filter.duration.end.from`              | Filter grants to include only those with an **end date on or after** the specified date (ISO 8601 format). |
| `filter.duration.end.to`                | Filter grants to include only those with an **end date on or before** the specified date (ISO 8601 format). |  
| `filter.beneficiaries`          | Filter grants by a funded organisation. |
| `filter.contributions.by`       | Filter grants by contributors (Agent identifiers). |
| `filter.contributions.declared_affiliations` | Filter grants by the organisations affiliated with contributors. |

### Venues

The following filters can be used to refine search results for venues. 

| **Filter Name**                  | **Description** |
|----------------------------------|----------------|
| `filter.acronym`                | Filter venues by their acronym. |
| `filter.type`                   | Filter venues by their type; please refere [here](https://skg-if.github.io/interoperability-framework/docs/venue.html#type) for type options. |
| `filter.access_rights.status`   | Filter venues by their access status (open, closed, hybrid). |
| `filter.contributions.by`       | Filter venues by the identifier of an Agent who contributed. |
| `filter.contributions.roles`    | Filter venues by the role of a contributing Agent ( publisher or editor). |


### Topics

The following filters can be used to refine search results for topics. 

| **Filter Name**                | **Description** |
|--------------------------------|----------------|
| `filter.labels.{lang_code}`    | Filter topics by label in a specific language; `lang_code` represents language codes following [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g., `filter.labels.en=Computer Science`). |


### Data Sources

The following filters can be used to refine search results for data sources. 

| **Filter Name**                        | **Description** |
|-----------------------------------------|----------------|
| `filter.name`                           | Filter by the name of the data source. |
| `filter.persistent_identity_systems.for` | Filter data sources by the type of research product they support (`literature`, `research data`, `software`, `metadata` or `any`). |
| `filter.persistent_identity_systems.pid_schemes` | Filter by the persistent identifier schemes used (e.g., DOI, Handle, ORCID). |
| `filter.data_source_classification`     | Filter by data source classification; available options can be found [here](https://skg-if.github.io/interoperability-framework/docs/data-source.html#data_source_classification). |
| `filter.research_product_type`          | Filter by the type of research products the data source manages (`metadata`, `literature`, `research data`, `software` or `any`). |
| `filter.disciplines`                    | Filter by disciplines covered, using [Library of Congress Classification codes](https://id.loc.gov/authorities/classification). |
| `filter.policy.about`                   | Filter by policy type; available options can be found [here](https://skg-if.github.io/interoperability-framework/docs/data-source.html#policy). |
| `filter.policy.target`                  | Filter by the target of the policy (`metadata`, `research data`, `literature`, `software` or `any`). |
