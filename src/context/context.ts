import { ChangeEvent, createContext } from 'react'
import { ICard }                      from '../interfaces'


export interface IAppCtx {
	sneakers: ICard[] | []
	favoriteItems: ICard[] | []
	cartItems: ICard[] | []
	hasCardAdded: (id: number) => boolean
	onAddToCart: (obj: ICard) => void
	onAddToFavorite: (obj: ICard) => void
	closeCart: () => void
	onRemoveCart: (obj: ICard) => void
	onHandleChange: (e: ChangeEvent<HTMLInputElement>) => void
	openCart: () => void
	searchValue: string
}

export const AppContext = createContext<IAppCtx>({
	sneakers: [],
	favoriteItems: [],
	cartItems: [],
	hasCardAdded: () => false,
	onAddToFavorite: () => undefined,
	onAddToCart: () => undefined,
	closeCart: () => undefined,
	onRemoveCart: () => undefined,
	onHandleChange: () => undefined,
	searchValue: '',
	openCart: () => undefined
})