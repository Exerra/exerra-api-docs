---
sidebar_position: 2
---

# SELECT folder

This function selects a folder that mail commands get executed in.

**It is absolutely crucial to run this before running any mail commands**. Doing so otherwise will cause an error.

## Usage

```ts
let selected = await imap.selectFolder("INBOX")
```

## Response

This is the only function without a statically typed response, as the response can vary between providers. The returned promise has a type of `Array<{ [key: string]: any }>`.

For-certain keys are - `emails`, `recent`, `flags` & `permanentFlags`. However, it is still recommended to check for them (TypeScript insists on it anyway).

```ts
{
    // --- for-certain keys ---
    emails: 38,
    recent: 0,
    flags: [ 'Answered', 'Flagged', 'Draft', 'Deleted', 'Seen' ],
    permanentFlags: [ 'Answered', 'Flagged', 'Draft', 'Deleted', 'Seen', '*' ],
    // --- dynamically added keys ---
    unseen: 1, // boolean as an int
    uidvalidity: 1705347135,
    uidnext: 40,
    highestmodseq: 53,
    urlmech: NaN,
    annotations: 65536
}
```

After a few more providers will be tested, it will be possible to determine the for-certain keys and statically type them, however, until then the response in its entirety stays dynamic.