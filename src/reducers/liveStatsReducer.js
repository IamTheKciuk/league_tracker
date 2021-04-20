import { UPDATE_LIVE_DATA, SET_MATCH, SET_ALL_ITEMS_DESC } from "../actions";

const initialState = {
    isMatch: false,
    gameInfo: null,
    allItems: {},
};

export default (state = initialState, { type, payload }) => {
    if (type === UPDATE_LIVE_DATA) {
        return { ...state, gameInfo: payload };
    }

    if (type === SET_MATCH) {
        return { ...state, isMatch: payload };
    }

    if (type === SET_ALL_ITEMS_DESC) {
        return { ...state, allItems: payload };
    }

    return state;
};
