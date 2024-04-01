import {FC} from 'react';

import ControlAlert from '../ControlAlert';
import ControlText from '../ControlText';

import styles from './style.module.scss';

const GroupControl: FC = () => {
    return (
        <div className={styles.control}>
            <ControlAlert />
            <ControlText />
        </div>
    );
};

export default GroupControl;
