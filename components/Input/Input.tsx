import { ForwardedRef, forwardRef } from 'react';
import cn from 'classnames';
import styles from './Input.module.css';
import { InputProps } from './Input.props';

export const Input = forwardRef(
  (
    { className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ): JSX.Element => {
    return (
      <input className={cn(className, styles.input)} ref={ref} {...props} />
    );
  },
);
