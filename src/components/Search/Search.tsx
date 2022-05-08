import styles         from './Search.module.scss'
import { useContext } from 'react'

import { AppContext } from '../../context'


const Search = (): JSX.Element => {
	const { onHandleChange, searchValue } = useContext(AppContext)

	return (
		<div className={ styles.searchBlock }>
			<img src="img/search.svg" alt="search"/>
			<input onChange={ onHandleChange } value={ searchValue } type="search" placeholder="Поиск.."/>
		</div>
	)
}

export default Search