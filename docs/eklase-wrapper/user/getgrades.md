---
sidebar_position: 2
---

# Get recent grades

> Introduced in v1.1.0

This function gets your recent grades.

:::caution Needs a subscription
This function needs an active family subscription in E-Klase.

Using this function without one will throw an error
:::

## Usage

Just call the function and `await` or `.then` it

```js
let grades = await wrapper.user.getGrades()
```

## Result

```js
[
	{
		lesson: "Programming",
        type: "test", // Pārbaudes darbs
        score: { // 10/10
			value: 10,
            type: "grade"
        }
    },
	{
		lesson: "Math",
		type: "learningLesson", // Mācību stunda
		score: { // 87%
			value: 87,
			type: "percentage"
		}
	}
]
```