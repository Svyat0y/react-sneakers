import styles                 from './ContentHeader.module.scss'
import { ContentHeaderProps } from './ContentHeader.props'

import { Search } from '../Search'


const ContentHeader = ({ title }: ContentHeaderProps) => {

	return (
		<div className={ styles.titleProduct }>
			<h1>{ title }</h1>
			{ title === 'Все кроссовки' && <Search/> }
		</div>
	)
}

export default ContentHeader