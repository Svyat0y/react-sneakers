import { ChangeEvent, createContext } from 'react'
import { ICard }                      from '../interfaces'


export interface IAppCtx {
	sneakers: ICard[] | []
	favoriteItems: ICard[] | []
	cartItems: ICard[] | []
	setCartItems: (obj: Array<ICard>) => void
	setFavoriteItems: (obj: Array<ICard>) => void
	onAddToCart: (obj: ICard) => void
	onAddToFavorite: (obj: ICard) => void
	closeCart: () => void
	onRemoveCart: (obj: ICard) => void
	onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void
	openCart: () => void
	searchValue: string
	totalPrice: number
}

export const AppContext = createContext<IAppCtx>({
	sneakers: [],
	favoriteItems: [],
	cartItems: [],
	setCartItems: () => undefined,
	setFavoriteItems: () => undefined,
	onAddToFavorite: () => undefined,
	onAddToCart: () => undefined,
	closeCart: () => undefined,
	onRemoveCart: () => undefined,
	onHandleChange: () => undefined,
	searchValue: '',
	openCart: () => undefined,
	totalPrice: 0
})