import { ICard }                            from './interfaces'
import { ChangeEvent, useEffect, useState } from 'react'

import { Header } from './components/Header'
import { Drawer } from './components/Drawer'

import { fetchSneakers, fetchAddToCart, fetchDeleteCart } from './api'
import { fetchAddToFavorites, fetchDeleteFavorites }      from './api/api'
import { Route, Routes }                                  from 'react-router'
import { Home }                                           from './pages/Home'
import { Favorites }                                      from './pages/Favorites'


const App = (): JSX.Element => {
	const [ sneakers, setSneakers ] = useState<Array<ICard>>([])
	const [ cartOpened, setCartOpened ] = useState(false)
	const [ cartItems, setCartItems ] = useState<Array<ICard>>([])
	const [ favoriteItems, setFavoriteItems ] = useState<Array<ICard>>([])
	const [ searchValue, setInputValue ] = useState('')

	useEffect(() => {
		fetchSneakers()
			.then(data => setSneakers(data))
			.catch(e => console.log(e.message))
	}, [])

	const onAddToCart = (obj: ICard) => {
		try {
			if (!cartItems.includes(obj)) {
				setCartItems(prev => [ ...prev, obj ])
				console.log(obj)

				fetchAddToCart(obj)
					.catch(e => console.log(e.message))
			}
		}
		catch (error) {
			alert(error)
		}
	}

	const onAddToFavorite = async (obj: ICard) => {
		try {
			if (favoriteItems.find(favObj => favObj.id === obj.id)) {
				fetchDeleteFavorites(obj.id)
					.catch(e => console.log(e.message))
			}
			else{
				const data: any = await fetchAddToFavorites(obj)
					.catch(e => console.log(e.message))
				setFavoriteItems(prev => [ ...prev, data ])
			}
		}
		catch (error) {
			alert(error)
		}
	}

	const onRemoveCart = (obj: ICard) => {
		try {
			fetchDeleteCart(obj.id)
				.catch(e => console.log(e.message))
			setCartItems(prev => prev.filter(item => item !== obj))
		}
		catch (error) {
			alert(error)
		}
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
				setCartItems={ setCartItems }
			/> }
			<Header onClickCart={ () => setCartOpened(true) }/>
			<Routes>
				<Route path={ '*' } element={
					<Home
						sneakers={ sneakers }
						onHandleChange={ onHandleChange }
						searchValue={ searchValue }
						onAddToFavorite={ onAddToFavorite }
						onAddToCart={ onAddToCart }/>
				}/>
				<Route path={ 'favorites/*' } element={
					<Favorites
						favoriteItems={ favoriteItems }
						onAddToCart={ onAddToCart }
						setFavoriteItems={ setFavoriteItems }
						onAddToFavorite={ onAddToFavorite }
					/>
				}/>
			</Routes>

		</div>
	)
}

export default App
