---
sidebar_position: 3
---

# Namespaces

**This should be the first function ran after the [`connect()`](./init) function** as it returns the prefix and hierarchy delimiter to personal and shared namespaces that the logged in user has access to. This is a crucial component for the [GET folders](#) function.

## Usage

```ts
let namespaces = await imap.getNamespaces()
```

## Response

The response is an `Array<string>` that returns all the namespaces the logged in user has access to.

```ts
[ "INBOX/" ]
```