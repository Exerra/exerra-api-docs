---
sidebar_position: 2
---

# Initialisation

To initialise you will use a constructor to feed your username and password, then use a function created by the constructor

## Steps

1. Import the package
```js
const EKlaseWrapper = require("eklase-wrapper")
```
2. Create a const with the constructor and pass in a username & password
```js
const EKlaseWrapper = require("eklase-wrapper")

const wrapper = new EKlaseWrapper("USERNAME", "PASSWORD")
```
3. Authenticate
```js
const EKlaseWrapper = require("eklase-wrapper")

const wrapper = new EKlaseWrapper("USERNAME", "PASSWORD")

await wrapper.initialize() // Use in an async function, or top level if you have type: module
```

Now you're done, hooray!

## Authorisation flow

The way E-Klase handles auth is by sending a POST request to login, then storing the cookie in the responses `Set-Cookie` header and using it for any future requests.

An example of the POST request is:
```http request
POST /?v=15 HTTP/1.1
Content-Type: application/x-www-form-urlencoded
Host: my.e-klase.lv
Connection: close
Content-Length: 46

fake_pass=&UserName=USERNAME&Password=PASSWORD
```

This package does exactly that for auth, but server-side :)