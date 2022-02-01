import Header     from './components/Header/Header';
import { Drawer } from './components/Drawer';
import { Card }   from './components/Card';

import { CardProps } from './components/interfaces';


const cardArray: CardProps[] = [
	{ id: 0, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/sneakers/sneakers1.jpg' },
	{ id: 1, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, img: '/img/sneakers/sneakers2.jpg' },
	{ id: 2, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 15999, img: '/img/sneakers/sneakers3.jpg' },
	{ id: 3, name: 'Мужские Кроссовки Nike Blazer Mid Suede', price: '15999', img: '/img/sneakers/sneakers4.jpg' },
];

const App = (): JSX.Element => {
	return (
		<div className="wrapper clear">
			<Drawer/>
			<Header/>
			<div className='content p-40'>
				<div className='mb-40 d-flex justify-between align-center'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='search'/>
						<input type='text' placeholder='Поиск..'/>
					</div>
				</div>
				<div className='d-flex flex-wrap align-start'>
					{ cardArray.map((item: CardProps) =>
						<Card
							key={ item.id }
							name={ item.name }
							price={ item.price }
							img={ item.img }
						/>) }
				</div>
			</div>
		</div>
	);
};

export default App;
