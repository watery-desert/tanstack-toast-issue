
export const getData = async (): Promise<number> => {
    await Promise.resolve((r: () => void) => setTimeout(r, 1000))
    // throw Error("Throw dummy error")
    return 5
}