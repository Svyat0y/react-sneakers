import styles from './Drawer.module.scss';


interface DrawerProps {
	onClose?: () => void
}

const Drawer = ({ onClose }: DrawerProps): JSX.Element => {

	return (
		<div className={ styles.overlay }>
			<div className={ styles.drawer }>
				<h2>
					Корзина
					<img
						onClick={ onClose }
						width={ 32 }
						height={ 32 }
						className={ styles.removeBtn }
						src='/img/remove_btn.svg'
						alt='close'
					/>
				</h2>
				<div className={ styles.items }>

					<div className={ styles.cartItem }>
						<img width={ 70 } height={ 70 } src='/img/sneakers/sneakers1.jpg' alt='sneakers'/>
						<div>
							<p>Мужские Кроссовки Nike Air Max 270</p>
							<b>12 999 руб.</b>
						</div>
						<img width={ 32 } height={ 32 } className={ styles.removeBtn } src='/img/remove_btn.svg' alt='close'/>
					</div>

				</div>
				<div className={ styles.cartTotalBlock }>
					<ul>
						<li className='d-flex'>
							<span>Итого:</span>
							<div></div>
							<b>21 498 руб.</b>
						</li>
						<li className='d-flex'>
							<span>Налог 5%</span>
							<div></div>
							<b>1074 руб.</b>
						</li>
					</ul>
					<button className={ `${ styles.greenButton } greenButton` }>
						Оформить заказ
						<img src='/img/arrow.svg' alt='orderArrow'/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Drawer;