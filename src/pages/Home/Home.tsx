import styles                  from './Home.module.scss'
import { ICard }               from '../../interfaces'
import { HomeProps }           from './Home.props'
import { useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Card }          from '../../components/Card'
import { Spinner }       from '../../components/Spinner'


const Home = ({ sneakers, cartItems, favoriteItems, searchValue, onHandleChange, onAddToCart, onAddToFavorite }: HomeProps) => {
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		sneakers.some((item) => item) && setIsLoading(false)
	}, [ sneakers ])

	const filteredSneakers = sneakers.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
	const visibleItems = sneakers && filteredSneakers.map((obj: ICard, index: number) => {
		return (
			<Card
				id={ obj.id }
				key={ index }
				title={ obj.title }
				price={ obj.price }
				img={ obj.img }
				onPlus={ () => onAddToCart(obj) }
				onFavorite={ () => onAddToFavorite(obj) }
				added={ cartItems.some(item => Number(item.id) === Number(obj.id)) }
				favorited={ favoriteItems.some(item => Number(item.id) === Number(obj.id)) }
			/>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Все кроссовки' } searchValue={ searchValue } onHandleChange={ onHandleChange }/>
			<div className="cardWrapper">
				<>
					{ !isLoading
						? visibleItems
						: <Spinner/>
					}
				</>

			</div>
		</div>
	)
}

export default Home