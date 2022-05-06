import styles                   from './Card.module.scss'
import { CardProps }            from './Card.Props'
import { useContext, useState } from 'react'

import { AppContext } from '../../context'


const Card = ({ id, parentId, title, price, img, orderedItems, isAdded, isFavorite }: CardProps): JSX.Element => {
	const [ disabledBtn, setDisabledBtn ] = useState(false)
	const { onAddToCart, onAddToFavorite } = useContext(AppContext)


	const obj = { id, parentId, title, price, img }

	const onClickPlus = async () => {
		setDisabledBtn(true)
		await onAddToCart(obj)
		setDisabledBtn(false)
	}

	const onClickFavorite = async () => {
		setDisabledBtn(true)
		await onAddToFavorite(obj)
		setDisabledBtn(false)
	}

	return (
		<div className={ styles.card }>
			{ !orderedItems &&
				<img
					onClick={ disabledBtn ? () => false : onClickFavorite }
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
						onClick={ disabledBtn ? () => false : onClickPlus }
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
