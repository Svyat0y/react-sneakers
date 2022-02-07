import { ContentHeaderProps } from './ContentHeader.props'
import styles                 from './ContentHeader.module.scss'
import { Search }             from '../Search'


const ContentHeader = ({ onHandleChange, searchValue, title }: ContentHeaderProps) => {
	return (
		<div className={ styles.titleProduct }>
			<h1>{ title }</h1>
			{ title === 'Все кроссовки' && <Search onHandleChange={ onHandleChange } searchValue={ searchValue }/> }
		</div>
	)
}

export default ContentHeader