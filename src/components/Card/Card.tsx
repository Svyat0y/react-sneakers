import styles         from './Card.module.scss'
import { CardProps }  from './Card.Props'
import { useContext } from 'react'

import { AppContext } from '../../context'


const Card = ({ id, title, price, img, orderedItems }: CardProps): JSX.Element => {
	const { onAddToCart, onAddToFavorite, cartItems, favoriteItems } = useContext(AppContext)

	const isFavorite = favoriteItems.some((item) => Number(item.id) === Number(id))
	const isAdded = cartItems.some((item) => Number(item.id) === Number(id))

	const onClickPlus = () => {
		const obj = { id, title, price, img }
		onAddToCart(obj)
	}

	const onClickFavorite = () => {
		const obj = { id, title, price, img }
		onAddToFavorite(obj)
	}

	return (
		<div className={ styles.card }>
			{ !orderedItems &&
				<img
					onClick={ onClickFavorite }
					className={ styles.favorite }
					width={ 32 }
					height={ 32 }
					src={ isFavorite ? '/img/heart_liked.svg' : '/img/heart_unliked.svg' }
					alt='Unliked'
				/> }
			<img
				className={ styles.itemImg }
				width={ 133 }
				height={ 112 }
				src={ img }
				alt='sneakers'
			/>
			<p>{ title }</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{ price } руб.</b>
				</div>
				{ !orderedItems &&
					<img
						onClick={ onClickPlus }
						className='cu-p'
						width={ 32 }
						height={ 32 }
						src={ isAdded ? '/img/btn_checked.svg' : '/img/btn_plus.svg' }
						alt='btn_plus'
					/> }
			</div>
		</div>
	)
}

export default Card
