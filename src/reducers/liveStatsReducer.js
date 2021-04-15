import { UPDATE_LIVE_DATA } from "../actions";

const initialState = {
    isMatch: false,
    gameInfo: {},
};

export default (state = initialState, { type, payload }) => {
    if (type === UPDATE_LIVE_DATA) {
        return { ...state, gameInfo: payload };
    }

    return state;
};
