import axios         from 'axios';
import { CardProps } from '../interfaces';


export const fetchSneakers = async () => {
	const data = await axios.get<CardProps[]>('https://61fab37792093f0017ad99eb.mockapi.io/sneakers')
		.then(({ data }) => data);

	return data;
};