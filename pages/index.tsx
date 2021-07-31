import { useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { API } from '../helpers/api';
import {
  Button,
  Heading,
  Input,
  Paragraph,
  Rating,
  Tag,
  Textarea,
} from '../components';
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

      <Input placeholder="тест" />

      <Textarea placeholder="тест area" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

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

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
