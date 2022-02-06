import styles        from './Home.module.scss'
import { HomeProps } from './Home.props'

import { ContentHeader } from '../../components/ContentHeader'
import { ICard }         from '../../interfaces'
import { Card }          from '../../components/Card'


const Home = ({ sneakers, searchValue, onHandleChange, onAddToCart, onAddToFavorite }: HomeProps) => {

	const filteredSneakers = sneakers.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
	const visibleItems = sneakers && filteredSneakers.map((item: ICard, index: number) => {
		return (
			<Card
				key={ index }
				title={ item.title }
				price={ item.price }
				img={ item.img }
				onPlus={ () => onAddToCart(item) }
				onFavorite={ () => onAddToFavorite(item) }/>
		)
	})
	return (
		<div className={ styles.content }>
			<ContentHeader title={ 'Все кроссовки' } searchValue={ searchValue } onHandleChange={ onHandleChange }/>
			<div className="cardWrapper">
				{ visibleItems }
			</div>
		</div>
	)
}

export default Home