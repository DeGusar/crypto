import React from 'react';
import { observer } from 'mobx-react-lite';
import { Layout, Menu, Typography, Button, theme } from 'antd';
import { NavLink } from 'react-router-dom';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import routePaths from '@/utils/constants/routePaths';
import colorTheme from '@/store/theme';
import useSelectedNavMenuKeys from './useSelectedNavMenuKeys';
import styles from './HeaderMenu.module.scss';

const { Header } = Layout;
const { Title } = Typography;

const items: ItemType[] = [
  {
    key: '/',
    label: <NavLink to={routePaths.MAIN_PAGE}>Home</NavLink>,
  },
  {
    key: '/charts',
    label: <NavLink to={routePaths.CHARTS_PAGE}>Charts</NavLink>,
  },
];

const HeaderMenu = observer(() => {
  const chosenTheme = colorTheme.theme;
  const selectedKeys = useSelectedNavMenuKeys(items);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleTheme = () => colorTheme.toggleTheme();

  return (
    <Header
      className={styles.headerMenu}
      style={{ background: colorBgContainer }}
    >
      <Title level={2}>Crypto</Title>
      <Button onClick={toggleTheme}>Switch theme</Button>
      <Menu
        mode="horizontal"
        theme={chosenTheme}
        items={items}
        style={{ background: colorBgContainer }}
        selectedKeys={selectedKeys}
      />
    </Header>
  );
});

export default HeaderMenu;
