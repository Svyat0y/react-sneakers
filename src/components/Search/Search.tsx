import styles          from './Search.module.scss'
import { SearchProps } from './Search.props'


const Search = ({ onHandleChange, searchValue }: SearchProps) => {
	return (
		<div className={ styles.searchBlock }>
			<img src="/img/search.svg" alt="search"/>
			<input onChange={ onHandleChange } value={ searchValue } type="search" placeholder="Поиск.."/>
		</div>
	)
}

export default Search