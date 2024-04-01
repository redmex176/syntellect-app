import { makeAutoObservable } from "mobx";

class BtnControl {
    inputText: string | number = '';
    inputAlert: string | number = '';

    constructor() {
        makeAutoObservable(this);
    }   

    clearText = (): void => {
      this.inputText = '';
    };
  
    changeText = (): void => {
      this.inputText = 'Hello world!';
    };

    setText = (e: string | number): void => {
        this.inputText = e;
    };

    setAlertText = (e: string | number): void => {
        this.inputAlert = e;
    };

}

export default new BtnControl();
