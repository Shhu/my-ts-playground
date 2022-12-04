export default function getWeightedRandom<T>(
    arr: T[],
    weights: number[],
): T {
    // Credit : https://github.com/30-seconds/30-seconds-of-code/blob/master/snippets/weightedSample.md
    const roll = Math.random()
    return arr[
        weights
            .reduce(
                (acc: number[], w, i) => (i === 0 ? [w] : [...acc, acc[acc.length - 1] + w]),
                [],
            )
            .findIndex((v, i, s) => roll >= (i === 0 ? 0 : s[i - 1]) && roll < v)
        ]
}
