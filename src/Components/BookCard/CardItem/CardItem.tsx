import { CardItemProps } from "./CardItem.props"
import styles from './CardItem.module.css'
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getId } from "../../../redux/reducers/bookReducer";

export const CardItem = ({item, ...props}: CardItemProps): JSX.Element => {
    
    const dispatch = useDispatch()

    const get = () => dispatch(getId(item.id))

    return (
    
        <Link
            to={`/${item.id}`}
            onClick={get}
        >
            <div
            className={styles.CardItem} 
            {...props}>
                { item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.thumbnail ? <img src={item.volumeInfo.imageLinks.thumbnail}/> : <div className={styles.emptyBlock}><p>фотография отсутствует</p></div>}
                <p>{item.volumeInfo.categories && item.volumeInfo.categories[0].split(',')[0]}</p>
                <p>{item.volumeInfo.title && item.volumeInfo.title}</p>
                <p>{item.volumeInfo.authors && item.volumeInfo.authors}</p>
            </div>   
        </Link>
        
    )
}