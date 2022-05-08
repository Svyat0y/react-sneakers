import axios          from 'axios'
import { ICard }      from '../interfaces'
import { IOrderItem } from '../interfaces/interfaces'


const instance = axios.create({
	baseURL: 'https://61fab37792093f0017ad99eb.mockapi.io/api/'
})
// delay in clearing the trash array on the server so as not to get banned
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export const fetchSneakers = async (): Promise<Array<ICard>> => {
	try {
		const { data }: { data: Array<ICard> } = await instance.get<Array<ICard>>('sneakers')
		return data
	}
	catch (e: unknown) {
		console.log(e + ', empty array in this endpoint')
		return []
	}
}

export const fetchCartItems = async (): Promise<Array<ICard>> => {
	try {
		const { data }: { data: Array<ICard> } = await instance.get<Array<ICard>>('cart')
		return data
	}
	catch (e: unknown) {
		console.log(e + ', empty array in this endpoint')
		return []
	}
}

export const fetchFavoriteItems = async (): Promise<Array<ICard>> => {
	try {
		const { data }: { data: Array<ICard> } = await instance.get<Array<ICard>>('favorites')
		return data
	}
	catch (e: unknown) {
		console.log(e + ', empty array in this endpoint')
		return []
	}
}

export const fetchOrderItems = async (): Promise<Array<IOrderItem>> => {
	try {
		const { data }: { data: IOrderItem[] } = await instance.get('order')
		return data
	}
	catch (e: unknown) {
		console.log(e + ', empty array in this endpoint')
		return []
	}
}

export const fetchAddToCart = async (obj: ICard) => {
	try {
		const { data }: { data: ICard } = await instance.post<ICard>('cart', obj)
		return data
	}
	catch (e: unknown) {
		console.log(e + ', error adding to cart')
		alert('Ошибка добавления в карзину, попробуйте позже')
	}
}

export const fetchAddToFavorites = async (obj: ICard) => {
	try {
		const { data }: { data: ICard } = await instance.post<ICard>('favorites', obj)
		return data
	}
	catch (e: unknown) {
		console.log(e + ', error adding to favorites')
		alert('Ошибка добавления в избранные, попробуйте позже')
	}
}

export const fetchDeleteCart = async (id?: number) => {
	try {
		await instance.delete<ICard>(`cart/${ id }`)
		return true
	}
	catch (e: unknown) {
		console.log(e + ', error delete from cart')
		alert('Ошбика удаления товара с корзины, попробуте позже')
		return false
	}
}

export const fetchDeleteFavorites = async (id?: number) => {
	try {
		await instance.delete<ICard>(`favorites/${ id }`)
		return true
	}
	catch (e: unknown) {
		console.log(e + ', error delete from favorites')
		alert('Ошибка удаления с избранных')
		return false
	}
}

interface ISendOrder {
	id: string
	items: ICard[]
}

export const fetchSendOrder = async (arr: { items: ICard[] }) => {
	try {
		const { data }: { data: ISendOrder } = await instance.post<ISendOrder>('order', arr)
		for (let i = 0; i < arr.items.length; i++) {
			const item = arr.items[i]
			await instance.delete(`cart/${ item.id }`)
			await delay(500)
		}
		return Number(data.id)
	}
	catch (e: unknown) {
		console.log(e + ', error completing the order')
		alert('Не удалось совершить заказ, попробуйте позже')
	}
}