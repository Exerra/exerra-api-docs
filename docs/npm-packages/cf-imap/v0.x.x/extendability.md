# Extendability

Many packages try to abstract as much as they can and lock you in to their way of doing things. You start using a package to make your life easier, however in the end when you have a custom usecase that the package doesn't solve, you are left on your own to basically build it from scratch.

That is why `cf-imap` exposes the [raw socket](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/) which is used by the package to communicate with the IMAP server, [text decoder & encoder](https://developers.cloudflare.com/workers/runtime-apis/encoding/) as well as the [writer](https://developers.cloudflare.com/workers/runtime-apis/streams/writablestreamdefaultwriter/#writablestreamdefaultwriter) & [reader](https://developers.cloudflare.com/workers/runtime-apis/streams/readablestreamdefaultreader).

`cf-imap` connects to the server, provides some functions that you might need, and gives you all of the tools it uses internally so you can build on top of it.

Of course, it isn't much. The real value and content of this package are the pre-defined functions, however if you do have a specific usecase, it's better to use the same socket, as well as the same writer and reader rather than creating new ones :)

## Internal properties

| Property | Description | Docs |
| ---- | ----------- | ---- |
| `imap.socket` | Raw TCP socket used to communicate with the IMAP server. | [Link](https://developers.cloudflare.com/workers/runtime-apis/tcp-sockets/) |
| `imap.writer` | Function that pipes an encoded message to the socket. | [Link](https://developers.cloudflare.com/workers/runtime-apis/streams/writablestreamdefaultwriter) |
| `imap.reader` | Initialised TCP socket reader which contains a function that reads all new messages sent after the last read. | [Link](https://developers.cloudflare.com/workers/runtime-apis/streams/readablestreamdefaultreader) |
| `imap.encoder` | Initialised TextEncoder class. | [Link](https://developers.cloudflare.com/workers/runtime-apis/encoding/#textencoder) |
| `imap.decoder` | Initialised TextDecoder class. | [Link](https://developers.cloudflare.com/workers/runtime-apis/encoding/#textdecoder) |