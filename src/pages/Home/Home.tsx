import styles                              from './Home.module.scss'
import { ICard }                           from '../../interfaces'
import { useContext, useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Card }          from '../../components/Card'
import { Spinner }       from '../../components/Spinner'

import { AppContext } from '../../context'


const Home = (): JSX.Element => {
	const [ isLoading, setIsLoading ] = useState(true)
	const { sneakers, searchValue, cartItems, favoriteItems } = useContext(AppContext)

	useEffect(() => {
		sneakers.some((item) => item) && setIsLoading(false)
	}, [ sneakers ])

	const filteredSneakers = sneakers.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
	const visibleItems = sneakers && filteredSneakers.map((obj: ICard, index: number) => {
		return (
			<Card
				key={ index }
				added={ cartItems.some(item => Number(item.id) === Number(obj.id)) }
				favorited={ favoriteItems.some(item => Number(item.id) === Number(obj.id)) }
				{ ...obj }
			/>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Все кроссовки' }/>
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