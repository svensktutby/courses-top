import { FC } from 'react';
import cn from 'classnames';
import styles from './Divider.module.css';
import { DividerProps } from './Divider.props';

export const Divider: FC<DividerProps> = ({
  className,
  ...props
}): JSX.Element => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};
