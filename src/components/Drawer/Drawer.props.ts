import { ICard } from '../../interfaces'


export interface DrawerProps {
	onClose: () => void
	onRemove: (obj: ICard) => void
	cartItems: Array<ICard>
}