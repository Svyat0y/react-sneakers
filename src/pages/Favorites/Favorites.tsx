import styles                              from './Favorites.module.scss'
import { ICard }                           from '../../interfaces'
import { useContext, useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Card }          from '../../components/Card'
import { Info }          from '../../components/Info'
import { Spinner }       from '../../components/Spinner'

import { AppContext }         from '../../context'
import { fetchFavoriteItems } from '../../api/api'


const Favorites = (): JSX.Element => {

	const [ isLoading, setIsLoading ] = useState(true)
	const { favoriteItems, setFavoriteItems } = useContext(AppContext)

	useEffect(() => {
		const getItems = async () => {
			setIsLoading(true)
			const favoriteItems = await fetchFavoriteItems()
			setFavoriteItems(favoriteItems)
			setIsLoading(false)
		}

		getItems()
	}, [])

	const items = favoriteItems && favoriteItems.map((item: ICard, index: number) => {
		return (
			<Card
				key={ index }
				{ ...item }
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