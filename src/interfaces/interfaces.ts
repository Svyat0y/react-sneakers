export interface ICard {
	id: number
	parentId: number
	title: string
	price: number
	img: string
	orderedItems?: boolean
}

export interface IOrderItem {
	id: string
	items: ICard[]
}