# mermaid

<!-- toc -->

## Generic Graph

```mermaid
graph LR

    subgraph "&nbsp;"

        business["Business"]
        support["Customer Support"]
        product["Product"]
        architecture["Architecture"]
        development["Development"]
        qa["Quality Assurance"]
        operations["Operations"]

        product <-- "request\nfeatures" --> business
        support -- "metrics" --> business
        support <-- "request\nfeatures" --> product
        product <-- "requirements" --> architecture
        architecture <-- "design" --> development
        development -- "release\ncandidate" --> qa
        qa -- "report\nissues" --> development
        support -- "report\nissues" --> development
        qa -- "release" --> operations
        operations -- "report\nissues" --> development
        operations -- "analytics" --> business

        business -- "analyze" --> business
        product -- "iterate" --> product
        architecture -- "iterate" --> architecture
        development -- "iterate" --> development
        qa -- "test" --> qa
        operations -- "configure,\nmonitor" --> operations

    end
```

## Sequence Diagram

```mermaid
sequenceDiagram

    actor user as User
    participant browser as Web Browser
    participant server as Web Server

    user ->> browser: click <a href="page_url">...</a>

    activate browser
    browser ->> server: send GET for page_url
    server ->> browser: HTML
    note over user, server: executing JS, rendering HTML and fetching resources is interleaved and asynchronous
    browser ->> browser: execute JS
    browser ->> browser: render HTML
    loop for each tag with src="src_url" in HTML
        browser ->> server: send GET for src_url
        server ->> browser: entity
    end
    deactivate browser
```
