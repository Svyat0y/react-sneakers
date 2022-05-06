import { ICard } from '../../interfaces'


export interface CardProps extends ICard {
	isAdded?: boolean
	isFavorite?: boolean
}