# Why can't we use existing packages?

## Short answer

The NodeJS library `net` doesn't work on Cloudflare Workers.

## Long answer

Cloudflare Workers use a seperate runtime developed by Cloudflare. It is a flavour of browser JS along with some Cloudflare-only functions (and lately optional node compatibility with polyfills, although the compatibility is shoddy at best).

IMAP connections are established on the TCP protocol. Unfortunately, currently there isn't a "one-size-fits-all" solution for this that works across all runtimes. NodeJS has the `net` library that only works on NodeJS. Other serverless platforms more than likely have their own proprietary libraries and Cloudflare is no exception.

This package is built specifically for the Cloudflare Workers platform using their [TCP sockets](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/) runtime API.