import styles         from './Empty.module.scss'
import { EmptyProps } from './Empty.props'
import { Link }       from 'react-router-dom'


const Empty = ({ image, size, onClose }: EmptyProps): JSX.Element => {

	return (
		<div className={ styles.emptyWrapped }>
			<img
				width={ size }
				height={ size }
				src={ image } alt=''/>
			<h3>Корзина пустая</h3>
			<p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
			<Link to={ '/' } onClick={ onClose }>
				<button className={ `${ styles.greenButton } greenButton` }>
					Вернуться назад
					<img src='/img/arrow.svg' alt='orderArrow'/>
				</button>
			</Link>
		</div>
	)
}

export default Empty