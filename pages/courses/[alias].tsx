import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import { TopPageModel } from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'querystring';
import { ProductModel } from '../../interfaces/product.interface';

const firstCategory = 0;
const apiUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/api`;

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return <>{products && products.length}</>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  const { data: menu } = await axios.post<MenuItem[]>(
    `${apiUrl}/top-page/find`,
    {
      firstCategory,
    },
  );

  return {
    paths: menu.flatMap((item) =>
      item.pages.map((page) => `/courses/${page.alias}`),
    ),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) {
    return {
      notFound: true,
    };
  }

  const { data: menu } = await axios.post<MenuItem[]>(
    `${apiUrl}/top-page/find`,
    {
      firstCategory,
    },
  );

  const { data: page } = await axios.get<TopPageModel>(
    `${apiUrl}/top-page/byAlias/${params.alias}`,
  );

  const { data: products } = await axios.post<ProductModel[]>(
    `${apiUrl}/product/find`,
    {
      category: page.category,
      limit: 10,
    },
  );

  return {
    props: {
      firstCategory,
      menu,
      page,
      products,
    },
  };
};

interface CourseProps extends Record<string, unknown> {
  firstCategory: number;
  menu: MenuItem[];
  page: TopPageModel;
  products: ProductModel[];
}
