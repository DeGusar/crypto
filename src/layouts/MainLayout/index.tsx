import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import HeaderMenu from 'components/HeaderMenu';
import styles from './MainLayout.module.scss';

const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout className={styles.mainLayout}>
      <HeaderMenu />
      <Content>
        <div className={styles.mainLayoutContent}>
          <Outlet />
        </div>
      </Content>
      <Footer className={styles.mainLayoutFooter}>
        ©2023 Created by Denis Gusar
      </Footer>
    </Layout>
  );
};

export default MainLayout;
