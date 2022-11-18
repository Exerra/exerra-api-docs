---
sidebar_position: 1
---

# Intro

This package is a wrapper for the [Exerra phishing API](https://rapidapi.com/Exerra/api/exerra-phishing-check/).

:::tip
If you don't want to make HTTP requests for each check, consider [fetching the complete list](/api/get-all-phishing-domains) and using the [string-flagger](https://npmjs.com/package/string-flagger) package
:::

## Info about the API

:::caution
The Exerra phishing API operates on a freemium basis. If you wish to use the API, you must subscribe to it in [RapidAPI](https://rapidapi.com/Exerra/api/exerra-phishing-check/) and acquire your RapidAPI key.
:::

The phishing API checks if links or domains are known phishing attempts. As of writing, the database has 379k+ domains and it updates the database every 2 hours.

## Typescript

This package has been built with Typescript and has TS declarations built-in (no need to install additional packages).