import { RefObject, useEffect, useState } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

type UseCounterParams<TElement = HTMLElement> = {
  containerRef: RefObject<TElement>;
  startValue?: number;
  endValue?: number;
  step?: number;
  durationInMilliseconds?: number;
};

export const useCounter = ({
  containerRef,
  startValue = 0,
  endValue = 100,
  step = 1,
  durationInMilliseconds = 1000,
}: UseCounterParams) => {
  const [value, setValue] = useState(startValue ?? 0);
  const [isFinished, setIsFinished] = useState(false);

  const entry = useIntersectionObserver(containerRef, {});
  const isVisible = !!entry?.isIntersecting;

  const intervalInMilliseconds =
    (durationInMilliseconds / (endValue - startValue) || 1) * step;

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isVisible && !isFinished) {
      interval = setInterval(() => {
        if (!isFinished) {
          setValue((value) => value + step);
        }
      }, intervalInMilliseconds);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, isFinished]);

  useEffect(() => {
    if (value === endValue) {
      setIsFinished(true);
    }
  }, [value, endValue]);

  return value;
};
