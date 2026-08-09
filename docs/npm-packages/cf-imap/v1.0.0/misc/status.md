---
sidebar_position: 5
---

# STATUS

This function requests status information about a folder without selecting it.

## Usage

```ts
let status = await imap.status("INBOX")

// Only request specific items
let minimal = await imap.status("INBOX", ["MESSAGES", "UNSEEN"])
```

By default all of the following items are requested: `MESSAGES`, `RECENT`, `UIDNEXT`, `UIDVALIDITY`, `UNSEEN`.

## Response

Returns a `Record<string, number>` with lowercased keys:

```ts
{
    messages: 78,
    recent: 0,
    uidnext: 92,
    uidvalidity: 1687639849,
    unseen: 23
}
```
