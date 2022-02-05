import { ChangeEvent, useEffect, useState } from 'react'

import { Header }      from './components/Header'
import { Drawer }      from './components/Drawer'
import { SearchPanel } from './components/SearchPanel'
import { Card }        from './components/Card'

import { ICard }         from './interfaces'
import { fetchSneakers } from './api/api'


const App = (): JSX.Element => {
	const [ sneakers, setSneakers ] = useState<Array<ICard>>([])
	const [ cartOpened, setCartOpened ] = useState(false)
	const [ cartItems, setCartItems ] = useState<Array<ICard>>([])
	const [ searchValue, setInputValue ] = useState('')

	const filteredSneakers = sneakers.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))

	const visibleItems = sneakers && filteredSneakers.map((item: ICard) => {
		return (
			<Card
				key={ item.id }
				title={ item.title }
				price={ item.price }
				img={ item.img }
				onPlus={ () => onAddedToCart(item) }
				onFavorite={ () => console.log('добавлено в избранные') }/>
		)
	})

	useEffect(() => {
		fetchSneakers()
			.then((data) => setSneakers(data))
	}, [])

	const onAddedToCart = (obj: ICard) => {
		if (!cartItems.includes(obj)) {
			setCartItems(prev => [ ...prev, obj ])
		}
	}

	const onRemoveCart = (obj: ICard) => {
		const removeItem = cartItems.filter(item => item !== obj)
		setCartItems(removeItem)
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
