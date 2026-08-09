---
sidebar_position: 3
---

# COPY emails

This function copies messages to another folder.

## Usage

```ts
await imap.copy("INBOX/archive", "1:5")              // copy by sequence numbers
await imap.copy("INBOX/archive", "42", true)         // copy a single UID
```

| Argument | Type | Description |
| ---- | ---- | ---- |
| `target` | `string` | Destination folder. |
| `range` | `string` | Sequence number range (or UID range with `useUid`), e.g. `"1:5"` or `"42"`. |
| `useUid` | `boolean` | Uses `UID COPY` when true. |

Throws an [`ImapError`](../error_handling) if the target folder doesn't exist or the range is invalid.
