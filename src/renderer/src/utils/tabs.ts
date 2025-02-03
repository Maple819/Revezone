import { getTabJsonModelFromLocal } from '@renderer/store/localstorage';

export const getInitialTabList = () => {
    const tabListFromLocal = getTabJsonModelFromLocal();

    return tabListFromLocal || [];
};
