import { createContext, FC, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider: FC<IAppContext> = ({
  children,
  menu,
  firstCategory,
}): JSX.Element => {
  const [menuList, setMenuList] = useState<MenuItem[]>(menu);

  const setMenu = (newMenu: MenuItem[]) => {
    setMenuList(newMenu);
  };

  return (
    <AppContext.Provider value={{ menu: menuList, firstCategory, setMenu }}>
      {children}
    </AppContext.Provider>
  );
};
