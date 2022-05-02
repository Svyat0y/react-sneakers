import styles        from './Info.module.scss'
import { InfoProps } from './Info.props'
import { Link }      from 'react-router-dom'


const Info = ({ title, description, image, size, onClose }: InfoProps): JSX.Element => {

	return (
		<div className={ styles.emptyWrapped }>
			<img
				width={ size }
				height={ size }
				src={ image } alt=''/>
			<h3>{ title }</h3>
			<p>{ description }</p>
			<Link to={ '/' } onClick={ onClose }>
				<button className={ `${ styles.greenButton } greenButton` }>
					Вернуться назад
					<img src='/img/arrow.svg' alt='orderArrow'/>
				</button>
			</Link>
		</div>
	)
}

export default Info