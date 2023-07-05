import * as types from "./types";

export const reducer = (state, action) => {
    switch (action.type) {
        case types.OPEN_MODAL_SAVE_PIN_TYPE:
            return {
                ...state,
                mode: 'savePin',
            }

        case types.CLOSE_MODALS_TYPE:
            return {
                ...state,
                mode: null,
            }
    
        case types.FETCH_FOLDERS_INIT_TYPE:
            return {
                ...state,
            }

        case types.FETCH_FOLDERS_SUCCESS_TYPE:
            return {
                ...state,
                folders: action.payload,
            }

        default:
            return state;
    }
};