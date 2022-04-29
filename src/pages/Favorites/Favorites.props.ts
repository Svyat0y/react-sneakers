import { ICard } from '../../interfaces'


export interface FavoritesProps {
	searchValue?: string
	onHandleChange?: () => void
	onAddToCart: (obj: ICard) => void
	onAddToFavorite: (obj: ICard) => void
}