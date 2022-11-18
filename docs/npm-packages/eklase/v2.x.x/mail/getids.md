---
sidebar_position: 1
---

# Get IDs

This function gets all IDs of the mail in the logged in users inbox. Useful for the ["Get mail(s)"](/docs/npm-packages/eklase/v2.x.x/mail/getall) function.

## Usage

Call the function and resolve the promise with either `await` or `.then()`

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