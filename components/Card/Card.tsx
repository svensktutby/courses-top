import { FC } from 'react';
import cn from 'classnames';
import styles from './Card.module.css';
import { CardProps } from './Card.props';

export const Card: FC<CardProps> = ({
  color = 'white',
  children,
  className,
  ...props
}): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color == 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
