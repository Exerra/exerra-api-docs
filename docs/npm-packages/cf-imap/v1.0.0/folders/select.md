---
sidebar_position: 2
---

# SELECT folder

This function selects a folder that mail commands get executed in.

**It is absolutely crucial to run this before running any mail commands** (or pass the `folder` prop to [`fetchEmails()`](../emails/fetch)). Doing so otherwise will cause an error.

## Usage

```ts
let mailbox = await imap.selectFolder("INBOX")
```

## Response

The response is a typed `MailboxInfo`:

```ts
type MailboxInfo = {
    emails: number,             // number of messages (EXISTS)
    recent: number,             // number of recent messages (RECENT)
    unseen?: number,            // OK [UNSEEN n]
    uidNext?: number,           // OK [UIDNEXT n]
    uidValidity?: number,       // OK [UIDVALIDITY n]
    flags: string[],            // flags supported by the mailbox, e.g. ["Answered", "Flagged", "Seen"]
    permanentFlags: string[],   // flags that can be stored permanently, e.g. ["Seen", "Deleted", "*"]
    readOnly: boolean           // true if the mailbox was opened read-only
}
```

```ts
{
    emails: 78,
    recent: 0,
    unseen: 1,
    uidNext: 92,
    uidValidity: 1687639849,
    flags: [ 'Answered', 'Flagged', 'Draft', 'Deleted', 'Seen' ],
    permanentFlags: [ 'Answered', 'Flagged', 'Draft', 'Deleted', 'Seen', '*' ],
    readOnly: false
}
```

:::info
The `unseen`, `uidNext`, `uidValidity` and `permanentFlags` fields are optional because not every server reports them (or reports them differently). Some servers (e.g. Dovecot) send them as untagged `* OK [...]` lines, which is handled.
:::
