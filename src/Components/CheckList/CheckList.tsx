import { CheckListProps } from "./CheckList.props"
import styles from './CheckList.module.css'
import React from "react"
import { useDispatch } from "react-redux"

export const CheckList = ({set, actions, ...props}: CheckListProps): JSX.Element => {

    const dispatch = useDispatch()

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(actions(e.target.value))
    }

    return (
        <div className={styles.CheckList} {...props}>
            <p>{set.label}</p>
            <select 
               onChange={onChange}
            >
                {
                    set.list.map(item => <option key={item} value={item === 'all' ? '' : item}>{item.toUpperCase()}</option>)
                }
            </select>
        </div>
    )
}