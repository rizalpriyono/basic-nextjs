import { ReactNode } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
