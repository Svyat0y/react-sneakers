import { useState } from 'react'

import styles from './Card.module.scss'

import { CardProps } from '../../interfaces'


const Card = ({ title, price, img, onPlus, onFavorite }: CardProps): JSX.Element => {
	const [ isAdded, setIsAdded ] = useState<boolean>(false)

	const onClickPlus = (): void => {
		setIsAdded(!isAdded)
	}

	return (
		<div className={ styles.card }>
			<img
				onClick={ onFavorite }
				className={ styles.favorite }
				width={ 32 }
				height={ 32 }
				src='/img/heart_unliked.svg'
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
					<b>{ price + price } руб.</b>
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
