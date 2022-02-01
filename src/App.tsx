const App = (): JSX.Element => {
	return (
		<div className="wrapper clear">

			{/*<div className='overlay'>
				<div className='drawer'>
					<h2>
						Корзина
						<img width={ 32 } height={ 32 } className='remove-btn cu-p' src='/img/remove_btn.svg' alt='close'/>
					</h2>

					<div className='items'>

						<div className='cartItem d-flex align-center'>
							<img width={ 70 } height={ 70 } src='/img/sneakers/sneakers1.jpg' alt='sneakers'/>
							<div>
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img width={ 32 } height={ 32 } className='remove-btn cu-p' src='/img/remove_btn.svg' alt='close'/>
						</div>

						<div className='cartItem d-flex align-center'>
							<img width={ 70 } height={ 70 } src='/img/sneakers/sneakers2.jpg' alt='sneakers'/>
							<div>
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img width={ 32 } height={ 32 } className='remove-btn cu-p' src='/img/remove_btn.svg' alt='close'/>
						</div>

					</div>

					<div className='cartTotalBlock'>
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
						<button className='greenButton'>
							Оформить заказ
							<img src='/img/arrow.svg' alt='orderArrow'/>
						</button>
					</div>
				</div>
			</div>*/ }

			<header className='d-flex justify-between align-center p-40'>
				<div className='headerLeft d-flex align-center'>
					<img width={ 40 } height={ 40 } src='./img/logo.svg' alt='logo'/>
					<div>
						<h3 className='text-uppercase'>React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className='headerRight d-flex justify-between align-center'>
					<li className='mr-30 cu-p align-center'>
						<img width={ 20 } height={ 20 } src='/img/cart.svg' alt='cart'/>
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={ 20 } height={ 20 } src='/img/user.svg' alt='user'/>
					</li>
				</ul>
			</header>

			<div className='content p-40'>
				<div className='mb-40 d-flex justify-between align-center'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src='/img/search.svg' alt='search'/>
						<input type='text' placeholder='Поиск..'/>
					</div>
				</div>

				<div className='d-flex flex-wrap justify-between mt-40'>
					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src='/img/heart_unliked.svg' alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src='/img/sneakers/sneakers1.jpg' alt='sneakers'/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src='/img/btn_plus.svg' alt='btn_plus'/>
						</div>
					</div>

					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src='/img/heart_unliked.svg' alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src='/img/sneakers/sneakers2.jpg' alt='sneakers'/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src='/img/btn_plus.svg' alt='btn_plus'/>
						</div>
					</div>

					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src='/img/heart_unliked.svg' alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src='/img/sneakers/sneakers3.jpg' alt='sneakers'/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src='/img/btn_plus.svg' alt='btn_plus'/>
						</div>
					</div>

					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src='/img/heart_unliked.svg' alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src='/img/sneakers/sneakers4.jpg' alt='sneakers-img'/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src='/img/btn_plus.svg' alt='btn_plus'/>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
};

export default App;
