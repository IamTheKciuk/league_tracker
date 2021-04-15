export const UPDATE_LIVE_DATA = "UPDATE_LIVE_DATA";

export const updateLiveData = (payload) => {
    return { type: UPDATE_LIVE_DATA, payload: payload };
};
