export interface ICard {
	id: number
	title: string
	price: number
	img: string
	orderedItems?: boolean
}

export interface IOrders {
	[index: number]: number

	items: ICard
}