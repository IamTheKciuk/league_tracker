export const UPDATE_LIVE_DATA = "UPDATE_LIVE_DATA";
export const SET_MATCH = "SET_MATCH";
export const SET_ALL_ITEMS_DESC = "SET_ALL_ITEMS_DESC";

export const updateLiveData = (payload) => {
    return { type: UPDATE_LIVE_DATA, payload: payload };
};

export const setMatch = (isMatch) => {
    return { type: SET_MATCH, payload: isMatch };
};

export const setAllItemsDescription = (allItems) => {
    return { type: SET_ALL_ITEMS_DESC, payload: allItems };
};
