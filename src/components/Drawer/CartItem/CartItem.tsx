import styles        from './CartItem.module.scss'
import { ICartItem } from './CartItem.props'


const CartItem = ({ item, onRemoveCart }: ICartItem): JSX.Element => {
	return (
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
				src={ 'img/remove_btn.svg' }
				alt='close'/>
		</div>
	)
}

export default CartItem