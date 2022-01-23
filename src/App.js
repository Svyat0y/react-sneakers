import logo    from './assets/img/logo.svg'
import cart    from './assets/img/cart.svg'
import user    from './assets/img/user.svg'
import plusSvg from './assets/img/plus.svg'

import sneakers1 from './assets/img/sneakers/sneakers1.jpg'
import sneakers2 from './assets/img/sneakers/sneakers2.jpg'
import sneakers3 from './assets/img/sneakers/sneakers3.jpg'
import sneakers4 from './assets/img/sneakers/sneakers4.jpg'


const App = () => {
	return (
		<div className="wrapper clear">
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
				<h1>Все кроссовки</h1>

				<div className='d-flex justify-center flex-wrap mt-40'>
					<div className='card p-20'>
						<img width={ 133 } height={ 112 } src={ sneakers1 } alt='sneakers1'/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button cu-p'>
								<img width={ 11 } height={ 11 } src={ plusSvg } alt='plusSevg'/>
							</button>
						</div>
					</div>

					<div className='card p-20'>
						<img width={ 133 } height={ 112 } src={ sneakers2 } alt='sneakers2'/>
						<p>Мужские Кроссовки Nike Air Max 270</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>12 999 руб.</b>
							</div>
							<button className='button cu-p'>
								<img width={ 11 } height={ 11 } src={ plusSvg } alt='plusSevg'/>
							</button>
						</div>
					</div>

					<div className='card p-20'>
						<img width={ 133 } height={ 112 } src={ sneakers3 } alt='sneakers3'/>
						<p>Мужские Кроссовки Nike Blazer Mid Suede</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>8 499 руб.</b>
							</div>
							<button className='button cu-p'>
								<img width={ 11 } height={ 11 } src={ plusSvg } alt='plusSevg'/>
							</button>
						</div>
					</div>

					<div className='card p-20'>
						<img width={ 133 } height={ 112 } src={ sneakers4 } alt='sneakers4'/>
						<p>Кроссовки Puma X Aka Boku Future Rider</p>
						<div className='d-flex justify-between align-center'>
							<div className='d-flex flex-column'>
								<span>Цена:</span>
								<b>8 999 руб.</b>
							</div>
							<button className='button cu-p'>
								<img width={ 11 } height={ 11 } src={ plusSvg } alt='plusSevg'/>
							</button>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export default App
