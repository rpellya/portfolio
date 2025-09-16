import { useCallback, useRef } from 'react';

export function useDebounce<T>(
    callBack: (...args: T[]) => void,
    delay: number,
) {
    const timer = useRef<undefined | number>(undefined);

    return useCallback(
        (...args: T[]) => {
            if (timer.current) {
                clearTimeout(timer.current);
            }

            timer.current = setTimeout(() => {
                callBack(...args);
            }, delay);
        },
        [callBack, delay],
    );
}
