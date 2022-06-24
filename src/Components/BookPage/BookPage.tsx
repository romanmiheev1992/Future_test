import { useSelectorHook } from "../../hooks/redux"
import { BookPageProps } from "./BookPage.props"
import styles from './BookPage.module.css'
import { useLocation } from "react-router-dom"

export const BookPage = ({...props}: BookPageProps): JSX.Element => {

    const location = useLocation()
    const {book} = useSelectorHook(state => state.bookReducer)
    const {error} = useSelectorHook(state => state.responseReducer)

    return (
        <>
            {error ? <h1>{error}</h1> : null}
            { 
                location.pathname === `/${book.id}`
                ?
                <div className={styles.BookPage} {...props}>
                    {book && book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.thumbnail ? <img src={book.volumeInfo.imageLinks.thumbnail}/> : <div className={styles.emptyBlock}><p>фотография отсутствует</p></div>}
                    {book.volumeInfo.categories && <p className={styles.categories}>{book.volumeInfo.categories}</p>}
                    {book.volumeInfo.title && <p className={styles.title}>{book.volumeInfo.title}</p>}
                    {book.volumeInfo.authors && <p className={styles.authors}>{book.volumeInfo.authors}</p>}
                    {book.volumeInfo.description && book.volumeInfo.description.match('<') ? <p className={styles.description} dangerouslySetInnerHTML={{__html: book.volumeInfo.description}}></p> : <p className={styles.description}>{book.volumeInfo.description}</p>}

                </div>
                :
                <div className={styles.loaderBookPage}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
        </>
    )
}
