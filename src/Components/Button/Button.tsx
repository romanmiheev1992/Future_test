import styles from './Button.module.css'
import { ButtonProps } from './Button.props'

export const Button = ({text, ...props}: ButtonProps): JSX.Element => <button className={styles.Button} {...props}>{text}</button>
