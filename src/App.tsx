import { ICard }                            from './interfaces'
import { ChangeEvent, useEffect, useState } from 'react'

import { Header }      from './components/Header'
import { Drawer }      from './components/Drawer'
import { SearchPanel } from './components/SearchPanel'
import { Card }        from './components/Card'

import { fetchSneakers, fetchCartItems, fetchAddToCart, fetchDeleteCart } from './api'
import { fetchAddToFavorites }                                            from './api/api'


const App = (): JSX.Element => {
	const [ sneakers, setSneakers ] = useState<Array<ICard>>([])
	const [ cartOpened, setCartOpened ] = useState(false)
	const [ cartItems, setCartItems ] = useState<Array<ICard>>([])
	const [ favoriteItems, setFavoriteItems ] = useState<Array<ICard>>([])
	const [ searchValue, setInputValue ] = useState('')

	const filteredSneakers = sneakers.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

	const visibleItems = sneakers && filteredSneakers.map((item: ICard, index: number) => {
		return (
			<Card
				key={ index }
				title={ item.title }
				price={ item.price }
				img={ item.img }
				onPlus={ () => onAddToCart(item) }
				onFavorite={ () => onAddToFavorite(item) }/>
		)
	})

	useEffect(() => {
		fetchSneakers()
			.then(data => setSneakers(data))
			.catch(e => console.log(e.message))

		fetchCartItems()
			.then(data => setCartItems(data))
			.catch(e => console.log(e.message))
	}, [])

	const onAddToCart = (obj: ICard) => {
		if (!cartItems.includes(obj)) {
			setCartItems(prev => [ ...prev, obj ])

			fetchAddToCart(obj)
				.catch(e => console.log(e.message))
		}
	}

	const onAddToFavorite = (obj: ICard) => {
		if (!favoriteItems.includes(obj)) {
			setFavoriteItems(prev => [ ...prev, obj ])
			
			fetchAddToFavorites(obj)
				.catch(e => console.log(e.message))
		}
	}

	const onRemoveCart = (obj: ICard) => {
		setCartItems(prev => prev.filter(item => item !== obj))

		fetchDeleteCart(obj.id)
			.catch(e => console.log(e.message))
	}

	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInputValue(value)
	}

	return (
		<div className="wrapper clear">
			{ cartOpened && <Drawer
				cartItems={ cartItems }
				onRemove={ onRemoveCart }
				onClose={ () => setCartOpened(false) }
			/> }
			<Header onClickCart={ () => setCartOpened(true) }/>
			<div className="content p-40">
				<SearchPanel searchValue={ searchValue } onHandleChange={ onHandleChange }/>
				<div className="cardWrapper">
					{ visibleItems }
				</div>
			</div>

		</div>
	)
}

export default App
