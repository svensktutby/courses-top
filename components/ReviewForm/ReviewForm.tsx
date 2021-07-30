import { FC } from 'react';
import cn from 'classnames';
import styles from './ReviewForm.module.css';
import { ReviewFormProps } from './ReviewForm.props';
import CloseIcon from './close.svg';
import { Input } from '..';
import { Rating } from '..';
import { Textarea } from '..';
import { Button } from '..';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm } from './ReviewForm.interface';

export const ReviewForm: FC<ReviewFormProps> = ({
  productId,
  className,
  ...props
}): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log('Form fire: ', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register('name')} placeholder="Имя" />
        <Input
          {...register('title')}
          placeholder="Заголовок отзыва"
          className={styles.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                rating={field.value}
                isEditable
                setRating={field.onChange}
                ref={field.ref}
              />
            )}
          />
        </div>
        <Textarea
          {...register('description')}
          placeholder="Текст отзыва"
          className={styles.description}
        />
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
    </form>
  );
};
