import axios     from 'axios'
import { ICard } from '../interfaces/card.interface'


export const fetchSneakers = async () => {
	const { data }: { data: Array<ICard> } = await axios.get<Array<ICard>>('https://61fab37792093f0017ad99eb.mockapi.io/sneakers')
	return data
} 