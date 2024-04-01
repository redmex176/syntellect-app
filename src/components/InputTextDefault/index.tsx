import { ChangeEvent, FC } from "react";

import styles from './style.module.scss';

interface IInputTextDefault {
    value: string | number,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    onClick?: () => void,
}

const InputTextDefault: FC<IInputTextDefault> = ({value, onChange, placeholder, onClick}) => {
    return (
        <input className={styles.input__default}type="text" placeholder={placeholder} value={value} onChange={onChange} onClick ={onClick}/>
    );
};

export default InputTextDefault;