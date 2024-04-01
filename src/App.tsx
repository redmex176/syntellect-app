import { FC } from 'react';

import GroupControl from './components/GroupControl';
import ControlAuto from './components/ControlAuto';

import styles from "./App.module.scss";

const App: FC = () => {
    
  return (
    <div className={styles.wrapp}>
        <GroupControl/>
        <ControlAuto/>
    </div>
  )
}

export default App;
