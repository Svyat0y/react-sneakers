import { ICard } from '../../../interfaces'


export interface ICartItem {
	item: ICard
	onRemoveCart: (item: ICard) => void
}