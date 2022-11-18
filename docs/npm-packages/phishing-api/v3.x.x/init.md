---
sidebar_position: 2
---

# Initialization
To initialize phishing-api you need to use a constructor. Learn more about them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

:::caution
The Exerra phishing API operates on a freemium basis. If you wish to use the API, you must subscribe to it in [RapidAPI](https://rapidapi.com/Exerra/api/exerra-phishing-check/) and acquire your RapidAPI key.
:::

## Steps
1. Import the package
```js
const PhishingAPI = require("phishing-api")
```
2. Create a variable (or constant) with the imported PhishingAPI class and pass your RapidAPI key.
```js
const PhishingAPI = require("phishing-api")

let phish = new PhishingAPI("key")
```
Now you're done, hooray!