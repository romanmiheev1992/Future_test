import { DetailedHTMLProps, HTMLAttributes } from "react";
import { responseInterface } from "../../../helpers/interfaces";


export interface CardItemProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: responseInterface
}