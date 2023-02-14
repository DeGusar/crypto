import React from 'react';
import { Layout, Menu, Typography } from 'antd';
import { ItemType } from 'antd/lib/menu/hooks/useItems';
import { NavLink } from 'react-router-dom';
import styles from './HeaderMenu.module.scss';
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
  const selectedKeys = useSelectedNavMenuKeys(items);

  return (
    <Header className={styles.header}>
      <Title level={2} style={{ margin: 0 }}>
        Crypto
      </Title>
      <Menu
        mode="horizontal"
        theme="dark"
        items={items}
        selectedKeys={selectedKeys}
      />
    </Header>
  );
}

export default HeaderMenu;
