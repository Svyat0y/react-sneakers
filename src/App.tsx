import { useEffect, useState } from 'react';

import Header     from './components/Header/Header';
import { Drawer } from './components/Drawer';
import { Card }   from './components/Card';

import { CardProps }     from './interfaces';
import { fetchSneakers } from './api/api';


const App = (): JSX.Element => {
	const [ sneakers, setSneakers ] = useState<CardProps[]>([]);
	const [ cartOpened, setCartOpened ] = useState<boolean>(false);

	console.log(sneakers);

	useEffect(() => {
		fetchSneakers()
			.then(data => setSneakers(data));
	}, []);

	return (
		<div className="wrapper clear">
			{ cartOpened && <Drawer onClose={ () => setCartOpened(false) }/> }
			<Header onClickCart={ () => setCartOpened(true) }/>
			<div className='content p-40'>
				<div className='mb-40 d-flex justify-between align-center'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='search'/>
						<input type='text' placeholder='Поиск..'/>
					</div>
				</div>
				<div className='d-flex flex-wrap align-start'>
					{ sneakers && sneakers.map((item: CardProps) =>
						<Card
							key={ item.id }
							title={ item.title }
							price={ item.price }
							img={ item.img }
							onPlus={ () => console.log('добавлено в корзину') }
							onFavorite={ () => console.log('добавлено в избранные') }
						/>) }
				</div>
			</div>
		</div>
	);
};

export default App;
