import styles         from './Header.module.scss'
import { Link }       from 'react-router-dom'
import { useContext } from 'react'

import { AppContext } from '../../context'


const Header = (): JSX.Element => {
	const { openCart, totalPrice } = useContext(AppContext)

	return (
		<header className={ styles.header }>
			<Link to={ '/' }>
				<div className={ styles.headerLeft }>
					<img width={ 40 } height={ 40 } src='/img/logo.svg' alt='logo'/>
					<div>
						<h3>React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
			</Link>
			<ul className={ styles.headerRight }>
				<li onClick={ openCart }>
					<img width={ 20 } height={ 20 } src='/img/cart.svg' alt='cart'/>
					<span>{ totalPrice } руб.</span>
				</li>
				<li>
					<Link to={ '/favorites' }>
						<img width={ 20 } height={ 20 } src='/img/heart.svg' alt='user'/>
					</Link>
				</li>
				<li>
					<img width={ 20 } height={ 20 } src='/img/user.svg' alt='user'/>
				</li>
			</ul>
		</header>
	)
}

export default Header