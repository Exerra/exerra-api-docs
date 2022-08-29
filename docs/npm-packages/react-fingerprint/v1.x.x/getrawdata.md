---
sidebar_position: 3
---

# Get raw data

If you want to grab the raw data that is used to [create a fingerprint](./getfingerprint.md), use this function

:::warning
This function uses browser APIs, so if you are using an SSR framework then find a way to run it only client-side

Guides for select frameworks can be found [here](./frameworks.md)
:::

## Usage
```ts
import { getRawFingerprint } from "react-fingeprint"

(async () => {
	let raw = await getRawFingerprint()
})
```

## Types
To view the TS declaration for the response, [go here](https://github.com/Exerra/react-fingerprint/blob/master/src/index.ts#L17)