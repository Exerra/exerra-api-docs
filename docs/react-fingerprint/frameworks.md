---
sidebar_position: 4
---

# Usage with frameworks

Some frameworks (notably SSR ones) execute code **not only client-side but also server-side**. Due to the fact that this package uses **exclusively** browser APIs, you must find a way to run the functions **only client-side**.

This page is dedicated to guides on how to use **react-fingerprint** in various frameworks

## Remix

To run code client-side in Remix, you use the React `useEffect` function

```ts
import { getFingerprint } from "react-fingerprint"
import React, {useEffect} from "react"

export default function view() {
	useEffect(() => {
		(async () => { // as react-fingerprint returns promises, you will need to either wrap it in an async func or use .then()
			let fingerprint = await getFingerprint()
		})
	})
    
	return (
		<h1>Your fingerprint</h1>
	)
}
```