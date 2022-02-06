import { ChangeEvent } from 'react'
import { ICard }       from '../../interfaces'


export interface HomeProps {
	searchValue: string
	onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void
	sneakers: Array<ICard>
	onAddToCart: (obj: ICard) => void
	onAddToFavorite: (obj: ICard) => void
}