import { makeAutoObservable } from 'mobx';
import THEMES from '@/utils/constants/themes';

class Theme {
  theme = THEMES.DARK;

  constructor() {
    makeAutoObservable(this);
  }

  toggleTheme() {
    this.theme = this.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  }
}

const colorTheme = new Theme();
export default colorTheme;
