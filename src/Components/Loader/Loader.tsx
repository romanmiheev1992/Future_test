
import styles from './Loader.module.css'
import { LoaderProps } from './Loader.props'


export const Loader = ({...props}: LoaderProps): JSX.Element => <div className={styles.lds_ripple} {...props}><div></div><div></div></div>