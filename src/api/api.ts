import axios     from 'axios'
import { ICard } from '../interfaces'


const instance = axios.create({
	baseURL: 'https://61fab37792093f0017ad99eb.mockapi.io/'
})

export const fetchSneakers = async (): Promise<Array<ICard>> => {
	const { data }: { data: Array<ICard> } = await instance.get<Array<ICard>>('sneakers')
	return data
}

export const fetchCartItems = async () => {
	const { data }: { data: Array<ICard> } = await instance.get<Array<ICard>>('cart')
	return data
}

export const fetchFavoriteItems = async () => {
	const { data }: { data: Array<ICard> } = await instance.get<Array<ICard>>('favorites')
	return data
}

export const fetchAddToCart = async (obj: ICard) => {
	await instance.post<ICard>('cart', obj)
}

export const fetchAddToFavorites = async (obj: ICard) => {
	const { data }: { data: ICard } = await instance.post<ICard>('favorites', obj)
	return data
}

export const fetchDeleteCart = async (id?: number) => {
	await instance.delete<ICard>(`cart/${ id }`)
}

export const fetchDeleteFavorites = async (id?: number) => {
	await instance.delete<ICard>(`favorites/${ id }`)
}