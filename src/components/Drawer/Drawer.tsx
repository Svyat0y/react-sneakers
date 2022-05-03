import styles                              from './Drawer.module.scss'
import { useContext, useEffect, useState } from 'react'

import { Info }    from '../Info'
import { Spinner } from '../Spinner'

import { AppContext }     from '../../context'
import { fetchSendOrder } from '../../api/api'


const Drawer = (): JSX.Element => {
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
		<div className={ styles.overlay }>
			<div className={ styles.drawer }>
				<h2>
					Корзина
					<img
						onClick={ closeCart }
						width={ 32 }
						height={ 32 }
						className={ styles.removeBtn }
						src='/img/remove_btn.svg'
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
											<div key={ item.id } className={ styles.cartItem }>
												<img width={ 70 } height={ 70 } src={ item.img } alt='sneakers'/>
												<div>
													<p>{ item.title }</p>
													<b>{ item.price } руб.</b>
												</div>
												<img
													onClick={ () => onRemoveCart(item) }
													width={ 32 } height={ 32 }
													className={ styles.removeBtn }
													src='/img/remove_btn.svg'
													alt='close'/>
											</div>)
											: <Info
												title={
													isOrderComplete
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
														? '/img/empty_cart.svg'
														: '/img/order_complete.svg'
												}
											/>
									}
								</div>
								{
									cartItems.length > 0 && <div className={ styles.cartTotalBlock }>
										<ul>
											<li className='d-flex'>
												<span>Итого:</span>
												<div></div>
												<b>21 498 руб.</b>
											</li>
											<li className='d-flex'>
												<span>Налог 5%</span>
												<div></div>
												<b>1074 руб.</b>
											</li>
										</ul>
										<button disabled={ disabledBtn } onClick={ onOrder } className={ `${ styles.greenButton } greenButton` }>
											Оформить заказ
											<img src='/img/arrow.svg' alt='orderArrow'/>
										</button>
									</div>
								}
							</>
					}
				</div>
			</div>
		</div>
	)
}

export default Drawer