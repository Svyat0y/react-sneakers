export interface ICard {
	id: number
	title: string
	price: number
	img: string
	orderedItems?: boolean
}

export interface IOrderItem {
	id: string
	items: ICard[]
}