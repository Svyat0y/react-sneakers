import styles                 from './ContentHeader.module.scss'
import { ContentHeaderProps } from './ContentHeader.props'


const ContentHeader = ({ onHandleChange, searchValue }: ContentHeaderProps) => {
	return (
		<div className="mb-40 d-flex justify-between align-center">
			<h1>Все кроссовки</h1>
			<div className={ styles.searchBlock }>
				<img src="/img/search.svg" alt="search"/>
				<input onChange={ onHandleChange } value={ searchValue } type="search" placeholder="Поиск.."/>
			</div>
		</div>
	)
}

export default ContentHeader