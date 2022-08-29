---
sidebar_position: 2
---

# Get fingerprint

Getting a fingerprint is as simple as one function call!

:::warning
This function uses browser APIs, so if you are using an SSR framework then find a way to run it only client-side

Guides for select frameworks can be found [here](./frameworks.md)
:::

## Usage
```ts
import { getFingerprint } from "react-fingeprint"

(async () => {
	let fingerprint = await getFingerprint()
})
```