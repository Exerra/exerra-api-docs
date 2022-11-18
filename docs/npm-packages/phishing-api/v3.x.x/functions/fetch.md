---
sidebar_position: 1
---

# Checking url/domain
Now that you have initialized the package, you can check HTTP(s) URLs and domains.

## Type reference
```typescript
interface CheckResponse {
	status: number,
	isScam: boolean,
	domain: string
}
```

## Usage
This function returns `Promise<CheckResponse>`, so you either put `await` before the function, or use `.then()`

```js
// Await
let data = await phish.check("https://exerra.xyz")

// .then
phish.check("https://exerra.xyz")
    .then(data => {
    	// blah blah
    })
```