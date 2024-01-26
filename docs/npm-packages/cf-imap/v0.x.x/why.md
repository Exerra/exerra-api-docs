# Why can't we use the existing packages?

## Short answer

The NodeJS library `net` doesn't work on Cloudflare Workers.

## Long answer

Cloudflare Workers use a seperate runtime developed by Cloudflare. It is a flavour of Browser JS along with some Cloudflare-only functions.

IMAP connections are established on the TCP protocol. Unfortunately, currently there isn't a "one-size-fits-all" solution for this that works across all runtimes. NodeJS has the `net` library that only works on NodeJS. Other serverless platforms more than likely have their own proprietary libraries and Cloudflare is no exception.

