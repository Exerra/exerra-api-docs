---
sidebar_position: 1
---

# Get IDs

This function gets all IDs of your inbox. Useful for the [get mail](/docs/eklase-wrapper/mail/get) function.

## Usage

Fetching IDs has never been simpler. Just run the function and `await` or `.then` it :)

```js
// ...
let ids = await wrapper.mail.getIDs()
```

## Result

```js
[
	123456,
    654321
]
```