import styles                              from './Favorites.module.scss'
import { ICard }                           from '../../interfaces'
import { useContext, useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Card }          from '../../components/Card'
import { Empty }         from '../../components/Empty'
import { Spinner }       from '../../components/Spinner'

import { AppContext } from '../../context'


const Favorites = (): JSX.Element => {

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
				favorited={ true }
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
							: <Empty size={ 70 } image='/img/smile_favourite.svg'/>
						}
					</div>
			}
		</div>
	)
}

export default Favorites