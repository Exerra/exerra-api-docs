---
sidebar_position: 3
---

# Namespaces

**This should be the first function ran after the [`connect()`](./init) function** as it returns the prefixes and hierarchy delimiters of the namespaces available to the logged in user. This is a crucial component for the [GET folders](./folders/get) function.

## Usage

```ts
let namespaces = await imap.getNamespaces()
```

## Response

The response is a typed object containing the personal, other and shared namespaces:

```ts
{
    personal: [
        { prefix: "INBOX/", delimiter: "/" }
    ],
    other: [],
    shared: []
}
```

| Key | Type | Description |
| ---- | ---- | ---- |
| `personal` | `Namespace[]` | Namespaces that are personal to the logged in user. |
| `other` | `Namespace[]` | Namespaces that belong to other users. |
| `shared` | `Namespace[]` | Namespaces that are shared between users. |

Where `Namespace` is:

```ts
type Namespace = {
    prefix: string,     // e.g. "INBOX/"
    delimiter: string   // e.g. "/" (empty string if NIL)
}
```

A namespace with a `prefix` of `""` is the root namespace — pass the prefix as the first argument to [`getFolders()`](./folders/get).
