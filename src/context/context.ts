import { createContext } from 'react'
import { ICard }         from '../interfaces'


export interface AppCtx {
	sneakers: ICard[]
	favoriteItems: ICard[]
	cartItems: ICard[]
	hasCardAdded: (id: number) => boolean
	onAddToCart: (obj: ICard) => void
	onAddToFavorite: (obj: ICard) => void

}

export const AppContext = createContext<AppCtx>({
	sneakers: [],
	favoriteItems: [],
	cartItems: [],
	hasCardAdded: () => false,
	onAddToFavorite: () => undefined,
	onAddToCart: () => undefined
})