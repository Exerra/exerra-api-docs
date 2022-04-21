---
sidebar_position: 1
---

# Get user info

This function gets info about the current logged in user

## Usage

Just call the function and `await` or `.then` it

```js
let userInfo = await wrapper.user.getInfo()
```

## Result

```js
[
	{
		identity: {name: 'Amelia', surname: 'Exerra'},
		class: '69.b',
		school: 'Your Mom University',
		id: '123456',
		subscription: true,
		classID: '0',
		redirectURL: '/Family/Home',
		renderNotifications: false
	}
]
```