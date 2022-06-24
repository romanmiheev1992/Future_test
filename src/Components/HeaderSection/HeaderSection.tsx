import { HeaderSectionProps } from "./HeaderSection.props"
import styles from './HeaderSection.module.css'
import { Input } from "../Input/Input"
import { categories, sorting} from "../../helpers/mainSet"
import { CheckList } from "../CheckList/CheckList"
import { inputReducer } from "../../redux/reducers/settingReducers"


export const HeaderSection = ({...props}: HeaderSectionProps): JSX.Element => {

    const {toCategory, toSorting} = inputReducer.actions

    return (
        <div 
        {...props}
        className={styles.HeaderSection}
        >
            <h1>Search from books</h1>
            <Input/>
            <CheckList actions={toCategory} set={categories}/>
            <CheckList actions={toSorting} set={sorting}/>
        </div>
    )
}