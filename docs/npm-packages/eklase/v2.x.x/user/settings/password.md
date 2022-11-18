---
sidebar_position: 1
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Change password

This function lets you change your password with a simple function.

:::caution 
`eklase` will keep track of your new password, but when you restart your code it no longer has the ability to do so. Make sure to update the password in the `eklase` initialisation to reflect the password change.
:::

## Usage

The argument `newPassword` will be the password you will replace the existing one with. Be careful with changing your password, as it can lock you out of your own account.

```js
let data = wrapper.user.settings.update.password(newPassword)
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