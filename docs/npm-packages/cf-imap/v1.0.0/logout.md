---
sidebar_position: 8
---

# Logging out

This function lets you log out of the session and close the socket. It is recommended to use this as to not run the Worker needlessly (some providers auto-kick you after a while, some keep the connection open indefinitely).

## Usage

```ts
await imap.logout()
```

`close()` is an alias of `logout()` — both return `true` when done.

After logging out, the instance is left in a "not connected" state: calling any other function will throw a descriptive error until `connect()` is ran again.
