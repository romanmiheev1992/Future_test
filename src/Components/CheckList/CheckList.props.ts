import { DetailedHTMLProps, HTMLAttributes } from "react";
import { MainSetProps } from "../../helpers/mainSet";


export interface CheckListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    set: MainSetProps,
    actions: Function,
}