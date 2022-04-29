import { createContext } from 'react'
import { ICard }         from '../interfaces'


interface AppCtx {
	sneakers: ICard[]
	favoriteItems: ICard[]
	cartItems: ICard[]
}

export const AppContext = createContext<AppCtx>({ cartItems: [], favoriteItems: [], sneakers: [] })