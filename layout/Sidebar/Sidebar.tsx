import cn from 'classnames';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';
import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <aside className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />

      <div>поиск</div>

      <Menu />
    </aside>
  );
};
