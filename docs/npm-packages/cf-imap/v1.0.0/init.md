---
sidebar_position: 2
---

# Initialisation

The `CFImap` class can be created in any part of the code, **however it is advised to use the `connect()` function only in a request handler**. That is because the Cloudflare Workers platform limits some functionality (mainly `await`) outside of handlers.

## Usage

The constructor takes an `Options` object:

```ts
import { CFImap } from "cf-imap"

const imap = new CFImap({
    host: "mail.example.com",
    port: 993,
    tls: true,
    auth: {
        username: "user@example.com",
        password: "pa$$w0rd"
    },
    timeoutMs: 30000 // optional, defaults to 30000
})

const handleRequest = async () => {
    await imap.connect()
}
```

| Option | Type | Description |
| ---- | ---- | ---- |
| `host` | `string` | Hostname of the IMAP server. |
| `port` | `number` | Port of the IMAP server (usually `993` with TLS or `143` without). |
| `tls` | `boolean` | Whether to use TLS (STARTTLS upgrade after connecting). |
| `auth.username` | `string` | Username used for authentication. |
| `auth.password` | `string` | Password used for authentication. |
| `timeoutMs` | `number` | Read timeout for IMAP responses in milliseconds (optional, defaults to `30000`). |

## connect()

Connects to the IMAP server, reads the greeting and authenticates. On success the session is stored on the instance:

```ts
await imap.connect()

imap.session          // { id?: string, protocol?: string }
imap.capabilities     // string[], e.g. ["IMAP4rev1", "UIDPLUS", "MOVE"]
```

If the server rejects the login (or any response is an error), a descriptive [`ImapError`](./error_handling) is thrown.

From now on, the docs will assume that the initialised CFImap class is called `imap`.
