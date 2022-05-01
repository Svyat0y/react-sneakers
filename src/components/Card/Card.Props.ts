import { ICard } from '../../interfaces'


export interface CardProps extends ICard {
	favorited: boolean
	added?: boolean
}