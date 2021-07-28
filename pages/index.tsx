import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Button, Heading, Paragraph, Rating, Tag } from '../components';
import { withLayout } from '../layout/Layout';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState(4);

  return (
    <>
      <Heading tag="h1">Heading</Heading>
      <Button appearance="primary" arrow="right">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>

      <Paragraph size="lg">Большой</Paragraph>
      <Paragraph>Средний</Paragraph>
      <Paragraph size="sm">Маленький</Paragraph>

      <Tag size="sm">Ghost</Tag>
      <Tag size="md" color="red">
        Red
      </Tag>
      <Tag size="sm" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const url = `${process.env.NEXT_PUBLIC_DOMAIN}/api/top-page/find`;

  const { data: menu } = await axios.post<MenuItem[]>(url, {
    firstCategory,
  });

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
