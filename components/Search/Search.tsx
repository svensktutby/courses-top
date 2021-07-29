import { useState, KeyboardEvent, FC } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';
import { Input } from '..';
import { Button } from '..';

export const Search: FC<SearchProps> = ({
  className,
  ...props
}): JSX.Element => {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <div className={cn(className, styles.search)} {...props}>
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        type="button"
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
      >
        <GlassIcon />
      </Button>
    </div>
  );
};
