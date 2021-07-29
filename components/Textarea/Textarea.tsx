import { FC } from 'react';
import cn from 'classnames';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea: FC<TextareaProps> = ({
  className,
  ...props
}): JSX.Element => {
  return <textarea className={cn(className, styles.input)} {...props} />;
};
