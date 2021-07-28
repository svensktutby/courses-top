import { GetStaticPropsContext, GetStaticProps, GetStaticPaths } from 'next';
import axios from 'axios';
import { withLayout } from '../../layout/Layout';
import { MenuItem } from '../../interfaces/menu.interface';
import {
  TopLevelCategory,
  TopPageModel,
} from '../../interfaces/page.interface';
import { ParsedUrlQuery } from 'node:querystring';
import { ProductModel } from '../../interfaces/product.interface';
import { firstLevelMenu } from '../../helpers/helpers';

const apiUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/api`;

function Course({ menu, page, products }: CourseProps): JSX.Element {
  return <>{products && products.length}</>;
}

export default withLayout(Course);

export const getStaticPaths: GetStaticPaths = async () => {
  let paths: string[] = [];

  for (const menuItem of firstLevelMenu) {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${apiUrl}/top-page/find`,
      {
        firstCategory: menuItem.id,
      },
    );

    paths = paths.concat(
      menu.flatMap((item) =>
        item.pages.map((page) => `/${menuItem.route}/${page.alias}`),
      ),
    );
  }

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<CourseProps> = async ({
  params,
}: GetStaticPropsContext<ParsedUrlQuery>) => {
  if (!params) return { notFound: true };

  const firstCategoryItem = firstLevelMenu.find(
    (item) => item.route === params.type,
  );

  if (!firstCategoryItem) return { notFound: true };

  try {
    const { data: menu } = await axios.post<MenuItem[]>(
      `${apiUrl}/top-page/find`,
      {
        firstCategory: firstCategoryItem.id,
      },
    );

    if (!menu.length) return { notFound: true };

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
        firstCategory: firstCategoryItem.id,
        menu,
        page,
        products,
      },
    };
  } catch {
    return { notFound: true };
  }
};

interface CourseProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  menu: MenuItem[];
  page: TopPageModel;
  products: ProductModel[];
}
