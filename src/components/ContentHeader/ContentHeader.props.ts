import { ChangeEvent } from 'react'


export interface ContentHeaderProps {
	onHandleChange?: (e: ChangeEvent<HTMLInputElement>) => void
	searchValue?: string
	title: string
}