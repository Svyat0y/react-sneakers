import styles                 from './Favorites.module.scss'
import { FavoritesProps }     from './Favorites.props'
import { ContentHeader }      from '../../components/ContentHeader'
import { ICard }              from '../../interfaces'
import { Card }               from '../../components/Card'
import { useEffect }          from 'react'
import { fetchFavoriteItems } from '../../api/api'


const Favorites = (
	{ searchValue, onHandleChange, favoriteItems, onAddToCart, onAddToFavorite, setFavoriteItems }: FavoritesProps): JSX.Element => {

	useEffect(() => {
		fetchFavoriteItems()
			.then(resp => setFavoriteItems(resp))
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
				isFavourite={ true }/>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader searchValue={ searchValue } onHandleChange={ onHandleChange }/>
			<div className="cardWrapper">
				{ items }
			</div>
		</div>
	)
}

export default Favorites