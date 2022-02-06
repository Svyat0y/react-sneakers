import { ContentHeaderProps } from './ContentHeader.props'

import { Search } from '../Search'


const ContentHeader = ({ onHandleChange, searchValue, title }: ContentHeaderProps) => {
	return (
		<div className="mb-40 d-flex justify-between align-center">
			<h1>{ title }</h1>
			{ title === 'Все кроссовки' && <Search onHandleChange={ onHandleChange } searchValue={ searchValue }/> }
		</div>
	)
}

export default ContentHeader