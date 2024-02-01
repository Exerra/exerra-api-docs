---
sidebar_position: 3.5
---

# Logging out

> Introduced in v0.0.8

This function lets you log out of the session and close the socket. It is recommended to use this as to not run the Worker needlessly (some providers auto-kick you after a while, some keep the connection open indefinitely).

## Usage

```ts
await imap.logout()
```