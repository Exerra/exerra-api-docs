---
sidebar_position: 7
---

# Errors

They are a part of life when coding. They happen in every project, and thus they should be as descriptive as possible.

## ImapError

`cf-imap` throws a descriptive `ImapError` whenever the IMAP server responds to a command with an error status (`NO` or `BAD`). It is an `Error` subclass with a few extra properties:

```ts
import { CFImap, ImapError } from "cf-imap"

try {
    await imap.connect()
} catch (e) {
    if (e instanceof ImapError) {
        console.log(e.status)        // "NO" | "BAD"
        console.log(e.tag)           // the command tag, e.g. "A1"
        console.log(e.messageText)   // the server's error message, e.g. "Login failed"
        console.log(e.untagged)      // the raw untagged response items received before the error
    }
}
```

| Property | Type | Description |
| ---- | ---- | ---- |
| `status` | `"NO" \| "BAD"` | The status code of the tagged response. |
| `tag` | `string` | The command tag the error belongs to. |
| `messageText` | `string` | The human-readable message from the server. |
| `untagged` | `{ line: string, literal?: Uint8Array }[]` | The raw untagged response items received before the error — great for debugging. |

## Other errors

Non-protocol failures throw regular `Error`s:

- **Read timeouts** — `IMAP read timed out after Xms` (configurable via the `timeoutMs` option).
- **Connection drops** — `IMAP connection closed by server`.
- **Usage mistakes** — e.g. running a command before `connect()` or before selecting a folder.

If you believe something that *should* work is throwing an error, [raise an issue on GitHub](https://github.com/Exerra/cf-imap/issues) and include the error message along with `e.untagged` / the `cause` of the error.
