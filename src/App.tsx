import logo         from './assets/img/logo.svg';
import cart         from './assets/img/cart.svg';
import user         from './assets/img/user.svg';
import heartUnliked from './assets/img/heart_unliked.svg';
import heartLiked   from './assets/img/heart_liked.svg';
import btnPlus      from './assets/img/btn_plus.svg';
import btnChecked   from './assets/img/btn_checked.svg';
import search       from './assets/img/searchSvg.svg';
import removeBtn    from './assets/img/remove_btn.svg';
import arrow        from './assets/img/arrow.svg';

import sneakers1 from './assets/img/sneakers/sneakers1.jpg';
import sneakers2 from './assets/img/sneakers/sneakers2.jpg';
import sneakers3 from './assets/img/sneakers/sneakers3.jpg';
import sneakers4 from './assets/img/sneakers/sneakers4.jpg';


const App = (): JSX.Element => {
	return (
		<div className="wrapper clear">

			<div className='overlay'>
				<div className='drawer'>
					<h2>
						Корзина
						<img width={ 32 } height={ 32 } className='remove-btn cu-p' src={ removeBtn } alt='close'/>
					</h2>

					<div className='items'>

						<div className='cartItem d-flex align-center'>
							<img width={ 70 } height={ 70 } src={ sneakers1 } alt='sneakers'/>
							<div>
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img width={ 32 } height={ 32 } className='remove-btn cu-p' src={ removeBtn } alt='close'/>
						</div>

						<div className='cartItem d-flex align-center'>
							<img width={ 70 } height={ 70 } src={ sneakers1 } alt='sneakers'/>
							<div>
								<p>Мужские Кроссовки Nike Air Max 270</p>
								<b>12 999 руб.</b>
							</div>
							<img width={ 32 } height={ 32 } className='remove-btn cu-p' src={ removeBtn } alt='close'/>
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
							<img src={ arrow } alt='orderArrow'/>
						</button>
					</div>


				</div>
			</div>

			<header className='d-flex justify-between align-center p-40'>
				<div className='headerLeft d-flex align-center'>
					<img width={ 40 } height={ 40 } src={ logo } alt='logo'/>
					<div>
						<h3 className='text-uppercase'>React sneakers</h3>
						<p>Магазин лучших кроссовок</p>
					</div>
				</div>
				<ul className='headerRight d-flex justify-between align-center'>
					<li className='mr-30 cu-p align-center'>
						<img width={ 20 } height={ 20 } src={ cart } alt='cart'/>
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={ 20 } height={ 20 } src={ user } alt='user'/>
					</li>
				</ul>
			</header>
			<div className='content p-40'>
				<div className='mb-40 d-flex justify-between align-center'>
					<h1>Все кроссовки</h1>
					<div className='search-block'>
						<img src={ search } alt='search'/>
						<input type='text' placeholder='Поиск..'/>
					</div>
				</div>

				<div className='d-flex flex-wrap justify-between mt-40'>
					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src={ heartUnliked } alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src={ sneakers1 } alt='sneakers1'/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src={ btnPlus } alt='btn_plus'/>
						</div>
					</div>

					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src={ heartUnliked } alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src={ sneakers2 } alt='sneakers2'/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src={ btnPlus } alt='btn_plus'/>
						</div>
					</div>

					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src={ heartUnliked } alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src={ sneakers2 } alt='sneakers2'/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src={ btnPlus } alt='btn_plus'/>
						</div>
					</div>

					<div className='card p-20 d-flex flex-column'>
						<div className='favorite cu-p'>
							<img width={ 32 } height={ 32 } src={ heartUnliked } alt='Unliked'/>
						</div>
						<img width={ 133 } height={ 112 } src={ sneakers2 } alt='sneakers2'/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<img className='cu-p' width={ 32 } height={ 32 } src={ btnPlus } alt='btn_plus'/>
						</div>
					</div>

				</div>

			</div>
		</div>
	);
};

export default App;
