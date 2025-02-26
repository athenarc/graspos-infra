---
id: resolver-api
title: Resolver API
sidebar_label: Resolver API
slug: /api-spec/resolver-api
---

The Resolver API follows the **[SKG-IF API specification](https://skg-if.github.io/api/)** for **resolving identifiers** into their structured representations.  
This approach enables seamless integration between SKG-IF compliant metadata providers and consumers by offering a standard way to retrieve entity details using various identifier schemes.  
 
The Resolver API provides endpoints to support the following functionalities:  

- List supported identifier schemes.
- Resolve a **single identifier** into its SKG-IF compliant metadata object.
- Resolve **multiple identifiers** in a batch request.

We elaborate on the relevant API endpoints below.

## API Endpoints  

### List supported identifier schemes  

Returns a list of identifier schemes supported by the API.  

**Request:**

```http
GET /api/list_schemes
```

**Example response:**
```json
{
  "schemes": ["local", "doi", "orcid", "handle", "cordis", "openalex"]
}
```

The "local" scheme should be always present, referring to internal identifiers used within GraspOS.

### Resolve a single identifier

Retrieves the SKG-IF compliant metadata object of an entity based on its identifier and its relevant scheme.

**Request:**

```http
GET /api/resolve/{scheme}:{id}
```

**Example:** 

```https
GET /api/resolve/orcid:0000-1111-2222-3333
```

The response of this request is one of the core entities defined in [SKG-IF](https://skg-if.github.io/interoperability-framework/), extended by RA-SKG.

If the identifier is not found, the API should return a 404 Not Found response.

### Resolve multiple identifiers

Allows batch resolution of multiple identifiers in a single request.

**Request:**

```http
POST /api/resolve
Content-Type: application/json
```

**Example request body:**

```json
{
  "identifiers": ["doi:10.1234/example", "orcid:0000-1111-2222-3333"]
}
```

The response is a list of entities, each structured in the same way as the response for a single identifier resolution (see above).

If any identifier cannot be resolved, it will be omitted from the results or an appropriate error message will be included.

