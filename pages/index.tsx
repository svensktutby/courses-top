import { Button, Heading } from '../components';

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
    </>
  );
}
