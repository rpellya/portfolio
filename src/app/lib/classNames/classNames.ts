export type Mods = Record<string, string | boolean | undefined>;

/**
 * Example of usage:
 * classNames('block', { 'block--disabled': true, 'block--visible': false }, ['block--extra-class']);
 * @param cls
 * @param mods
 * @param additional
 * @returns
 */
export function classNames(
    cls: string,
    mods: Mods = {},
    additional: Array<string | undefined> = [],
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([classNames]) => classNames),
    ].join(' ');
}
