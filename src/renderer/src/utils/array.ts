export const insertAtIndex = <T>(arr: T[], index: number, item: T): T[] => {
    return [...arr.slice(0, index), item, ...arr.slice(index)];
};
