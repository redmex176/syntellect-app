import {FC, useState} from 'react';

import {observer} from 'mobx-react-lite';
import btnsAutoStore from '../../stores/btnsAuto-store';

import {CountryInfo} from '../../api/apiService';

import InputTextDefault from '../InputTextDefault';

import styles from './style.module.scss';

const ControlAuto: FC = observer(() => {
    const {inputValue, setInputValue, suggestions, selectSuggestion} = btnsAutoStore;

    const [isOpen, setIsOpen] = useState(false);
    const [selectedCount, setSelectedCount] = useState("null");

    const filteredSuggestions = selectedCount !== "null" ? suggestions.slice(0, +selectedCount) : suggestions;

    const handleInputChange = (value: string) => {
        setInputValue(value);
        setIsOpen(value.length > 0);
    };
    
    const handleSuggestionClick = (suggestion: CountryInfo) => {
        selectSuggestion(suggestion);
        setIsOpen(false);
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCount(e.target.value);
    };

    return (
        <div className={styles.control}>
            <InputTextDefault
                placeholder={'Введите название...Например "Албания"'}
                value={inputValue}
                onChange={(e) => handleInputChange(e.target.value)}
                onClick={() => setIsOpen(!isOpen)} 
            />
            <select className={styles.control__select} onChange={handleSelectChange}>
                <option value='null'>All</option>
                <option value="3">3</option>
                <option value="10">10</option>
            </select>
            {isOpen && (
                <ul className={styles.control__list}>
                    {filteredSuggestions.map((suggestion: CountryInfo) => (
                        <li className={styles.list__item} key={suggestion.name} onClick={() => handleSuggestionClick(suggestion)}>
                            {suggestion.name} - {suggestion.fullName} <img src={suggestion.flag} alt="" />
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

export default ControlAuto;
