---
sidebar_position: 2
---

# Initialisation

The `CFImap` class can be created in any part of the code, **however it is advised to use the `connect()` function only in a request handler**. That is because the Cloudflare Workers platform limits some functionality (mainly `await`) outside of handlers.

```ts
import { CFImap } from "cf-imap"

const imap = new CFImap({
    host: "mail.example.com",
    port: 993,
    tls: true,
    auth: {
        username: "user@example.com",
        password: "pa$$w0rd"
    }
})

const handleRequest = async () => {
    await imap.connect()
}
```

From now on, the docs will assume that the initialised CFImap class is called `imap`.