import { FC } from 'react';
import cn from 'classnames';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />

      <div>
        <Sidebar />

        <div>{children}</div>
      </div>

      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FC<T>,
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
