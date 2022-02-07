import styles                  from './Favorites.module.scss'
import { FavoritesProps }      from './Favorites.props'
import { ICard }               from '../../interfaces'
import { useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Card }          from '../../components/Card'
import { Empty }         from '../../components/Empty'
import { Spinner }       from '../../components/Spinner'


const Favorites = (
	{ searchValue, onHandleChange, favoriteItems, onAddToCart, onAddToFavorite }: FavoritesProps): JSX.Element => {

	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	const items = favoriteItems && favoriteItems.map((item: ICard, index: number) => {
		return (
			<Card
				key={ index }
				title={ item.title }
				price={ item.price }
				img={ item.img }
				onPlus={ () => onAddToCart(item) }
				onFavorite={ () => onAddToFavorite(item) }
				isFavourite={ true }
			/>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Мои закладки' } searchValue={ searchValue } onHandleChange={ onHandleChange }/>
			{
				!isLoading
					? <div className="cardWrapper">
						{ favoriteItems && favoriteItems.length > 0
							? items
							: <Empty size={ 70 } image='/img/smile_favourite.svg'/>
						}
					</div>
					: <Spinner/>
			}
		</div>
	)
}

export default Favorites