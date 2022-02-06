import { ContentHeaderProps } from './ContentHeader.props'

import { Search }        from '../Search'
import { Route, Routes } from 'react-router'


const ContentHeader = ({ onHandleChange, searchValue }: ContentHeaderProps) => {
	return (
		<div className="mb-40 d-flex justify-between align-center">
			<h1>Все кроссовки</h1>
			<Routes>
				<Route path={ '/' } element={ <Search onHandleChange={ onHandleChange } searchValue={ searchValue }/> }/>
			</Routes>
		</div>
	)
}

export default ContentHeader