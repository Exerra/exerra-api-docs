---
sidebar_position: 2
---

# Get mail(s)

This function gets mail by id using IDs you can get with the [getIDs](/docs/eklase-wrapper/mail/getids) function.

## Usage

You need to first get an array of IDs to fetch either with the [getIDs](/docs/eklase-wrapper/mail/getids) function or user input.

:::tip
If you want to get all mail, it would be easier to use the [getAll](/docs/eklase-wrapper/mail/getall) function
:::

When you have the array (named arr in the example), just pass it in the function and `await` or `.then` it
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
					name: 'Exerra Amelia (user  type), 69.b',
					status: { LiteralCode: 'read' }
				}
			]
		},
		attachments: [
			{
				attachmentId: 'asd32tsadas',
				sizeInBytes: 17005,
				name: 'Attachment.docx',
				url: 'https://my.e-klase.lv/Attachment/Get/asd32tsadas'
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