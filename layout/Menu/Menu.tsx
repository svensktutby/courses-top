import { useContext, useEffect } from 'react';
import cn from 'classnames';
import styles from './Menu.module.css';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);

  return (
    <nav>
      <ul>
        {menu.map((item) => (
          <li key={item._id.secondCategory}>{item._id.secondCategory}</li>
        ))}
      </ul>
    </nav>
  );
};
