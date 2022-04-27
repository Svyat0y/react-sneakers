import { ICard }                            from './interfaces'
import { ChangeEvent, useEffect, useState } from 'react'
import { Route, Routes }                    from 'react-router-dom'

import { Header }    from './components/Header'
import { Drawer }    from './components/Drawer'
import { Home }      from './pages/Home'
import { Favorites } from './pages/Favorites'

import { fetchSneakers, fetchAddToCart, fetchDeleteCart, fetchCartItems } from './api'
import { fetchAddToFavorites, fetchDeleteFavorites, fetchFavoriteItems }  from './api/api'


const App = (): JSX.Element => {
	const [ sneakers, setSneakers ] = useState<Array<ICard>>([])
	const [ cartOpened, setCartOpened ] = useState(false)
	const [ cartItems, setCartItems ] = useState<Array<ICard>>([])
	const [ favoriteItems, setFavoriteItems ] = useState<Array<ICard>>([])
	const [ searchValue, setInputValue ] = useState('')

	useEffect(() => {
		async function fetchAllData() {
			const cartItems = await fetchCartItems()
			const favoriteItems = await fetchFavoriteItems()
			const sneakers = await fetchSneakers()

			setCartItems(cartItems)
			setFavoriteItems(favoriteItems)
			setSneakers(sneakers)
		}

		fetchAllData()
	}, [])

	const onAddToCart = async (obj: ICard) => {
		try {
			if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
				await fetchDeleteCart(obj.id)
				setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
			}
			else{
				await fetchAddToCart(obj)
				setCartItems(prev => [ ...prev, obj ])
			}
		}
		catch (error) {
			alert(error)
		}
	}

	const onAddToFavorite = async (obj: ICard) => {
		try {
			if (favoriteItems.find(item => Number(item.id) === Number(obj.id))) {
				await fetchDeleteFavorites(obj.id)
				setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
			}
			else{
				const data: any = await fetchAddToFavorites(obj)
				setFavoriteItems(prev => [ ...prev, data ])
			}
		}
		catch (error) {
			alert(error)
		}
	}

	const onRemoveCart = async (obj: ICard) => {
		try {
			await fetchDeleteCart(obj.id)
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

	const openCart = () => {
		setCartOpened(true)
		document.body.style.overflow = 'hidden'
	}

	const closeCart = () => {
		setCartOpened(false)
		document.body.style.overflow = 'unset'
	}

	return (
		<div className='wrapper clear'>
			{ cartOpened && <Drawer
				cartItems={ cartItems }
				onRemove={ onRemoveCart }
				onClose={ closeCart }
			/> }
			<Header onClickCart={ openCart }/>
			<Routes>
				<Route path={ '/' } element={
					<Home
						sneakers={ sneakers }
						onHandleChange={ onHandleChange }
						searchValue={ searchValue }
						onAddToFavorite={ onAddToFavorite }
						onAddToCart={ onAddToCart }
						cartItems={ cartItems }
						favoriteItems={ favoriteItems }
					/>
				}/>
				<Route path={ 'favorites/*' } element={
					<Favorites
						favoriteItems={ favoriteItems }
						onAddToCart={ onAddToCart }
						onAddToFavorite={ onAddToFavorite }
					/>
				}/>
			</Routes>

		</div>
	)
}

export default App
