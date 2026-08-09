---
sidebar_position: 9
---

# Extendability

:::warning
Breaking change from `v0.x.x`: the raw socket, writer, reader, encoder and decoder are **no longer exposed** as public properties. They are now internal implementation details of the package.
:::

This was done as part of the protocol rewrite — commands now go through a tagged pipeline with a single, literal-aware response reader, so exposing the raw streams would allow bypassing that state machine and corrupting the connection state.

## What to use instead

- **Accessing data the package doesn't parse yet** — the raw response items are available on thrown errors via `ImapError.untagged` (see [Errors](./error_handling)).
- **Custom commands / unsupported functionality** — if you need something the package doesn't support (e.g. folder management commands), please [raise an issue on GitHub](https://github.com/Exerra/cf-imap/issues) — there is a good chance it fits the package's roadmap.

## Public surface

The `CFImap` instance exposes the following for inspection:

| Property | Type | Description |
| ---- | ---- | ---- |
| `imap.session` | `{ id?: string, protocol?: string }` | Session information after connecting. |
| `imap.capabilities` | `string[]` | Capabilities advertised by the server, e.g. `["IMAP4rev1", "UIDPLUS", "MOVE"]`. |
| `imap.selectedFolder` | `string` | The currently selected folder. |
