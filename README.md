# dejavu: The Web UI for Elasticsearch and OpenSearch

[![GitHub License](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/appbaseio/dejavu/dev/LICENSE.md) ![React Version](https://img.shields.io/badge/react-v16.6-brightgreen.svg)
[![Docker Pulls](https://img.shields.io/docker/pulls/appbaseio/dejavu.svg)](https://hub.docker.com/r/appbaseio/dejavu/)

1. **[Dejavu: Intro](#1-dejavu-intro)**
2. **[Features](#2-features)**  
   a. [Easily Connect to Indices](#easily-connect-and-remember-indices)  
   b. [Visual Filters](#visual-filters)  
   c. [Modern UI Elements](#modern-ui-elements)  
   d. [Import JSON or CSV Data](#import-json-or-csv-data)  
   e. [Build search UIs](#build-search-uis)
3. **[Comparison](#3-comparison-with-other-data-browsers)**
4. **[Roadmap](#4-roadmap)**
5. **[Build Locally / Contributing](#5-build-locally)**
6. **[Get Dejavu](#6-get-dejavu)**  
   a. [Docker Installation](#docker-installation)  
   b. [Hosted Alternatives](#hosted-alternatives)

---

### 1. Dejavu Intro

**Dejavu** is a modern web UI for Elasticsearch and OpenSearch.

It was designed with the goal of providing a seamless user experience, featuring no page reloads, infinite scroll, filtered views, real-time updates, and a search UI builder. With 100% client-side rendering, Dejavu can easily be run as a [hosted app on github pages](https://dejavu.reactivesearch.io) or [as a docker image](https://hub.docker.com/r/appbaseio/dejavu/).

Starting `v1.0`, dejavu is the only Elasticsearch web UI that supports importing data via JSON and CSV files, as well as defining field mappings from the GUI.

Starting with `v1.5`, we support the ability of creating custom headers so you can easily pass different authentication headers, provide enhanced filtering and bulk updating of data via Elasticsearch's Query DSL.

Starting with `v2.0`, we support the ability to build faceted search UIs to test relevancy. You can also export the generated code to a codesandbox.

Starting with `v3.0`, we support the ability to connect to multiple indexes. You can also globally search across your indexes using global search bar.

### 2. Features

#### Easily Connect and Remember Indices

![Connect to an Index](https://raw.githubusercontent.com/appbaseio/dejavu/dev/media/f1.gif)

Dejavu allows you to connect to any index present in your cluster and caches each connected index locally, making them easily accessible when browsing again.

#### Visual Filters

![Filter Views](https://raw.githubusercontent.com/appbaseio/dejavu/dev/media/f2.gif)

Sort through data, find information visually, hide irrelevant data, and make sense of everything using the native data types. The global search bar allows you to perform text searches across your dataset.

Additionally, any filtered view can be exported as a JSON or CSV file.

#### Modern UI Elements

![Pagination](https://raw.githubusercontent.com/appbaseio/dejavu/dev/media/f3.gif)

It's not uncommon to have thousands of documents in your index. Dejavu supports a paginated view that also allows you to change the page size.

Dejavu also supports browsing data from multiple indexes and types, updating data either individually or via queries in bulk. Deletions are also supported.

#### Import JSON or CSV Data

![Import JSON or CSV files](https://raw.githubusercontent.com/appbaseio/dejavu/dev/media/f4.gif)

The importer view allows you to import CSV or JSON data directly into Elasticsearch through a guided data mapping configuration.

#### Build Search UIs

![Build search UIs](https://raw.githubusercontent.com/appbaseio/dejavu/dev/media/f5.gif)

With Search Preview, you can now build visual search UIs, test search relevancy, and export code to CodeSandbox.

---

### 3. Comparison with other data browsers

| Features           | dejavu                                                                              | [ES-head](https://github.com/mobz/elasticsearch-head)                        | [ES-kopf](https://github.com/lmenezes/elasticsearch-kopf)                 | [ES-browser](https://github.com/OlegKunitsyn/elasticsearch-browser)                     | [Kibana](https://github.com/elastic/kibana)                             |
| :----------------- | :---------------------------------------------------------------------------------- | :--------------------------------------------------------------------------- | :------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------- | :---------------------------------------------------------------------- |
| Installation       | Docker image, Hosted app                                                            | Elasticsearch plugin, static page                                            | Elasticsearch plugin, static page                                         | Elasticsearch plugin (doesn't work with 2.0+)                                           | Elasticsearch plugin                                                    |
| Modern UI          | React 16.6.                                                                         | jQuery 1.6.1, slightly stodgy                                                | Angular 1.x                                                               | ExtJs, a bit stodgy                                                                     | Node.JS, Hapi, Jade                                                     |
| Browser features   | [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete), data filters | Read data, full-text search                                                  | ❌                                                                        | Data view for a single type                                                             | Read view, visualizations, charting                                     |
| Data import/export | ✔️ JSON, CSV                                                                        | ❌                                                                           | ❌                                                                        | ❌                                                                                      | Only export, no CSV                                                     |
| Search preview     | Visually build and test search UI                                                   | ❌                                                                           | ❌                                                                        | ❌                                                                                      | ❌                                                                      |
| License            | [MIT](https://github.com/appbaseio/dejavu/blob/dev/LICENSE.md)                      | [Apache 2.0](https://github.com/mobz/elasticsearch-head/blob/master/LICENCE) | [MIT](https://github.com/lmenezes/elasticsearch-kopf/blob/master/LICENSE) | [Apache 2.0](https://github.com/OlegKunitsyn/elasticsearch-browser/blob/master/LICENSE) | [Apache 2.0](https://github.com/elastic/kibana/blob/master/LICENSE.txt) |

---

### 4. Roadmap

~~Here's a rough roadmap of things to come in the version `1.0.0` release.~~

🎆 We just hit the 1.0.0 roadmap:

-   [x] Battle-testing with different datasets
-   [x] Feature support for advanced filtering
        ~~Offline detection and reconnection for realtime updates~~
-   [x] Performance improvements while scrolling
-   [x] Support for importing and exporting data
-   [x] Support for a continuous query view
-   [x] Available as a docker image

🍾 We just hit the 2.0.0 release:

-   [x] An intuitive data editing experience in tabular mode (v/s JSON edit mode)
-   [x] View data types from within the data browser view
-   [x] A more streamlined import process
-   [x] Refactor codebase to improve hackability (Migrate to React 16+, ES6 syntax)
-   [x] Ability to build (and test) search visually

✨ We just hit the 3.0.0 release:

-   [x] Rewrite dejavu browser for high performance when browsing large datasets
-   [x] Add support for browsing multiple indexes
-   [x] Powerful filtering of data with field level facet based filters and a global search
-   [x] Built on React 16.6 and future compatible with React 17
-   [x] A more intuitive data editing experience (in addition to the raw JSON, we now show a relevant UI field with validations)

---

### 5. Build Locally

See the **[contributing guidelines](./CONTRIBUTING.md)**.

---

### 6. Get Dejavu

#### Docker Installation

```sh
docker run -p 1358:1358 -d appbaseio/dejavu
open http://localhost:1358/
```

You can also run a specific version of **dejavu** by specifying a tag. For example, version `3.6.0` can be used by specifying the `docker run -p 1358:1358 appbaseio/dejavu:3.6.0` command.

##### Cross-origin resource sharing (CORS)

To make sure you enable CORS settings for your Elasticsearch instance, add the following lines in the `elasticsearch.yml` configuration file.

```yaml
http.port: 9200
http.cors.allow-origin: 'http://localhost:1358'
http.cors.enabled: true
http.cors.allow-headers: X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization
http.cors.allow-credentials: true
```

If you are running your Elasticsearch with docker-compose, you can refer to the example [reference here](https://github.com/appbaseio/dejavu/blob/dev/docker-compose.yml).

If you are running your Elasticsearch with docker, you can use the following flags to pass the custom CORS configuration:

###### OpenSearch 1.x

```sh
docker run --name opensearch --rm -d -p 9200:9200 -e http.port=9200 -e discovery.type=single-node -e http.max_content_length=10MB -e http.cors.enabled=true -e http.cors.allow-origin=\* -e http.cors.allow-headers=X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization -e http.cors.allow-credentials=true -e plugins.security.disabled=true opensearchproject/opensearch:2.17.0
```

You can run both Opensearch and Dejavu together with:

`docker-compose up -d`

###### Elasticsearch 8.x

```sh
docker run -d --rm --name elasticsearch -p 127.0.0.1:9200:9200 -e http.port=9200 -e discovery.type=single-node -e http.max_content_length=10MB -e http.cors.enabled=true -e http.cors.allow-origin=\* -e http.cors.allow-headers=X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization -e http.cors.allow-credentials=true -e network.publish_host=localhost -e xpack.security.enabled=false docker.elastic.co/elasticsearch/elasticsearch:8.15.1
```

You can run both Elasticsearch 8.15.1 and Dejavu together with:

`docker-compose -f docker-compose-v8.yml up -d`

###### Elasticsearch 7.x

```sh
docker run -d --rm --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" -e "http.cors.enabled=true" -e "http.cors.allow-origin=*" -e "http.cors.allow-headers=X-Requested-With,X-Auth-Token,Content-Type,Content-Length,Authorization" -e "http.cors.allow-credentials=true" docker.elastic.co/elasticsearch/elasticsearch-oss:7.10.2
```

You can run both Elasticsearch 7.10.2 and Dejavu together with:

`docker-compose -f docker-compose-v7.yml up -d`

#### Hosted Alternatives

**dejavu** can also be run as a hosted app at https://dejavu.appbase.io.

---
