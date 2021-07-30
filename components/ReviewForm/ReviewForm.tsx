import { FC } from 'react';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import CloseIcon from './close.svg';
import { Input } from '..';
import { Rating } from '..';
import { Textarea } from '..';
import { Button } from '..';

export const ReviewForm: FC<ReviewFormProps> = ({
  productId,
  className,
  ...props
}): JSX.Element => {
  return (
    <>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок отзыва" className={styles.title} />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Rating rating={0} />
        </div>
        <Textarea placeholder="Текст отзыва" className={styles.description} />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </>
  );
};
