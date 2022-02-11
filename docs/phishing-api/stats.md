---
sidebar_position: 4
---

# Getting stats
Now that you have initialized the package, you can get statistics about the [Exerra phishing API](/api/check-a-link).

## API Reference
You can view the API reference [here](/api/get-stats)

## Usage
This function returns `Promise<Object>`, so you either put `await` before the function, or use `.then()`

```js
// Await
let data = await phish.stats()

// .then
phish.stats()
    .then(data => {
    	// blah blah
    })
```