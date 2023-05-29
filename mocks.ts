import type { Directory, File } from "./lib/interfaces"

export const directories: Directory[] = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Log",
		href: "/log",
	},
]

export const files: File[] = [
	{
		name: "README",
		href: "/README",
	},
	{
		name: "LICENSE",
		href: "/LICENSE",
	},
]

export const markdown = `# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

Emphasis:

*Italic*

_Italic_

**Bold**

__Bold__

Combined emphasis:

**_Bold and italic_**

Lists:

1. First item
2. Second item
3. Third item

* First item
* Second item
* Third item

- First item
- Second item
- Third item

Links:

[Link text](https://www.example.com)

[Link text with title](https://www.example.com "Link title")

Images:

![Alt text](https://www.example.com/image.jpg)

![Alt text with title](https://www.example.com/image.jpg "Image title")

Code:



`
