export const UPDATE_LIVE_DATA = "UPDATE_LIVE_DATA";
export const SET_MATCH = "SET_MATCH";

export const updateLiveData = (payload) => {
    return { type: UPDATE_LIVE_DATA, payload: payload };
};

export const setMatch = (isMatch) => {
    return { type: SET_MATCH, payload: isMatch };
};
