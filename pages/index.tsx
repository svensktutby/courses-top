import { Button, Heading, Paragraph, Tag } from '../components';

export default function Home(): JSX.Element {
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
    </>
  );
}
