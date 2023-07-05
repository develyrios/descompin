import * as types from "./types";
import * as pinService from "../services/pinService";

export const openModalSavePinAction = () => (
    { type: types.OPEN_MODAL_SAVE_PIN_TYPE }
)

export const closeModalsAction = () => (
    { type: types.CLOSE_MODALS_TYPE }
)

export const fetchFoldersInitAction = () => (
    { type: types.FETCH_FOLDERS_INIT_TYPE }
)

export const fetchFoldersSuccessAction = (folders) => (
    { 
        type: types.FETCH_FOLDERS_SUCCESS_TYPE, 
        payload: folders
    }
)

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction());
    const folders = await pinService.getFolders();
    dispatch(fetchFoldersSuccessAction(folders));
}