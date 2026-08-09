---
sidebar_position: 4
---

# MOVE emails

This function moves messages to another folder. It requires the `MOVE` capability (`RFC 6851`) — check `imap.capabilities` if you're not sure your provider supports it.

## Usage

```ts
await imap.move("INBOX/archive", "1:5")              // move by sequence numbers
await imap.move("INBOX/archive", "42", true)         // move a single UID
```

| Argument | Type | Description |
| ---- | ---- | ---- |
| `target` | `string` | Destination folder. |
| `range` | `string` | Sequence number range (or UID range with `useUid`), e.g. `"1:5"` or `"42"`. |
| `useUid` | `boolean` | Uses `UID MOVE` when true. |

:::info
MOVE is a combined COPY + EXPUNGE — the messages are copied to the target folder and removed (with `\Deleted`) from the selected one. If your provider lacks `MOVE`, use `copy()` followed by `storeFlags(..., ["Deleted"], "add")` and `expunge()`.
:::
