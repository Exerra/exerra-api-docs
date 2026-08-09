---
sidebar_position: 1
---

# GET folders

This function lists all the folders in a [namespace](../namespaces).

## Usage

This function takes in 2 parameters - namespace & filter. The filter supports the IMAP wildcards (`*` matches everything, `%` matches everything at the current hierarchy level).

```ts
let folders = await imap.getFolders("INBOX/", "*")
```

The response is a typed `Folder[]`:

```ts
type Folder = {
    name: string,           // e.g. "INBOX/Archive"
    delimiter: string,      // e.g. "/"
    attributes: string[]    // e.g. ["HasNoChildren", "Drafts"] (no backslash)
}
```

```ts
[
    {
        name: 'INBOX/Archive',
        delimiter: '/',
        attributes: [ 'HasNoChildren' ]
    },
    {
        name: 'INBOX/draft',
        delimiter: '/',
        attributes: [ 'HasNoChildren', 'Drafts' ]
    }
    // [...]
]
```

:::info
Folder names containing spaces, quotes or other special characters (including names returned as IMAP literals by the server) are parsed correctly.
:::
