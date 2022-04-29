import styles                              from './Favorites.module.scss'
import { FavoritesProps }                  from './Favorites.props'
import { ICard }                           from '../../interfaces'
import { useContext, useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Card }          from '../../components/Card'
import { Empty }         from '../../components/Empty'
import { Spinner }       from '../../components/Spinner'
import { AppContext }    from '../../context'


const Favorites = (
	{ searchValue, onHandleChange, onAddToCart, onAddToFavorite }: FavoritesProps): JSX.Element => {

	const [ isLoading, setIsLoading ] = useState(true)
	const { favoriteItems } = useContext(AppContext)

	useEffect(() => {
		setIsLoading(true)
		favoriteItems.length >= 0 && setIsLoading(false)
	}, [ favoriteItems ])

	const items = favoriteItems && favoriteItems.map((item: ICard, index: number) => {
		return (
			<Card
				key={ index }
				title={ item.title }
				price={ item.price }
				img={ item.img }
				onPlus={ () => onAddToCart(item) }
				onFavorite={ () => onAddToFavorite(item) }
				favorited={ true }
			/>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Мои закладки' } searchValue={ searchValue } onHandleChange={ onHandleChange }/>

			{/*			{ isLoading && <Spinner/> }
			{ favoriteItems.length >= 0 && items }
			{ !favoriteItems.length && isLoading ? <Empty size={ 70 } image='/img/smile_favourite.svg'/> : <></> }*/ }

			{
				isLoading
					? <Spinner/>
					: <div className="cardWrapper">
						{ favoriteItems && favoriteItems.length > 0
							? items
							: <Empty size={ 70 } image='/img/smile_favourite.svg'/>
						}
					</div>
			}
		</div>
	)
}

export default Favorites