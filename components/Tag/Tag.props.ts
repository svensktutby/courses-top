import { HTMLAttributes, DetailedHTMLProps } from 'react';

export interface TagProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: 'sm' | 'md';
  color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
  href?: string;
}
