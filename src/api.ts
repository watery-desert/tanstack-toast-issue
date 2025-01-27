
export const getData = async (data: boolean): Promise<number> => {
    await Promise.resolve((r: () => void) => setTimeout(r, 1000))

    if (data) {
        return 5
    }

    throw Error("Throw dummy error")
}