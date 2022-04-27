import { ICard } from '../../interfaces'


export interface CardProps extends ICard {
	onPlus: () => void
	onFavorite: () => void
	favorited: boolean
	added?: boolean
}