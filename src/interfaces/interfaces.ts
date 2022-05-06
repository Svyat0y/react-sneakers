export interface ICard {
	id: number
	title: string
	price: number
	img: string
	orderedItems?: boolean
}

export interface IOrderItems {
	id: string
	items: ICard[]
}