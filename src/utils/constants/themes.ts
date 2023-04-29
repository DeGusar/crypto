import { MenuTheme } from 'antd';

type ThemesTypes = {
  [key: string]: MenuTheme;
};

const THEMES: ThemesTypes = {
  DARK: 'dark',
  LIGHT: 'light',
};

export default THEMES;
