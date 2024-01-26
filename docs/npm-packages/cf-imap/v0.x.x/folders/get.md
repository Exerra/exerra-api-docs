---
sidebar_position: 1
---

# GET folders

This function lists all the folders in a [namespace](../namespaces).

## Usage

This function takes in 2 parameters - namespace & filter.

```ts
let folders = await imap.getFolders("INBOX/", "*")
```

## Response

The type for the response of this function is `Array<{ name: string, delimiter: string, attributes: string[] }>`.

```ts
[
    {
        name: 'INBOX/Archive',
        delimiter: '"/"',
        attributes: [ 'HasNoChildren' ]
    },
    {
        name: 'INBOX/draft',
        delimiter: '"/"',
        attributes: [ 'HasNoChildren', 'Drafts' ]
    }
    // [...]
]
```