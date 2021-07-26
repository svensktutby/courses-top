import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop &copy; {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#" target="_blank" rel="noreferrer noopener">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank" rel="noreferrer noopener">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
