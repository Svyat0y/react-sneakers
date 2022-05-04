import styles                              from './Orders.module.scss'
import { ICard }                           from '../../interfaces'
import { useContext, useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Spinner }       from '../../components/Spinner'
import { Info }          from '../../components/Info'
import { Card }          from '../../components/Card'

import { AppContext }      from '../../context'
import { fetchOrderItems } from '../../api/api'


const Orders = (): JSX.Element => {

	const [ isLoading, setIsLoading ] = useState(true)
	const { orderItems, setOrderItems } = useContext(AppContext)


	useEffect(() => {
		const getItems = async () => {
			setIsLoading(true)
			const orderItems = await fetchOrderItems()
			setOrderItems(orderItems)
			setIsLoading(false)
		}

		getItems()
	}, [])

	const items = orderItems && orderItems.flat().map((item: ICard, index: number) => {
		return (
			<Card
				key={ index }
				orderedItems={ true }
				{ ...item }
			/>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Мои покупки' }/>
			{
				isLoading
					? <Spinner/>
					: <div className="cardWrapper">
						{ orderItems && orderItems.length > 0
							? items
							: <Info
								title='У вас нет заказов'
								description='Вы нищеброд? Оформите хотя бы один заказ.'
								size={ 70 }
								image='/img/smile_orders.svg'
							/>
						}
					</div>
			}

		</div>
	)
}

export default Orders