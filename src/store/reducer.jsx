import * as types from "./types";

export const reducer = (state, action) => {
    switch (action.type) {
        case types.OPEN_MODAL_SAVE_PIN_TYPE:
            return {
                ...state,
                type: action.type,
                mode: 'savePin',
                activePinId: action.payload,
            }

        case types.OPEN_MODAL_CREATE_FOLDER_TYPE:
            return {
                ...state,
                type: action.type,
                mode: 'createFolder',
            }

        case types.CLOSE_MODALS_TYPE:
            return {
                ...state,
                type: action.type,
                mode: null,
            }
    
        case types.FETCH_FOLDERS_INIT_TYPE:
            return {
                ...state,
                type: action.type,
            }

        case types.FETCH_FOLDERS_SUCCESS_TYPE:
            return {
                ...state,
                type: action.type,
                folders: action.payload,
            }

        case types.SAVE_FOLDER_INIT_TYPE:
            return {
                ...state,
                type: action.type,
            }

        case types.SAVE_FOLDER_SUCCESS_TYPE:
            return {
                ...state,
                type: action.type,
                folders: [
                    ...state.folders,
                    action.payload,
                ]
            }

        case types.SAVE_PIN_IN_FOLDER_SUCCESS_TYPE:
            return {
                ...state,
                type: action.type,
                folders: action.payload,
            }

        default:
            return {
                ...state,
                type: action.type,
            };
    }
};