---
sidebar_position: 2
---

# SEARCH emails

:::tip
A folder must be selected (see ["SELECT folder"](../folders/select)) before running this function.
:::

This function searches the selected folder for emails that match the specified criteria.

## Usage

The function accepts an object with optional searchable fields. At least one needs to be provided for it to not error out. A full list of searchable fields is available [below](#searchable-fields).

```ts
let searchedEmails = await imap.searchEmails({
    new: true,
    deleted: false,
    header: {
        key: "Content-Type",
        value: "text/plain"
    },
    body: "meeting"
})

// Search by UID instead of sequence number
let uids = await imap.searchEmails({ all: true, useUid: true })
```

## Response

The response for this function is an array with number IDs containing each email that matches the search criteria. These are sequence numbers by default, or UIDs with `useUid: true`.

```ts
[ 3, 6, 12, 75 ]
```

The returned IDs can be passed straight into [`fetchEmails()`](./fetch) (with `useUid: true` when searching by UID).

## Searchable fields

All fields are optional, however **at least one** needs to be provided.

| Field | Type | Description |
| ---- | ---- | ---- |
| useUid | `boolean` | Runs `UID SEARCH` and returns UIDs instead of sequence numbers. |
| all | `boolean` | Returns all the emails in a folder. When true, ignores all of the other filters. |
| bcc | `string` | Returns emails that have the specified string in the BCC header. |
| cc | `string` | Returns emails that have the specified string in the CC header. |
| answered | `boolean` | Returns emails that have the \Answered flag if true and if false then those which don't. |
| deleted | `boolean` | Returns emails that have the \Deleted flag if true, and if false then those which don't. |
| draft | `boolean` | Returns emails that have the \Draft flag if true, and if false then those which don't. |
| flagged | `boolean` | Returns emails that have the \Flagged flag if true, and if false then those which don't. |
| seen | `boolean` | Returns emails that have the \Seen flag if true, and if false then those which don't. |
| from | `string` | Returns emails that have the specified string in the FROM header. |
| to | `string` | Returns emails that have the specified string in the TO header. |
| subject | `string` | Returns emails whose subject contains the specified string. |
| body | `string` | Returns emails whose body contains the specified string. |
| text | `string` | Returns emails whose headers and body contains the specified string. |
| keyword | `string` | Returns emails that have the specified flag set. |
| unkeyword | `string` | Returns emails that don't have the specified flag set. |
| new | `boolean` | Returns emails that have the \Recent flag set, but not the \Seen flag. |
| recent | `boolean` | Returns emails that have the \Recent flag set. |
| old | `boolean` | Returns emails that do not have the \Recent flag set. |
| header | `{ key: string, value: string }` | Returns emails where the specified header exists and has the specified value. |
| largerThan | `number` | Returns emails whose size is larger than the specified number of octets. |
| smallerThan | `number` | Returns emails whose size is smaller than the specified number of octets. |
| on | `Date` | Returns emails whose internal date (disregarding time and timezone) is within the specified date. |
| sentOn | `Date` | Returns emails whose DATE header (disregarding time and timezone) is within the specified date. |
| since | `Date` | Returns emails whose internal date (disregarding time and timezone) is within or later than the specified date. |
| sentSince | `Date` | Returns emails whose DATE header (disregarding time and timezone) is within or later than the specified date. |
| before | `Date` | Returns emails whose internal date (disregarding time and timezone) is before the specified date. |
| sentBefore | `Date` | Returns emails whose DATE header (disregarding time and timezone) is before the specified date. |
| not | `string` | Returns emails whose text does not contain the specified string (`NOT TEXT ...`). |
| or | `[string, string][]` | Returns emails matching any of the given `[searchKey, value]` pairs (combined with `OR`). |
| uid | `string` | Returns emails whose unique identifier corresponds to the specified UID set, e.g. `"1:10"` or `"42"`. |
