import { makeAutoObservable } from 'mobx';

class Theme {
  theme = 'dark';

  constructor() {
    makeAutoObservable(this);
  }

  changeTheme(newTheme: string) {
    this.theme = newTheme;
  }
}

export default new Theme();
