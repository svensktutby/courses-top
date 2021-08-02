import { useReducer, FC, useEffect } from 'react';
import styles from './TopPageComponent.module.css';
import {
  Heading,
  Tag,
  HhData,
  Advantages,
  Sort,
  Product,
} from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { SortEnum } from '../../components/Sort/Sort.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent: FC<TopPageComponentProps> = ({
  page,
  products,
  firstCategory,
}): JSX.Element => {
  const [{ sort, products: sortedProducts }, dispatchSort] = useReducer(
    sortReducer,
    { products, sort: SortEnum.Rating },
  );

  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };

  useEffect(() => {
    dispatchSort({ type: 'reset', initialState: products });
  }, [products]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading tag="h1">{page.title}</Heading>
        {products && (
          <Tag color="grey" size="md">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <Product key={p._id} product={p} layout />)}
      </div>
      <div className={styles.hhTitle}>
        <Heading tag="h2">Вакансии - {page.category}</Heading>
        <Tag color="red" size="md">
          hh.ru
        </Tag>
      </div>

      {firstCategory == TopLevelCategory.Courses && page.hh && (
        <HhData {...page.hh} />
      )}
      {page.advantages && page.advantages.length > 0 && (
        <>
          <Heading tag="h2">Преимущества</Heading>
          <Advantages advantages={page.advantages} />
        </>
      )}
      {page.seoText && (
        <div
          className={styles.seo}
          dangerouslySetInnerHTML={{ __html: page.seoText }}
        />
      )}
      <Heading tag="h2">Получаемые навыки</Heading>
      {page.tags.map((tag) => (
        <Tag key={tag} color="primary">
          {tag}
        </Tag>
      ))}
    </div>
  );
};
