import { useEffect, useState } from 'react'

import Header     from './components/Header/Header'
import { Drawer } from './components/Drawer'
import { Card }   from './components/Card'

import { ICard }         from './interfaces'
import { fetchSneakers } from './api/api'


const App = (): JSX.Element => {
	const [ sneakers, setSneakers ] = useState<Array<ICard>>([])
	const [ cartOpened, setCartOpened ] = useState(false)
	const [ cartItems, setCartItems ] = useState<Array<ICard>>([])

	useEffect(() => {
		fetchSneakers()
			.then((data) => setSneakers(data))
	}, [])

	const onAddedToCart = (obj: ICard) => {
		if (!cartItems.includes(obj)) {
			setCartItems(prevState => [ ...prevState, obj ])
		}
	}

	return (
		<div className="wrapper clear">
			{ cartOpened && <Drawer cartItems={ cartItems } onClose={ () => setCartOpened(false) }/> }
			<Header onClickCart={ () => setCartOpened(true) }/>
			<div className="content p-40">
				<div className="mb-40 d-flex justify-between align-center">
					<h1>Все кроссовки</h1>
					<div className="search-block">
						<img src="/img/search.svg" alt="search"/>
						<input type="text" placeholder="Поиск.."/>
					</div>
				</div>
				<div className="cardWrapper">
					{ sneakers && sneakers.map((item: ICard) => (
						<Card
							key={ item.id }
							title={ item.title }
							price={ item.price }
							img={ item.img }
							onPlus={ () => onAddedToCart(item) }
							onFavorite={ () => console.log('добавлено в избранные') }
						/>
					)) }
				</div>
			</div>
		</div>
	)
}

export default App
