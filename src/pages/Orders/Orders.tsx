import styles                  from './Orders.module.scss'
import { ICard }               from '../../interfaces'
import { IOrderItems }         from '../../interfaces/interfaces'
import { useEffect, useState } from 'react'

import { ContentHeader } from '../../components/ContentHeader'
import { Spinner }       from '../../components/Spinner'
import { Info }          from '../../components/Info'
import { Card }          from '../../components/Card'

import { fetchOrderItems } from '../../api/api'


const Orders = (): JSX.Element => {

	const [ orderItems, setOrderItems ] = useState<IOrderItems[]>([])
	const [ isLoading, setIsLoading ] = useState(true)

	useEffect(() => {
		(async () => {
			setIsLoading(true)
			const orderItems = await fetchOrderItems()
			setOrderItems(orderItems)
			setIsLoading(false)
		})()
	}, [])

	const items = orderItems && orderItems.map((order: IOrderItems, index: number) => {
		return (
			<div
				key={ index }
				className={ styles.itemsWrapper }
			>
				<h2>Заказ #{ order.id }</h2>
				<div className={ styles.orderWrapper }>
					{ order.items.map((i: ICard, index: number) =>
						<Card
							key={ index }
							orderedItems={ true }
							{ ...i }
						/>
					) }
				</div>
			</div>
		)
	})

	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Мои покупки' }/>
			{
				isLoading
					? <Spinner/>
					: <div className="cardWrapper orders">
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