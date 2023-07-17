import * as types from "./types";
import * as pinService from "../services/pinService";

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
)

export const openModalSavePinAction = () => (
    { type: types.OPEN_MODAL_SAVE_PIN_TYPE }
)

export const openModalCreateFolder = () => (
    { type: types.OPEN_MODAL_CREATE_FOLDER_TYPE }
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


export const saveFolderInitAction = () => (
    { type: types.SAVE_FOLDER_INIT_TYPE }
)

export const saveFolderSuccessAction = (folder) => (
    { 
        type: types.SAVE_FOLDER_SUCCESS_TYPE, 
        payload: folder
    }
)

export const saveFolderAction = async (dispatch, folderName) => {
    dispatch(saveFolderInitAction());
    await sleep(1000);
    const newFolder = await pinService.saveFolder(folderName);
    dispatch(saveFolderSuccessAction(newFolder));
}