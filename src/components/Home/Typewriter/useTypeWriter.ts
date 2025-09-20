import { useEffect, useRef, useState } from 'react';

// для тестов и логики
export function commonPrefix(a: string, b: string): string {
    const min = Math.min(a.length, b.length);
    let i = 0;
    while (i < min && a[i] === b[i]) i++;
    return a.slice(0, i);
}

interface useTypewriterProps {
    phrases: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseAfterType?: number;
    pauseAfterDelete?: number;
    loop?: boolean;
}

type HookResult = [
    { disaplayTypingText: string },
    { isDeleting: boolean },
    { isTyping: boolean },
];

export function useTypewriter({
    phrases,
    typingSpeed = 70,
    deletingSpeed = 40,
    pauseAfterType = 2000,
    pauseAfterDelete = 300,
    loop = true,
}: useTypewriterProps): HookResult {
    const [index, setIndex] = useState(0);
    const [display, setDisplay] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const mounted = useRef(true);

    const isTyping =
        !isDeleting && display.length < phrases[index % phrases.length].length;

    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);

    useEffect(() => {
        if (!mounted.current) return;

        let timeoutId: number | undefined;

        const current = phrases[index % phrases.length];
        const next = phrases[(index + 1) % phrases.length];

        const tick = () => {
            if (!mounted.current) return;

            if (!isDeleting) {
                if (display.length < current.length) {
                    setDisplay((d) => d + current.charAt(d.length));
                    timeoutId = window.setTimeout(
                        tick,
                        typingSpeed + Math.random() * 60,
                    );
                    return;
                }
                timeoutId = window.setTimeout(
                    () => setIsDeleting(true),
                    pauseAfterType,
                );
                return;
            }

            const prefix = commonPrefix(current, next);
            if (display.length > prefix.length) {
                setDisplay((d) => d.slice(0, -1));
                timeoutId = window.setTimeout(
                    tick,
                    Math.max(20, deletingSpeed - Math.random() * 20),
                );
                return;
            }

            timeoutId = window.setTimeout(() => {
                setIsDeleting(false);
                setIndex((i) =>
                    loop
                        ? (i + 1) % phrases.length
                        : Math.min(i + 1, phrases.length - 1),
                );
            }, pauseAfterDelete);
        };

        timeoutId = window.setTimeout(tick, 120);

        return () => {
            if (timeoutId) window.clearTimeout(timeoutId);
        };
    }, [
        display,
        isDeleting,
        index,
        phrases,
        typingSpeed,
        deletingSpeed,
        pauseAfterType,
        pauseAfterDelete,
        loop,
    ]);

    return [
        { disaplayTypingText: display },
        { isDeleting },
        { isTyping },
    ] as const;
}
