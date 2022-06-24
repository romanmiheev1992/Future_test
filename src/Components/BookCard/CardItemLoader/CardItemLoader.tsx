import { CardItemLoaderProps } from "./CardItemLoader.props"
import styles from './CardItemLoader.module.css'

export const CardItemLoader = ({...props}: CardItemLoaderProps): JSX.Element => {
    

    return (
            <div
            className={styles.CardItem} 
            {...props}>
               <div></div>
               <div></div>
               <div></div>
            </div>   
    )
}