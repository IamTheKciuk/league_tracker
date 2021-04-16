import { UPDATE_LIVE_DATA, SET_MATCH } from "../actions";

const initialState = {
    isMatch: false,
    gameInfo: {},
};

export default (state = initialState, { type, payload }) => {
    if (type === UPDATE_LIVE_DATA) {
        return { ...state, gameInfo: payload };
    }

    if (type === SET_MATCH) {
        return { ...state, isMatch: payload };
    }

    return state;
};
