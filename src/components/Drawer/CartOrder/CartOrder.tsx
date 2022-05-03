import styles         from './CardOrder.module.scss'
import { ICartOrder } from './CardOrder.props'
import { useContext } from 'react'

import { AppContext } from '../../../context'


const CartOrder = ({ cartItems, disabledBtn, onOrder }: ICartOrder): JSX.Element => {
	const { totalPrice } = useContext(AppContext)
	const tax: number = totalPrice * 0.05

	return (
		<>
			{
				cartItems.length > 0 &&
				<div className={ styles.cartTotalBlock }>
					<ul>
						<li className='d-flex'>
							<span>Итого:</span>
							<div></div>
							<b>{ totalPrice }</b>
						</li>
						<li className='d-flex'>
							<span>Налог 5%</span>
							<div></div>
							<b>{ tax } руб.</b>
						</li>
					</ul>
					<button className={ `${ styles.greenButton } greenButton` } disabled={ disabledBtn } onClick={ onOrder }>
						Оформить заказ
						<img src='/img/arrow.svg' alt='orderArrow'/>
					</button>
				</div>
			}</>
	)
}

export default CartOrder