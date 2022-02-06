import { ICard } from '../../interfaces'


export interface FavoritesProps {
	searchValue?: string
	onHandleChange?: () => void
	favoriteItems: Array<ICard>
	onAddToCart: (obj: ICard) => void
	onAddToFavorite: (obj: ICard) => void
	setFavoriteItems: (data: Array<ICard>) => void
}