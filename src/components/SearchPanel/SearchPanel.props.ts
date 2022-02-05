import { ChangeEvent } from 'react'


export interface SearchPanelProps {
	onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void
	searchValue: string
}