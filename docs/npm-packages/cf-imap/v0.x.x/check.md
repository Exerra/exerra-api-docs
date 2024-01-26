---
sidebar_position: 6
---

# Check

This command requests the IMAP server to do some maintenance on the mailbox. It is weird for a client to be able to request this, and it basically isn't used anywhere, however it is included due to it being in the `RFC 3501` spec.

## Usage

```ts
await imap.check()
```