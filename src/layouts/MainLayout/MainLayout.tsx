import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import HeaderMenu from '../../components/HeaderMenu';
import styles from './MainLayout.module.scss';

const { Content, Footer } = Layout;

const MainLayout = () => {
  return (
    <Layout className={styles.layout}>
      <HeaderMenu />
      <Content>
        <div className={styles.content}>
          <Outlet />
        </div>
      </Content>
      <Footer className={styles.footer}>©2023 Created by Denis Gusar</Footer>
    </Layout>
  );
};

export default MainLayout;
