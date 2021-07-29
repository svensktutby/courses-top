import { FC } from 'react';
import styles from './TopPageComponent.module.css';
import { Heading, Tag, HhData } from '../../components';
import { TopPageComponentProps } from './TopPageComponent.props';
import { TopLevelCategory } from '../../interfaces/page.interface';

export const TopPageComponent: FC<TopPageComponentProps> = ({
  page,
  products,
  firstCategory,
}): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Heading tag="h1">{page.title}</Heading>
        {products && (
          <Tag color="grey" size="md">
            {products.length}
          </Tag>
        )}
        <span>Сортировка</span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Heading tag="h2">Вакансии - {page.category}</Heading>
        <Tag color="red" size="md">
          hh.ru
        </Tag>
      </div>
      {firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
    </div>
  );
};
