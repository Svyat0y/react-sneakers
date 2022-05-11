import styles                                      from './Header.module.scss'
import cn                                          from 'classnames'
import { Link }                                    from 'react-router-dom'
import { useContext, useEffect, useRef, useState } from 'react'

import { AppContext } from '../../context'


const Header = (): JSX.Element => {
	const [ isOpened, setIsOpened ] = useState(false)
	const { openCart, cartOpened, totalPrice } = useContext(AppContext)
	const menuContentRef = useRef<any>(null)

	useEffect(() => {
		document.addEventListener('click', handleOutsideClick)

		return () => {
			document.removeEventListener('click', handleOutsideClick)
		}
	}, [])

	const handleOutsideClick = (e: any) => {
		if (!e.path.includes(menuContentRef.current)) {
			setIsOpened(false)
		}
	}

	const openMobileMenu = () => {
		setIsOpened(!isOpened)
	}

	if (!isOpened) {
		document.body.style.overflow = 'unset'
	}
	else{
		document.body.style.overflow = 'hidden'
	}

	if (cartOpened) {
		document.body.style.overflow = 'hidden'
	}

	return (
		<>
			<header className={ styles.header }>
				<Link to={ '' }>
					<div className={ styles.headerLeft }>
						<img src={ 'img/logo.svg' } alt='logo'/>
						<div className={ styles.logo_title }>
							<h3>React sneakers</h3>
							<p>Магазин лучших кроссовок</p>
						</div>
					</div>
				</Link>
				<ul className={ styles.headerRight }>
					<li onClick={ openCart }>
						<img width={ 20 } height={ 20 } src={ 'img/cart.svg' } alt='cart'/>
						<span>{ totalPrice } руб.</span>
					</li>
					<li>
						<Link to={ 'favorites' }>
							<img width={ 20 } height={ 20 } src={ 'img/heart.svg' } alt='user'/>
						</Link>
					</li>
					<li>
						<Link to={ 'orders' }>
							<img width={ 20 } height={ 20 } src={ 'img/user.svg' } alt='user'/>
						</Link>
					</li>
				</ul>
				<div ref={ menuContentRef } className={ styles.menu }>
					<button type="button" className={ cn(styles.menu__btn, {
						[styles.active]: isOpened
					}) } onClick={ openMobileMenu }>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>

			</header>
			<div className={ cn(styles.menu_content, {
				[styles.active]: isOpened
			}) }>
				<ul>
					<li className={ styles.men_item } onClick={ openCart }>
						<img width={ 20 } height={ 20 } src={ 'img/cart.svg' } alt='cart'/>
						<span style={ { marginLeft: '10px' } }>Корзина</span>
					</li>
					<li className={ styles.men_item }>
						<Link to={ 'favorites' }>
							<img width={ 20 } height={ 20 } src={ 'img/heart.svg' } alt='user'/>
							<span style={ { marginLeft: '10px' } }>Избранное</span>
						</Link>
					</li>
					<li className={ styles.men_item }>
						<Link to={ 'orders' }>
							<img width={ 20 } height={ 20 } src={ 'img/user.svg' } alt='user'/>
							<span style={ { marginLeft: '10px' } }>Мои заказы</span>
						</Link>
					</li>
					<li className={ styles.men_item }>
						<Link to={ '' }>
							<span>На главную</span>
						</Link>
					</li>
				</ul>
			</div>
		</>
	)
}

export default Header