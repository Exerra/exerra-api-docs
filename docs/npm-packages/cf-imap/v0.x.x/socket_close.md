---
sidebar_position: 3.5
---

# Closing the connection

`cf-imap` exposes the [raw TCP socket](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/) that is used to communicate with the IMAP server. To close the socket you can use the built-in close function.

```ts
await imap.socket?.close()
```