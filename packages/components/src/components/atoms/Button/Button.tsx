import React from 'react'
import { classNames } from '../../../utils';
import styles from "./Button.module.scss"

export interface ButtonProps {
theme:'primary'|'secondary',
title:'',
link:Boolean,
onClick?:
        | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
        | undefined;
}

function Button({theme='primary',title,link,onClick}: ButtonProps) {
return (
<button onClick={onClick}className={classNames(styles.button,styles[theme])}>Button{title}</button>
)
}

export default Button