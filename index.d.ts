// FOR SVG
declare module '*.svg' {
	const content: string
	export default content
}

// FOR JPG
declare module '*.jpg' {
	const content: string
	export default content
}

// FOR PNG 
declare module '*.png' {
	const content: string
	export default content
}

// FOR JSON
declare module '*.json' {
	const content: string
	export default content
}

// For CSS
declare module '*.module.css' {
	const classes: { [key: string]: string }
	export default classes
}

// For LESS
declare module '*.module.less' {
	const classes: { [key: string]: string }
	export default classes
}

// For SCSS
declare module '*.module.scss' {
	const classes: { [key: string]: string }
	export default classes
}