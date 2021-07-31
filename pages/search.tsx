import { GetStaticProps } from 'next';
import axios from 'axios';
import { API } from '../helpers/api';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

const firstCategory = 0;

function Search(): JSX.Element {
  return <>Search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<SearchProps> = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface SearchProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
