
export const getData = async (): Promise<void> => {
    await Promise.resolve((r: () => void) => setTimeout(r, 1000))
    throw Error("Throw dummy error")

}