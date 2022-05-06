import styles                              from './Favorites.module.scss'
import { ICard }                           from '../../interfaces'
import { useContext, useEffect, useState } from 'react'
import { cleanup }                         from '@testing-library/react'

import { ContentHeader } from '../../components/ContentHeader'
import { Card }          from '../../components/Card'
import { Info }          from '../../components/Info'
import { Spinner }       from '../../components/Spinner'

import { AppContext }         from '../../context'
import { fetchFavoriteItems } from '../../api/api'


const Favorites = (): JSX.Element => {

	const [ isLoading, setIsLoading ] = useState(true)
	const { cartItems, favoriteItems, setFavoriteItems } = useContext(AppContext)

	useEffect(() => {
		const getItems = async () => {
			setIsLoading(true)
			const favoriteItems = await fetchFavoriteItems()
			setFavoriteItems(favoriteItems)
			setIsLoading(false)
		}

		getItems()

		return () => cleanup()
	}, [])

	const items = favoriteItems && favoriteItems.map((obj: ICard, index: number) => {
		const isAdded = cartItems.some((item) => Number(item.parentId) === Number(obj.parentId))
		// const isFavorite = favoriteItems.some((item) => Number(item.parentId) === Number(obj.id))
		return (
			<Card
				key={ index }
				isFavorite={ true }
				isAdded={ isAdded }
				{ ...obj }
			/>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Мои закладки' }/>
			{
				isLoading
					? <Spinner/>
					: <div className="cardWrapper">
						{ favoriteItems && favoriteItems.length > 0
							? items
							: <Info
								title='Закладок нет :('
								description='Вы ничего не добавляли в закладки'
								size={ 70 }
								image='/img/smile_favourite.svg'
							/>
						}
					</div>
			}
		</div>
	)
}

export default Favorites