import { SWITCH_WELCOME_STATUS } from '../actionTypes';

const initialState = {
    status: 'opened'
}

const WelcomeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_WELCOME_STATUS:
            return { status: 'closed' };
        default:
            return state;
    }
};

export default WelcomeReducer; 