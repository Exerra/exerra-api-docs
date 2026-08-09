---
sidebar_position: 1
---

# Intro

:::note
This version is currently published under the **`next`** dist-tag on npm:

```bash
npm install cf-imap@next
# or with bun
bun add cf-imap@next
```

It will be promoted to `latest` once the stable 1.0.0 release ships.
:::

:::warning
This is a pre-release version. It contains **breaking changes** compared to `v0.x.x` (see [the changelog notes below](#breaking-changes-from-v0xx)), and further breaking changes may still happen before the stable 1.0.0 release.
:::

`cf-imap` is an IMAPv4 library for use **within the Cloudflare Workers platform**.

This package was made because all of the other IMAP libraries are built for NodeJS, and Cloudflare Workers even with node compatibility turned does not support them.

## Provider support

Most providers stick to the two IMAP specifications (`RFC 3501` and `RFC 9051`), however some have their own experimental implementations.

:::note
**Gmail and Outlook are currently not supported.** Both providers now require OAuth2 authentication, while `cf-imap` currently only supports username & password (`LOGIN`) authentication. Because of that they are no longer supported for now — however, there are plans to add OAuth2 (`XOAUTH2`) support in the future.
:::

However, if the provider you are using isn't tested, uses their own implementation of IMAP and `cf-imap` is throwing errors on things that *should work* (see: [Errors](./error_handling)), please [raise an issue on GitHub](https://github.com/Exerra/cf-imap/issues) so I can promptly fix it.

## Features

- [x] [Connect to an IMAP server](./init)
- [x] [Get namespaces](./namespaces)
- [x] [Get folders](./folders/get)
- [x] [Select a folder](./folders/select)
- [x] [Fetch emails (with MIME parsing, attachments & charset decoding)](./emails/fetch)
- [x] [Search emails](./emails/search)
- [x] [Store flags](./misc/store)
- [x] [Expunge emails](./misc/expunge)
- [x] [Copy emails](./misc/copy)
- [x] [Move emails](./misc/move)
- [x] [Status of folder](./misc/status)
- [x] [Append email](./misc/append)
- [x] [Check](./misc/check)
- [x] [Logout](./logout)
- [ ] Rename folder
- [ ] Delete folder
- [ ] Create folder

## Breaking changes from v0.x.x

The `v1.0.0` rewrite focused on protocol correctness: a tagged command pipeline with a literal-aware response reader, robust parsing, proper error handling, and full MIME support. As a result some public APIs changed:

- The `Email` type was reworked — `from`/`to`/`cc` are now `string[]`, `date` was renamed to `internalDate`, and `body` is now an object (`{ text?, html?, raw }`) plus a new `attachments` array.
- `fetchEmails` props changed — `folder` is now optional (falls back to the selected folder), `fetchBody` defaults to `true`, and a new `useUid` option was added.
- `getNamespaces` now returns a typed object (`{ personal, other, shared }`) instead of `string[]`.
- `selectFolder` now returns a fully typed [`MailboxInfo`](./folders/select) instead of a dynamic object.
- `expunge` now takes an options object (`{ range?, useUid? }`), and `UID EXPUNGE` requires a range.
- The raw socket, writer, reader, encoder & decoder are no longer public (see [Extendability](./extendability)).
