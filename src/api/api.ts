import axios     from 'axios'
import { ICard } from '../interfaces'


export const fetchSneakers = async (): Promise<Array<ICard>> => {
	const { data }: { data: Array<ICard> } = await axios.get<Array<ICard>>('https://61fab37792093f0017ad99eb.mockapi.io/sneakers')
	return data
} 