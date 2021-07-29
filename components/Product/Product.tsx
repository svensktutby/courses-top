import { FC } from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';

export const Product: FC<ProductProps> = ({
  product,
  className,
  ...props
}): JSX.Element => {
  return <div>{product.title}</div>;
};
