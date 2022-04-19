---
sidebar_position: 2
---

# Get mail(s)

This function gets mail by id using IDs you can get with the [getIDs](/docs/eklase-wrapper/mail/getids) function.

## Usage

You need to first get an array of IDs to fetch either with the [getIDs](/docs/eklase-wrapper/mail/getids) function or user input.

:::tip
If you want to get all mail, it would be easier to use the [getAll](/docs/eklase-wrapper/mail/getall) function
:::

When you have the array (named arr in the example), just pass it in the function and `await` or `.then` it
```js
let arr = [ 123456, 654321 ]
let mails = await wrapper.mail.get(arr)
```

That will return an object like this
```js
{
    field: addLater
}
```