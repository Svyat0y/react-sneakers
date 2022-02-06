import styles        from './Card.module.scss'
import { CardProps } from './Card.Props'
import { useState }  from 'react'


const Card = ({ title, price, img, onPlus, onFavorite, isFavourite = false }: CardProps): JSX.Element => {
	const [ isAdded, setIsAdded ] = useState(false)
	const [ isFavorite, setIsFavorite ] = useState(isFavourite)

	const onClickPlus = () => {
		onPlus()
		setIsAdded(true)
	}

	const onClickFavorite = () => {
		onFavorite()
		setIsFavorite(true)
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
					src={ isAdded ? '/img/btn_checked.svg' : '/img/btn_plus.svg' }
					alt='btn_plus'
				/>
			</div>
		</div>
	)
}

export default Card
