import { ICard } from '../../../interfaces'


export interface ICartOrder {
	cartItems: ICard[]
	disabledBtn: boolean
	onOrder: () => void
}