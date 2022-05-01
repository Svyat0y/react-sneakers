import { ICard }                            from './interfaces'
import { ChangeEvent, useEffect, useState } from 'react'
import { Route, Routes }                    from 'react-router-dom'

import { Header }    from './components/Header'
import { Drawer }    from './components/Drawer'
import { Home }      from './pages/Home'
import { Favorites } from './pages/Favorites'

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

	const hasCardAdded = (id: number) => {
		return cartItems.some(item => Number(item.id) === Number(id))
	}

	const context: IAppCtx = {
		sneakers,
		favoriteItems,
		cartItems,
		hasCardAdded,
		onAddToFavorite,
		onAddToCart,
		closeCart,
		onRemoveCart,
		onHandleChange,
		searchValue,
		openCart
	}

	return (
		<AppContext.Provider value={ context }>
			<div className='wrapper clear'>
				{ cartOpened && <Drawer/> }
				<Header/>
				<Routes>
					<Route path={ '/' } element={
						<Home/>
					}/>
					<Route path={ 'favorites/*' } element={ <Favorites/> }/>
				</Routes>
			</div>
		</AppContext.Provider>
	)
}

export default App