---
sidebar_position: 3
---

# Get schedule

Gets a specified weeks (or this weeks if not specified) schedule. Data includes the name, subject, homework (value, dates, attachments) and score.

This is by far the most complex function yet as it scrapes and processes a HTML page.

## Usage

If you want to get this weeks schedule, just call the function and `await` or `.then` it
```js
let schedule = await wrapper.getSchedule()
```

However, if you want to get a specific weeks schedule, you must pass in a string with a day in that week (european date format `DD.MM.YYYY`)
```js
let specificSchedule = await wrapper.getSchedule("22.02.2022")
```

## Result

The result is an array containing multiple arrays (with objects) for each weekday.

Example data
```js
[
    [ // Monday
        { // First lesson of the day
            name: "Programming",
            subject: "Lessons subject",
            homework: {
                value: "Homeworks value",
                teacher: "Teacher who assigned the homework",
                dates: {
                    assigned: "2022-04-12T12:06:00.000Z",
                    edited: '2022-04-12T12:17:00.000Z"
                },
                attachments: [
                    {
                        name: "Attachment.pdf",
                        url: "https://my.e-klase.lv/Attachment/Get/2348dshj3v2f3"
                    }
                ]
            }
        }
    ],
    [ // Tuesday
        {
            name: "Math",
            subject: "Lessons subject",
            homework: {
                value: "Homeworks value",
                teacher: "Teacher who assigned the homework",
                dates: {
                    assigned: "2022-02-12T12:06:00.000Z",
                    edited: '2022-03-12T12:17:00.000Z"
                },
                attachments: []
            }
        }
    ]
]
```