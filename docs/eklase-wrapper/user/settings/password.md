---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change password

This function lets you change your password with a simple function.
:::danger More work afterwards
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

<Tabs>
  <TabItem value="success" label="Success" default>
    The response will be an empty array
  </TabItem>
  <TabItem value="failure" label="Failure">
    Response will contain an object detailing the failure
  </TabItem>
</Tabs>