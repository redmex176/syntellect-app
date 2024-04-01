import { makeAutoObservable } from "mobx";
import { CountryInfo, getCountryByName } from "../api/apiService";

class BtnsAuto {
    inputValue: string = '';
    suggestions: CountryInfo[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setInputValue = (value: string): void => {
        this.inputValue = value;
        this.fetchSuggestions();
    };

    fetchSuggestions = async (): Promise<void> => {
        try {
          const suggestions: CountryInfo[] = await getCountryByName(this.inputValue);
          this.suggestions = suggestions;
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
    };

    selectSuggestion = (suggestion: CountryInfo): void => {
        this.inputValue = suggestion.name;
        this.suggestions = [];
    };
}

export default new BtnsAuto();
