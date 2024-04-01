import {FC} from 'react';

import { observer } from 'mobx-react-lite';
import btnsStore from '../../stores/btns-store';

import InputText from '../InputTextDefault';
import ButtonDefault from '../ButtonDefault';

const ControlText: FC = observer(() => {
    const { inputText, setText, clearText, changeText } = btnsStore;

    return (
        <div>
            <InputText  placeholder ={'Введите текст'} value={inputText} onChange={(e) => setText(e.target.value)}/>
            <ButtonDefault onClick={clearText} text={'Clear'}/>
            <ButtonDefault onClick={changeText} text={'Change Text'}/>
        </div>
            
    );
});

export default ControlText;
