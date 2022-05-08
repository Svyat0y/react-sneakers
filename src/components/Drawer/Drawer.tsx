import styles                              from './Drawer.module.scss'
import { useContext, useEffect, useState } from 'react'

import { Info }      from '../Info'
import { Spinner }   from '../Spinner'
import { CartItem }  from './CartItem'
import { CartOrder } from './CartOrder'

import { AppContext }     from '../../context'
import { fetchSendOrder } from '../../api/api'


const Drawer = ({ opened }: { opened: boolean }): JSX.Element => {
	const [ isLoading, setIsLoading ] = useState<boolean>(true)
	const [ isOrderComplete, setIsOrderComplete ] = useState<boolean>(false)
	const [ orderId, setOrderId ] = useState<null | number | undefined>(null)
	const [ disabledBtn, setDisabledBtn ] = useState(false)
	const { cartItems, closeCart, onRemoveCart, setCartItems } = useContext(AppContext)

	useEffect(() => {
		const timeOut = setTimeout(() => {
			setIsLoading(false)
		}, 1000)

		return () => {
			clearTimeout(timeOut)
		}
	}, [])

	const onOrder = async () => {
		setDisabledBtn(true)
		const data = await fetchSendOrder({ items: cartItems })
		if (data) {
			setOrderId(data)
			setIsOrderComplete(true)
			setCartItems([])
		}
		setDisabledBtn(false)
	}
	return (
		<div className={ `${ styles.overlay } ${ opened ? styles.overlayVisible : '' }` }>
			<div className={ `${ styles.drawer } ${ opened ? styles.drawerVisible : '' }` }>
				<h2>
					Корзина
					<img
						onClick={ closeCart }
						width={ 32 }
						height={ 32 }
						className={ styles.removeBtn }
						src={ 'img/remove_btn.svg' }
						alt='close'
					/>
				</h2>
				<div className={ styles.items }>

					{
						isLoading
							? <Spinner/>
							: <>
								<div style={ { flex: '1 0 auto' } }>
									{
										cartItems.length > 0
											? cartItems && cartItems.map(item =>
											<CartItem key={ item.id } item={ item } onRemoveCart={ onRemoveCart }/>)
											: <Info
												title={
													!isOrderComplete
														? 'Корзина пустая'
														: 'Заказ оформлен!'
												}
												description={
													!isOrderComplete
														? 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
														: `Ваш заказ #${ orderId } скоро будет передан курьерской доставке.`
												}
												onClose={ closeCart }
												size={ 120 }
												image={
													!isOrderComplete
														? 'img/empty_cart.svg'
														: 'img/order_complete.svg'
												}
											/>
									}
								</div>
							</>
					}
				</div>
				<CartOrder cartItems={ cartItems } disabledBtn={ disabledBtn } onOrder={ onOrder }/>
			</div>
		</div>
	)
}

export default Drawer