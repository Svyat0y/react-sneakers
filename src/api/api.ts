import axios         from 'axios'
import { CardProps } from '../interfaces'


export const fetchSneakers = async () => {
	return await axios.get('https://61fab37792093f0017ad99eb.mockapi.io/sneakers')
		.then(({ data }: { data: CardProps[] }) => data)
} 