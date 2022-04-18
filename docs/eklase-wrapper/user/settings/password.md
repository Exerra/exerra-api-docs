---
sidebar_position: 1
---

# Change password

This function lets you change your password with a simple function.
:::danger
By changing the password you will have to update your code to reflect the change
:::

## Usage

You will have to pass in 2 arguments
1. **oldPassword**

This is your old password (the one you used to log in)

2. **newPassword**

This is the password you want it to change to. 

```js
let data = wrapper.user.settings.update.password(oldPassword, newPassword)
```

## Response

If the password has been changed correctly, you will receive an empty array as the response (`[]`)

If the password change didn't work, the response will have an object detailing it in the array