import styles                   from './Card.module.scss'
import { CardProps }            from './Card.Props'
import { useContext, useState } from 'react'
import { AppContext }           from '../../context'


const Card = ({ id, title, price, img, favorited = false }: CardProps): JSX.Element => {
	const [ isFavorite, setIsFavorite ] = useState(favorited)
	const { hasCardAdded, onAddToCart, onAddToFavorite } = useContext(AppContext)

	const onClickPlus = () => {
		const obj = { id, title, price, img }
		onAddToCart(obj)
	}

	const onClickFavorite = () => {
		const obj = { id, title, price, img }
		onAddToFavorite(obj)
		setIsFavorite(!isFavorite)
	}

	return (
		<div className={ styles.card }>
			<img
				onClick={ onClickFavorite }
				className={ styles.favorite }
				width={ 32 }
				height={ 32 }
				src={ isFavorite ? '/img/heart_liked.svg' : '/img/heart_unliked.svg' }
				alt='Unliked'
			/>
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
				<img
					onClick={ onClickPlus }
					className='cu-p'
					width={ 32 }
					height={ 32 }
					src={ hasCardAdded(id) ? '/img/btn_checked.svg' : '/img/btn_plus.svg' }
					alt='btn_plus'
				/>
			</div>
		</div>
	)
}

export default Card
