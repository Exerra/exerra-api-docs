---
sidebar_position: 1
---

# FETCH email(s)

:::tip
A folder must be selected (see ["SELECT folder"](../folders/select)) before running this function — or pass the `folder` prop to select it automatically.
:::

This function fetches emails from the selected folder, parses the headers and — when `fetchBody` is enabled — the full MIME structure (text/plain, text/html and attachments).

## Usage

```ts
export type FetchEmailsProps = {
    limit: [number, number] | number, // range of sequence numbers (or UIDs with useUid), or a single one
    folder?: string,                  // optional, selects it automatically if different from the selected folder
    fetchBody?: boolean,              // default true. If false, only the header fields are fetched
    byteLimit?: number,               // not recommended, may break MIME parsing
    useUid?: boolean,                 // if true, limit is interpreted as a UID range (UID FETCH)
    peek?: boolean                    // default true. If false, fetching sets the "\Seen" flag
}
```

```ts
// Full messages, MIME-parsed (sequence numbers 1 through 10, doesn't set \Seen)
let emails = await imap.fetchEmails({
    limit: [1, 10],
    fetchBody: true
})

// Headers only
let headers = await imap.fetchEmails({ limit: [1, 10], fetchBody: false })

// By UID (marks the message as \Seen, because peek is false)
let byUid = await imap.fetchEmails({
    limit: [42, 42],
    useUid: true,
    peek: false
})
```

## Response

The type for the response of this function is:

```ts
export type Email = {
    uid: number,
    seq: number,                    // sequence number (same as uid when useUid is true)
    flags: string[],                // e.g. ["Seen", "Flagged"] (no backslash)
    internalDate: Date,             // INTERNALDATE of the message
    size: number,                   // RFC822.SIZE in bytes
    from: string[],                 // decoded addresses, e.g. ['"Jane Doe" <jane@x.c>']
    to: string[],
    cc: string[],
    subject: string,                // MIME-encoded words decoded
    messageID: string,
    contentType: string,
    headers: Record<string, string>,// all parsed headers (lowercased, unfolded, MIME-decoded)
    rawHeaders: string,
    body: {
        text?: string,              // decoded text/plain body, if present
        html?: string,              // decoded text/html body, if present
        raw: string                 // the raw body section (the full raw message when fetchBody is true)
    },
    attachments: Attachment[],      // parsed MIME attachments (empty when fetchBody is false)
    raw: string                     // the full raw message (or the raw header section)
}

export type Attachment = {
    filename: string,
    mimeType: string,               // e.g. "application/pdf"
    size: number,                   // decoded size in bytes
    encoding: string,               // original Content-Transfer-Encoding, e.g. "base64"
    content: string,                // decoded content (charset-decoded for text/*, byte-preserving otherwise)
    contentBase64: string,          // decoded content as base64
    contentId?: string,             // for inline images
    isInline: boolean               // true if marked inline (e.g. embedded images)
}
```

Example response:

```ts
[
  {
    uid: 17,
    seq: 1,
    flags: [ '$NotJunk' ],
    internalDate: 2023-06-24T20:50:50.000Z,
    size: 52224,
    from: [ 'support@inbox.lv' ],
    to: [ 'user@example.com' ],
    cc: [],
    subject: 'Sveicināti inbox.lv!',
    messageID: '<id@mail.example.com>',
    contentType: 'multipart/alternative; boundary=C19HvGcu',
    headers: { subject: 'Sveicināti inbox.lv!', from: 'support@inbox.lv', ... },
    rawHeaders: 'Return-Path: <support@inbox.lv>\r\nReceived: ...',
    body: {
      text: 'Laba izvēle! Laipni lūdzam inbox.lv...',
      html: '<html>...',
      raw: 'Return-Path: <support@inbox.lv>\r\n...'
    },
    attachments: [],
    raw: 'Return-Path: <support@inbox.lv>\r\n...'
  }
]
```

:::info
Bodies are charset-decoded (UTF-8, latin-1, windows-1252, ...) and transfer-encoding-decoded (base64, quoted-printable). Multipart messages (mixed/alternative/related) are parsed recursively, so nested text parts and inline images are handled correctly.
:::
