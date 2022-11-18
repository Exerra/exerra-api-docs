---
sidebar_position: 2
---

# Get mail(s)

This function uses the ID parameter to fetch mail. You can get IDs with the ["Get IDs"](/docs/npm-packages/eklase/v2.x.x/mail/getids) function.

## Usage

:::tip
If you want to get all mail, it would be easier to use the ["Get all mail"](/docs/npm-packages/eklase/v2.x.x/mail/getall) function
:::

You first need to get an array of IDs for fetching either with the ["Get IDs"](/docs/npm-packages/eklase/v2.x.x/mail/getids) function or user input.

When you have the array (named arr in the example), just pass it in the function and resolve the promise with `await` or `then()`
```js
let arr = [ 123456, 654321 ]
let mails = await wrapper.mail.get(arr)
```

## Result

```js
[
	{
		id: 123456,
		subject: 'Mail subject',
		body: '<b>HTML</b> code',
		timeCreated: '2022-04-18T21:36:17.69',
		authorName: 'Author Name (user type)',
		recipientsData: {
			hideRecipients: true,
			loadRecipientsSeparately: true,
			recipients: [
				{
					id: 123,
					name: 'Exerra (user type), 69.b',
					status: { LiteralCode: 'read' }
				}
			]
		},
		attachments: [
			{
				attachmentId: 'AksxU7skl',
				sizeInBytes: 17005,
				name: 'Attachment.docx',
				url: 'https://my.e-klase.lv/Attachment/Get/AksxU7skl'
			}
		],
		status: 'unread',
		followUpStatus: 'none',
		previousMessageId: null,
		draftType: null,
		authorId: 321,
		draftRecipients: null
	}
]
```