---
sidebar_position: 1
---

# FETCH email(s)

:::tip
The ["SELECT folder" function](../folders/select) must be ran at least once before this function.
:::

This function fetches a certain amount of emails from a selected folder.

This is a complex function due to the parsing involved, and thus if the IMAP server throws something weird out, the code might get confused. Have yet to seen such a case, but it might happen.

## Usage

This function takes in props with the following type:

```ts
export type FetchEmailsProps = {
    folder: string,
    byteLimit?: number, // Not recommended as it may break parsing.
    limit: [number, number],
    peek?: boolean // If true (when undefined defaults to true), fetching the email won't set the "\Seen" flag
}
```

```ts
let emails = await imap.fetchEmails({
    limit: [35, 35],
    folder: "INBOX"
})
```

## Response

The type for the response of this function is:

```ts
export type Email = {
    from: string,
    to: string,
    subject: string,
    messageID: string,
    contentType: string,
    date: Date,
    raw: string,
    body: string
}
```

And the response is:

```ts
[
  {
    from: 'coworker@example.com',
    to: 'user@example.com',
    subject: 'Very important email',
    messageID: '<id@mail.example.com>',
    contentType: 'text/plain; charset="UTF-8"',
    date: 2024-01-01T12:00:00.000Z,
    raw: '* 35 FETCH (BODY[HEADER.FIELDS (SUBJECT FROM TO MESSAGE-ID CONTENT-TYPE DATE)] {256}\n' +
      'From: coworker@example.com\n' +
      'Date: Mon, 1 Jan 2024 12:00:00 -0800\n' +
      'Message-ID: <id@mail.example.com>\n' +
      'Subject: Very important email\n' +
      'To: user@exerra.xyz\n' +
      'Content-Type: text/plain; charset="UTF-8"\n' +
      '\n' +
      ' BODY[TEXT] {55}\n' +
      'Lorum ipsum dolor sit amet.\n' +
      ')\n' + // sidenote, not quite sure why it responds with this, however the code SHOULD work fine with & without it.
      'A5 OK Completed (0.000 sec)\n',
    body: 'Lorum ipsum dolor sit amet.'
  }
]
```