import styles               from './SearchPanel.module.scss'
import { SearchPanelProps } from './SearchPanel.props'


const SearchPanel = ({ onHandleChange, searchValue }: SearchPanelProps) => {
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

export default SearchPanel