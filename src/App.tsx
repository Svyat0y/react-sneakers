import { ICard }                            from './interfaces'
import { ChangeEvent, useEffect, useState } from 'react'
import { Route, Routes }                    from 'react-router-dom'

import { Header }    from './components/Header'
import { Drawer }    from './components/Drawer'
import { Home }      from './pages/Home'
import { Favorites } from './pages/Favorites'
import { Orders }    from './pages/Orders'

import { fetchSneakers, fetchAddToCart, fetchDeleteCart, fetchCartItems } from './api'
import { fetchAddToFavorites, fetchDeleteFavorites, fetchFavoriteItems }  from './api/api'

import { AppContext } from './context'
import { IAppCtx }    from './context/context'


const App = (): JSX.Element => {
	const [ sneakers, setSneakers ] = useState<Array<ICard>>([])
	const [ favoriteItems, setFavoriteItems ] = useState<Array<ICard>>([])
	const [ cartItems, setCartItems ] = useState<Array<ICard>>([])
	const [ cartOpened, setCartOpened ] = useState(false)
	const [ searchValue, setInputValue ] = useState('')

	const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

	useEffect(() => {
		const getAllItems = async () => {
			let cartItems
			let favoriteItems
			let sneakers

			Promise.all([
				cartItems = await fetchCartItems(),
				favoriteItems = await fetchFavoriteItems(),
				sneakers = await fetchSneakers()
			])
			setCartItems(cartItems)
			setFavoriteItems(favoriteItems)
			setSneakers(sneakers)
		}

		getAllItems()
	}, [])

	const onAddToCart = async (obj: ICard) => {
		if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
			await fetchDeleteCart(obj.id)
			setCartItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
		}
		else{
			const data = await fetchAddToCart(obj)
			if (data) {
				setCartItems(prev => [ ...prev, data ])
			}
		}
	}

	const onAddToFavorite = async (obj: ICard) => {
		if (favoriteItems.find(item => Number(item.id) === Number(obj.id))) {
			await fetchDeleteFavorites(obj.id)
			setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
			setFavoriteItems(prev => prev.filter(item => Number(item.id) !== Number(obj.id)))
		}
		else{
			const data = await fetchAddToFavorites(obj)
			if (data) {
				setFavoriteItems(prev => [ ...prev, data ])
			}
		}
	}

	const onRemoveCart = async (obj: ICard) => {
		await fetchDeleteCart(obj.id)
		setCartItems(prev => prev.filter(item => item !== obj))
	}

	const closeCart = () => {
		setCartOpened(false)
		document.body.style.overflow = 'unset'
	}

	const openCart = () => {
		setCartOpened(true)
		document.body.style.overflow = 'hidden'
	}

	const onHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setInputValue(value)
	}

	const context: IAppCtx = {
		sneakers,
		favoriteItems,
		cartItems,
		setCartItems,
		setFavoriteItems,
		searchValue,
		onAddToFavorite,
		onAddToCart,
		closeCart,
		onRemoveCart,
		onHandleChange,
		openCart,
		totalPrice
	}

	return (
		<AppContext.Provider value={ context }>
			<div className='wrapper clear'>
				{ cartOpened && <Drawer/> }
				<Header/>
				<Routes>
					<Route path={ '/' } element={ <Home/> }/>
					<Route path={ 'favorites/*' } element={ <Favorites/> }/>
					<Route path={ 'orders/*' } element={ <Orders/> }/>
				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App