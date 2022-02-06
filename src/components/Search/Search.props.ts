import { ChangeEvent } from 'react'


export interface SearchProps {
	onHandleChange?: (e: ChangeEvent<HTMLInputElement>) => void
	searchValue?: string
}