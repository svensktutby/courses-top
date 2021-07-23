import { Button, Heading, Paragraph } from '../components';

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
    </>
  );
}
