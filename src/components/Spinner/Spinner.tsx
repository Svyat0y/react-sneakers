import styles from './Spinner.module.scss'


const Spinner = (): JSX.Element => {
	return (
		<div className={ styles.wrapper }>
			loading..
		</div>

	)
}

export default Spinner