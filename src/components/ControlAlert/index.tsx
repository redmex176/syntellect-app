import React from 'react';

import { observer } from 'mobx-react-lite';
import btnsStore from '../../stores/btns-store';

import ButtonDefault from '../ButtonDefault';
import InputText from '../InputTextDefault';

const ControlAlert: React.FC = observer(() => {
    const { inputAlert, setAlertText } = btnsStore;

    const handleAlertCheck = () => {
        if (!!inputAlert && !isNaN(Number(inputAlert))) {
            alert(inputAlert);
        }
    };

    const handleAlert = () => {
        if(!!inputAlert) {
            alert(inputAlert);
        }
    }
    
    return (
        <div>
            <ButtonDefault onClick={handleAlertCheck} text={'Alert num'}/>
            <InputText placeholder ={'Введите текст или число'} value={inputAlert} onChange= {(e) => setAlertText(e.target.value)}/>
            <ButtonDefault onClick={handleAlert} text={'Alert text'}/>
        </div>
    );
});

export default ControlAlert;
