---
sidebar_position: 6
---

# Check

This command requests the IMAP server to do some maintenance on the mailbox. It is weird for a client to be able to request this, and it basically isn't used anywhere, however it is included due to it being in the `RFC 3501` spec.

:::info
The latest IMAP spec (`RFC 9051`, published in 2021) [removes the CHECK command](https://datatracker.ietf.org/doc/html/rfc9051#appendix-E-2.17), however most providers still support it.
:::

## Usage

```ts
await imap.check()
```