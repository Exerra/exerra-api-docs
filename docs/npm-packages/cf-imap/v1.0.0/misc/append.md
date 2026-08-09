---
sidebar_position: 6
---

# APPEND

This function appends a message to a folder.

## Usage

```ts
const rawMessage = [
    "From: user@example.com",
    "To: friend@example.com",
    "Subject: Hello",
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "",
    "Hello there!",
    ""
].join("\r\n")

await imap.append("INBOX", rawMessage)

// With flags and an internal date
await imap.append("INBOX", rawMessage, ["Seen"], new Date())
```

| Argument | Type | Description |
| ---- | ---- | ---- |
| `folder` | `string` | Destination folder. |
| `message` | `string \| Uint8Array` | The full raw message (headers + body). |
| `flags` | `string[]` | Flags to set on the appended message, e.g. `["Seen"]`. |
| `internalDate` | `Date` | Internal date of the message (optional). |

The message is sent as an IMAP literal, so it may contain binary data and any line endings.
