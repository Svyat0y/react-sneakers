import { CardProps } from './Card.props';

import styles from './Card.module.scss';


const Card = ({ name, price, img }: CardProps): JSX.Element => {
	return (
		<div className={ styles.card }>
			<div className={ styles.favorite }>
				<img width={ 32 } height={ 32 } src='/img/heart_unliked.svg' alt='Unliked'/>
			</div>
			<img width={ 133 } height={ 112 } src={ img } alt='sneakers'/>
			<p>{ name }</p>
			<div className='d-flex justify-between align-center'>
				<div className='d-flex flex-column'>
					<span>Цена:</span>
					<b>{ price } руб.</b>
				</div>
				<img className='cu-p' width={ 32 } height={ 32 } src='/img/btn_plus.svg' alt='btn_plus'/>
			</div>
		</div>
	);
};

export default Card;
