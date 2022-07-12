import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.item}>
          <Link href="/payment">Payment</Link>
        </li>
        <li className={styles.item}>
          <Link href="/users/settings">Settings</Link>
        </li>
      </ul>
    </header>
  );
}
