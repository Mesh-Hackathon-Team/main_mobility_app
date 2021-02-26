import { SWITCH_WELCOME_STATUS } from '../actionTypes';

export const switchWelcomeStatus = status => {
    return (dispatch) => {
        dispatch({
            type: SWITCH_WELCOME_STATUS,
            status: status,
        });
    }
} 