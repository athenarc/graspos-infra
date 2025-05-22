# Searching for entities

The Core API specification provides endpoints for retrieving multiple records of various entities, allowing users to search entities based on specific criteria.
The following endpoints are available for searching:

- **Research Products** – `/api/products`
- **Agents** – `/api/agents`
- **Grants** – `/api/grants`
- **Venues** – `/api/venues`
- **Topics** – `/api/topics`
- **Data Sources** – `/api/datasources`

Each endpoint enables the retrieval of all instances of the respective entity, 
supporting [entity-specific filtering](#entity-specific-filtering) along with [common request parameters](#common-request-parameters) for pagination and sorting.


## Common request parameters

All entity-specific endpoints support a set of common query parameters to ensure consistent way to fiter, paginate, and sort API results:


| Parameter      |    Description |
|----------------|---------------|
| `local_identifier`  | Filters by the unique local identifier. |
| `identifier`        | Filters by an external identifier in the form of `scheme:value`, e.g., `identifier=doi:10.1234/example`. |
| `page`           | The page number for pagination (starting from 1). |
| `page_size`       | Number of results per page. |
| `sort`           | Field by which to sort the results (e.g., `sort=year:desc`); supports ascending (`asc`) and descending (`desc`) order. |

## Common response format

Each API response follows a standardised JSON format, including a common header segment that provides metadata about the search results:

```json
{
    "meta": {
        "count": 100, 
        "page": 1,
        "page_size": 10
    },
    "results": [ ... ]
}
```

The `meta` object in the response contains the following properties:

* **count** - Total number of results matching the query.
* **page** - Current page number.
* **page_size** - Number of results returned per page.

Finally, the `results` field contains an array of entity objects, as described in the RA-SKG, matching the query.


## Entity-specific filtering

Each entity supports a set of filters based on its specific attributes, allowing users to refine the API results more effectively. 
These filters correspond to key properties of each entity, e.g., the publication year for research products.

The following sections detail the available filters for each entity.


### Research Product Filters  

The following filters can be used to refine search results for research products. 

| Filter name                | Description  |
|----------------------------|-------------|
| `product_type`      | Filters by research product type: `literature`, `research data`, `research software`, or `other`. |
| `topic`             | Filters by associated topic identifier. |
| `contributions.by`       | Filters by agent identifier who contributed to the research product. |
| `contributions.declared_affiliation`       | Filters by the declared affiliation of the agent that contributed to the research product. |
| `relevant_organisation` | Filters by relevant organisation identifiers associated with the research product. |
| `funding`           | Filters by associated grant identifiers. |
<!-- These are defined inside the manifestations (that is an array); how should we include those?-->
<!-- | `filter.date_created`      | Filters by the creation date of the research product. | -->
<!-- | `filter.date_modified`     | Filters by the last modification date. | -->
<!-- | `filter.date_published`    | Filters by the publication date of the research product. | -->
<!-- | `filter.access_rights`     | Filters by access rights (`open`, `closed`, `embargoed`, `restricted`, `unavailable`). | -->
<!-- | `filter.license`           | Filters by license type or URL. | -->

See the [RA-SKG Metrics Filtering](#filtering-by-ra-skg-metrics) section for available query parameters related to research assessment indicators.

### Agents

The following filters can be used to refine search results for agents. 

| **Filter name**         | **Description** |
|-------------------------|----------------|
| `entity_type` | Filter by the type of agent: `agent` (generic), `person`, or `organisation`. |
| `name` | Filter agents by their full name. |
| `affiliations.affiliation` | Filter agents by affiliated organisation ID. |
| `short_name` | Filter organisations by their short name or acronym. |
| `other_names` | Filter organisations by alternative names. |
| `country` | Filter organisations by country code (ISO 3166-1 alpha-2). |
| `type` | Filter organisations by type; refer [here](https://skg-if.github.io/interoperability-framework/docs/agent.html#type) for all available type options. |

See the [RA-SKG Metrics Filtering](#filtering-by-ra-skg-metrics) section for available query parameters related to research assessment indicators, and the [RA-SKG Profiles Filtering](#filtering-by-ra-skg-profiles) section for available query parameters related to research assessment profiles.

### Grants

The following filters can be used to refine search results for grants. 

| **Filter name**                  | **Description** |
|----------------------------------|----------------|
| `grant_number`           | Filter grants by their unique code (used by the funder). |
| `acronym`                | Filter grants by their acronym. |
| `funding_agency`         | Filter grants by the local identifier of the funding organisation. |
| `funding_stream`         | Filter grants by the funding stream (e.g., Horizon Europe). |
| `currency`               | Filter grants by the currency of the funded amount (ISO 4217 format). |
| `funded_amount.from`          | Filter grants to include only those with a funded amount greater than or equal to the specified value. |
| `funded_amount.to`          | Filter grants to include only those with a funded amount less than or equal to the specified value. |
| `keywords`               | Filter grants by keywords associated with them. |
| `duration.start.from`            | Filter grants to include only those with a **start date on or after** the specified date (ISO 8601 format). |
| `duration.start.to`              | Filter grants to include only those with a **start date on or before** the specified date (ISO 8601 format). |
| `duration.end.from`              | Filter grants to include only those with an **end date on or after** the specified date (ISO 8601 format). |
| `duration.end.to`                | Filter grants to include only those with an **end date on or before** the specified date (ISO 8601 format). |  
| `beneficiaries`          | Filter grants by a funded organisation. |
| `contributions.by`       | Filter grants by contributors (Agent identifiers). |
| `contributions.declared_affiliations` | Filter grants by the organisations affiliated with contributors. |

### Venues

The following filters can be used to refine search results for venues. 

| **Filter Name**                  | **Description** |
|----------------------------------|----------------|
| `acronym`                | Filter venues by their acronym. |
| `type`                   | Filter venues by their type; please refere [here](https://skg-if.github.io/interoperability-framework/docs/venue.html#type) for type options. |
| `access_rights.status`   | Filter venues by their access status (open, closed, hybrid). |
| `contributions.by`       | Filter venues by the identifier of an Agent who contributed. |
| `contributions.roles`    | Filter venues by the role of a contributing Agent ( publisher or editor). |


### Topics

The following filters can be used to refine search results for topics. 

| **Filter Name**                | **Description** |
|--------------------------------|----------------|
| `labels.{lang_code}`    | Filter topics by label in a specific language; `lang_code` represents language codes following [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes) (e.g., `labels.en=Computer Science`). |


### Data Sources

The following filters can be used to refine search results for data sources. 

| **Filter Name**                        | **Description** |
|-----------------------------------------|----------------|
| `name`                           | Filter by the name of the data source. |
| `persistent_identity_systems.for` | Filter data sources by the type of research product they support (`literature`, `research data`, `software`, `metadata` or `any`). |
| `persistent_identity_systems.pid_schemes` | Filter by the persistent identifier schemes used (e.g., DOI, Handle, ORCID). |
| `data_source_classification`     | Filter by data source classification; available options can be found [here](https://skg-if.github.io/interoperability-framework/docs/data-source.html#data_source_classification). |
| `research_product_type`          | Filter by the type of research products the data source manages (`metadata`, `literature`, `research data`, `software` or `any`). |
| `disciplines`                    | Filter by disciplines covered, using [Library of Congress Classification codes](https://id.loc.gov/authorities/classification). |
| `policy.about`                   | Filter by policy type; available options can be found [here](https://skg-if.github.io/interoperability-framework/docs/data-source.html#policy). |
| `policy.target`                  | Filter by the target of the policy (`metadata`, `research data`, `literature`, `software` or `any`). |




### Filtering by RA-SKG metrics

To support filtering by metrics as defined in the RA-SKG extension (for [Products](https://skg-if.github.io/ext-ra-skg/extended-interoperability-framework/core-extensions/ra-skg-research-product.html) and [Agents](https://skg-if.github.io/ext-ra-skg/extended-interoperability-framework/core-extensions/ra-skg-agent.html)), the GraspOS API specification introduces additional query parameters. These filters enable users to refine search results based on the presence and values of research assessment indicators, as described by the [ra_metrics](https://skg-if.github.io/ext-ra-skg/extended-interoperability-framework/core-extensions/ra-skg-research-product.html#ra_metrics) property.

These parameters enable filtering capabilities over both scalar metrics (e.g., citation counts) and badges. Some filters are applicable exclusively to one type (scalar or badge), while others are relevant to both.

| Filter name      | Description                                                              | Applicable for |
| -------------------- | ------------------------------------------------------------------------ | -------------- |
| `ra_metric.ra_measure.class`       | The URL of the class identifying the entity (e.g., in an ontology) describing that type. | Scalar |
| `ra_metric.ra_measure.label`       | The label describing the type. | Scalar |
| `ra_metric.ra_measure.defined_id`  | The URL of the schema of the manifestation type. | Scalar |
| `ra_metric.ra_value_min`   | Minimum threshold for the metric value.                     | Scalar |
| `ra_metric.ra_value_max`   | Maximum threshold for the metric value.                     | Scalar |
| `ra_metric.ra_provider`    | ID of the Agent that provided the metric.        | Scalar, Badge |
| `ra_metric.class`       | The URL of the class identifying the entity (e.g., in an ontology) describing that type.        | Badge |
| `ra_metric.label`       | The label describing the type. | Badge |
| `ra_metric.defined_in`  | The URL of the schema of the manifestation type.               | Badge |


### Filtering by RA-SKG profiles

To support filtering based on the [ra_profiles](https://skg-if.github.io/ext-ra-skg/extended-interoperability-framework/core-extensions/ra-skg-agent.html#ra_profiles) field of RA-SKG Agents, the GraspOS API specification defines the following additional query parameters. These filters allow users to search for Agents that include specific profile information.


| Filter name                | Description                                                                                                                                                                        |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ra_profile.title`       | Filter entities that include an RA profile with a given title (full or partial match).                                                                                             |
| `ra_profile.ra_template`       | Filter by the URL of the template that is used to create the CV.                                                                                             |
| `ra_profile.ra_section.title`       | Filter entities that include a section within an RA profile matching this title (full or partial match).                                                                                                   |
| `ra_profile.ra_section.ra_content_contains`    | Keyword or phrase search within the `ra_content` text of all sections. Useful for full-text search or relevance.                                                                   |
| `ra_profile.ra_section.description` | Filter sections by description text, e.g., to find those with specific guidelines like word limits or thematic focus.      
| `ra_profile.ra_section.cites`       | Filter entities that cite a specific research product by its identifier. Multiple comma-separated values allow filtering for sections citing any of the listed products. |
                                                        |
