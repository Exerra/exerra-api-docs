---
sidebar_position: 3
---

# Checking url/domain
Now that you have initialized the package, you can check HTTP(s) URLs and domains.

## API Reference
You can view the API reference [here](/api/check-a-link)

## Usage
This function returns `Promise<Object>`, so you either put `await` before the function, or use `.then()`

```js
// Await
let data = await phish.check("https://scam.link")

// .then
phish.check("https://scam.link")
    .then(data => {
    	// blah blah
    })
```