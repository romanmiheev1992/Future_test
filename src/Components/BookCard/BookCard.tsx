import { useDispatch } from 'react-redux'
import { LoaderArray } from '../../helpers/mainSet'
import { useSelectorHook } from '../../hooks/redux'
import { toPaginate } from '../../redux/reducers/settingReducers'
import { Loader } from '../Loader/Loader'
import styles from './BookCard.module.css'
import { CardItem } from './CardItem/CardItem'
import {fetchPaginate} from '../../redux/reducers/responseReducers'
import { responseInterface } from '../../helpers/interfaces'
import { CardItemLoader } from './CardItemLoader/CardItemLoader'
import { Button } from '../Button/Button'

export const BookCard = (): JSX.Element => {

    const dispatch = useDispatch()

    const topaginate = () => {
        dispatch(toPaginate())
        dispatch(fetchPaginate())
    }

    const {dataBase, error, paginateLoader, loader, total} = useSelectorHook(state => state.responseReducer)

    return (
        <>
          {<h3 className={styles.result}> {error ? error : `Found ${total} results`}</h3>}
            <div className={styles.BookCard}>
                {
                    loader 
                    ? 
                    LoaderArray.map((i) => {
                        return <CardItemLoader key={i}/>
                    })
                    :
                    dataBase && dataBase.map((item: responseInterface, i: number) => (
                        <CardItem
                            key={item.volumeInfo.title + i}
                            item={item}
                        />
                    ))  
                }
                
            </div>
            {
                    dataBase && dataBase.length === 0
                    ? null
                    :  dataBase && dataBase.length === 0 || paginateLoader
                    ? <Loader/>
                    : <Button
                        text='Load more'
                        onClick={topaginate}
                    />
            }
        </>
    )
}