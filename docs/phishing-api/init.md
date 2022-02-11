---
sidebar_position: 2
---

# Initialization
To initialize phishing-api you need to use a constructor. Learn more about them [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

## Why a constructor?
The constructor checks if the API is online to avoid any future headaches.

## Actual steps
1. Import the package
```js
const PhishingAPI = require("phishing-api")
```
2. Create a variable (or constant) with the imported PhishingAPI class
```js
const PhishingAPI = require("phishing-api")

let phish = new PhishingAPI()
```
Now you're done, hooray!