import { SWITCH_WELCOME_STATUS } from '../actionTypes';

const initialState = {
    status: true
}

const WelcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_WELCOME_STATUS:
            return { status: false };
        default:
            return state;
    }
};

export default WelcomeReducer; 