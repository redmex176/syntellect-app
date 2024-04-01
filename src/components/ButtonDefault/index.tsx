import { FC } from 'react';

import styles from './style.module.scss';

interface IButtonDefault {
    text: string,
    onClick: () => void;
}

const ButtonDefault: FC<IButtonDefault> = ({text, onClick}) => {
    return <button className={styles.button__default} onClick={onClick}>{text}</button>;
};

export default ButtonDefault;