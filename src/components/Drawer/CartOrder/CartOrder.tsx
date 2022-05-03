import styles         from './CardOrder.module.scss'
import { ICartOrder } from './CardOrder.props'


const CartOrder = ({ cartItems, disabledBtn, onOrder }: ICartOrder): JSX.Element => {
	return (
		<>
			{
				cartItems.length > 0 &&
				<div className={ styles.cartTotalBlock }>
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
			}</>
	)
}

export default CartOrder