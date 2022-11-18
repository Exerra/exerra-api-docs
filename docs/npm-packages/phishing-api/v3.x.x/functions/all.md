---
sidebar_position: 3
---

# Getting all domains
Now that you have initialized the package, you can get all the domains associated with phishing attempts.

:::caution
This function **will not work** if you are on the free plan. [Consider switching to the Pro plan if you wish to use this](https://rapidapi.com/Exerra/api/exerra-phishing-check/pricing).
:::

## Usage
This function returns `Promise<string[]>`, so you either put `await` before the function, or use `.then()`

```js
// await
let domains = await phish.getAll()

// .then
phish.getAll()
    .then(domains => {
		// blah blah
    })
```