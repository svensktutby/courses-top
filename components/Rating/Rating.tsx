import {
  useEffect,
  useState,
  KeyboardEvent,
  forwardRef,
  ForwardedRef,
} from 'react';
import cn from 'classnames';
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';

export const Rating = forwardRef(
  (
    { isEditable = false, rating, setRating, error, ...props }: RatingProps,
    ref: ForwardedRef<HTMLDivElement>,
  ): JSX.Element => {
    const [ratingElements, setRatingElements] = useState<JSX.Element[]>(
      new Array(5).fill(<></>),
    );

    const changeRating = (rate: number) => {
      if (!isEditable) return;
      constructRating(rate);
    };

    const onClick = (rate: number) => {
      if (!isEditable || !setRating) return;
      setRating(rate);
    };

    const handleSpace = (rate: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code != 'Space' || !setRating) return;
      setRating(rate);
    };

    const constructRating = (currentRating: number) => {
      const updatedRatingElements = ratingElements.map((r, idx) => {
        return (
          <span
            className={cn(styles.star, {
              [styles.filled]: idx < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={() => changeRating(idx + 1)}
            onMouseLeave={() => changeRating(rating)}
            onClick={() => onClick(idx + 1)}
          >
            <StarIcon
              tabIndex={isEditable ? 0 : -1}
              onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                isEditable && handleSpace(idx + 1, e)
              }
            />
          </span>
        );
      });

      setRatingElements(updatedRatingElements);
    };

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, {
          [styles.error]: error,
        })}
      >
        {ratingElements.map((r, idx) => (
          <span key={idx}>{r}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  },
);
