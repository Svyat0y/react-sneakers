import styles                  from './Home.module.scss'
import { HomeProps }           from './Home.props'
import { useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { ICard }         from '../../interfaces'
import { Card }          from '../../components/Card'
import { Spinner }       from '../../components/Spinner'


const Home = ({ sneakers, searchValue, onHandleChange, onAddToCart, onAddToFavorite }: HomeProps) => {
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => {
			clearTimeout(timeOut)
		}
	}, [])

	const filteredSneakers = sneakers.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
	const visibleItems = sneakers && filteredSneakers.map((item: ICard, index: number) => {
		return (
			<Card
				key={ index }
				title={ item.title }
				price={ item.price }
				img={ item.img }
				onPlus={ () => onAddToCart(item) }
				onFavorite={ () => onAddToFavorite(item) }/>
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