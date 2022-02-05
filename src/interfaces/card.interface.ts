export interface CardProps {
	id?: number
	title: string
	price: number
	img: string
	onPlus?: () => void
	onFavorite?: () => void
}