import styles from './Input.module.css'
import { InputProps } from './Input.props'
import { ReactComponent as Search } from './img/search.svg'
import { inputReducer } from '../../redux/reducers/settingReducers'
import { useDispatch } from 'react-redux'
import { clearDataBase, responseReducer } from '../../redux/reducers/responseReducers'
import { useSelectorHook } from '../../hooks/redux'
import React, { useState } from 'react'

export const Input = ({...props}: InputProps): JSX.Element => {

    const [text, setText] = useState<string>('Введите ключевое слово')
    const {input} = useSelectorHook(state => state.inputReducer)
    const {toInput} = inputReducer.actions
    const {fetch} = responseReducer.actions
    
    const dispatch = useDispatch()

    const onEnter = (e: React.KeyboardEvent) => {
        if(e.key === 'Enter' && input) {
            dispatch(clearDataBase())
            dispatch(fetch())
        }else {
            setText('Нельзя оставлять поле пустым')
        }
    }

    const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(toInput(e.target.value))
    }

    const onSubmit = () => {
        if(input) {
            dispatch(clearDataBase())
            dispatch(fetch())
        } else {
            setText('Нельзя оставлять поле пустым')
        }
       
    }

    return (
        <div className={styles.Input} {...props}>
           <input 
            type="text"
            onChange={(e) => onInput(e)}
            onKeyDown={(e) => onEnter(e)}
            placeholder={text}
           />
           <button
            onClick={onSubmit}
           ><Search/></button>
        </div>
    )
}