---
sidebar_position: 2
---

# EXPUNGE

:::tip
A folder must be selected (see ["SELECT folder"](../folders/select)) before running this function.
:::

:::danger
This function **permanently deletes** all messages marked with the `\Deleted` flag. Make sure you only run it after marking the intended messages with `storeFlags(..., ["Deleted"], "add")`.
:::

This function permanently removes all messages marked with the `\Deleted` flag from the selected mailbox.

## Usage

```ts
// Plain EXPUNGE — removes all \Deleted messages
let expunged = await imap.expunge()

// UID EXPUNGE — only removes \Deleted messages whose UID is in the range
let expungedUids = await imap.expunge({ range: "1:10", useUid: true })
```

| Argument | Type | Description |
| ---- | ---- | ---- |
| `range` | `string` | Optional sequence/UID range to restrict expunging to. **Required for `UID EXPUNGE`**. |
| `useUid` | `boolean` | Uses `UID EXPUNGE` when true. |

## Response

Returns the sequence numbers (or UIDs) of the expunged messages:

```ts
[ 12, 13, 14 ]
```

:::info
After an expunge the sequence numbers of the remaining messages shift. Use UIDs (`useUid: true` everywhere) if you need stable references.
:::
