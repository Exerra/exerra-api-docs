---
sidebar_position: 2
---

# Getting stats
Now that you have initialized the package, you can get statistics about the [Exerra phishing API](https://rapidapi.com/Exerra/api/exerra-phishing-check/details).

## Type reference
```typescript
interface Stats {
	links: number
}
```

## Usage
This function returns `Promise<Stats>`, so you either put `await` before the function, or use `.then()`

```js
// Await
let data = await phish.stats()

// .then
phish.stats()
    .then(data => {
    	// blah blah
    })
```