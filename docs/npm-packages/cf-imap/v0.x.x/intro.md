---
sidebar_position: 1
---

# Intro

:::warning
This version is pre-release (v0.x.x), so breaking changes may happen. If such changes happen, existing docs will be rewritten with no traces of the old version. Release version will be v1.x.x.
:::

`cf-imap` is an IMAPv4 library for use **within the Cloudflare Workers platform**.

This package was made because all of the other IMAP libraries are built for NodeJS, and Cloudflare Workers even with node compatibility turned does not support them.

## Provider support

Most providers stick to the two IMAP specifications (`RFC 3501` and `RFC 9051`), however some (notably Gmail with `gimap`) have their own experimental implementations. This package is tested with a few providers that abide by the spec and, of course, Gmail.

However, if the provider you are using isn't tested, uses their own implementation of IMAP and `cf-imap` is throwing errors on things that *should work* (see: [Errors](./error_handling)), please [raise an issue on GitHub](https://github.com/Exerra/cf-imap/issues) so I can promptly fix it.

## Features

As this version is pre-release it does not have all of the intended features. This section will keep track of the existing and planned features, however [Github Projects](https://github.com/users/Exerra/projects/3) will generally be more accurate (titles are in English, however everything else might be in Latvian).

- [x] [Connect to an IMAP server](./init)
- [x] [Get namespaces](./namespaces)
- [x] [Get folders](./folders/get)
- [x] [Select a folder](./folders/select)
- [x] [Fetch emails](./emails/fetch)
- [x] [Check](./misc/check)
- [x] [Search emails](./emails/search)
- [ ] Expunge email
- [ ] Copy email
- [ ] Close folder
- [ ] Append email
- [ ] Status of folder
- [ ] Rename folder
- [ ] Delete folder
- [ ] Create folder