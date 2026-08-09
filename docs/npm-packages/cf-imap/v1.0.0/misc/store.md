---
sidebar_position: 1
---

# STORE flags

:::tip
A folder must be selected (see ["SELECT folder"](../folders/select)) before running this function.
:::

This function adds, removes or replaces flags on one or more messages.

## Usage

```ts
await imap.storeFlags("1:5", ["Seen"], "add")       // add the \Seen flag
await imap.storeFlags("1:5", ["Seen"], "remove")    // remove the \Seen flag
await imap.storeFlags("1:5", ["Flagged"], "replace")// replace all flags with \Flagged

// By UID instead of sequence number
await imap.storeFlags("42", ["Deleted"], "add", true)
```

| Argument | Type | Description |
| ---- | ---- | ---- |
| `target` | `string` | Sequence number range (or UID range with `useUid`), e.g. `"1:5"` or `"42"`. |
| `flags` | `string[]` | Flags without the backslash, e.g. `["Seen", "Flagged"]`. |
| `mode` | `"add" \| "remove" \| "replace"` | Defaults to `"add"`. |
| `useUid` | `boolean` | Uses `UID STORE` when true. |

## Response

Returns the updated flags of each message that the server reported as changed:

```ts
[ { seq: 1, flags: [ 'Flagged', '$NotJunk' ] } ]
```

:::info
Servers only report messages whose flags actually changed — a no-op STORE may return an empty array.
:::
