import React from 'react';
import { Layout, Menu, Typography, Button, theme } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { NavLink } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { switchTheme } from '../../store/reducers/cryptoSlice';
import routePaths from '../../utils/constants/routePaths';
import useSelectedNavMenuKeys from './useSelectedNavMenuKeys';

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

function HeaderMenu() {
  const dispatch = useAppDispatch();
  const chosenTheme = useAppSelector((state) => state.root.theme);
  const selectedKeys = useSelectedNavMenuKeys(items);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const toggleTheme = () =>
    dispatch(switchTheme(chosenTheme === 'light' ? 'dark' : 'light'));

  return (
    <Header className={styles.header} style={{ background: colorBgContainer }}>
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
}

export default HeaderMenu;
