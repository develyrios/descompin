import * as types from "./types";
import * as pinService from "../services/pinService";

const sleep = (time) => (
    new Promise(resolve => {
        setTimeout(resolve, time)
    })
)

// MODAL ACTIONS
export const openModalSavePinAction = (pinId) => (
    { 
        type: types.OPEN_MODAL_SAVE_PIN_TYPE, 
        payload: pinId,
    }
)

export const openModalCreateFolder = () => (
    { type: types.OPEN_MODAL_CREATE_FOLDER_TYPE }
)

export const closeModalsAction = () => (
    { type: types.CLOSE_MODALS_TYPE }
)

// FETCH FOLDERS ACTIONS
export const fetchFoldersInitAction = () => (
    { type: types.FETCH_FOLDERS_INIT_TYPE }
)

export const fetchFoldersSuccessAction = (folders) => (
    { 
        type: types.FETCH_FOLDERS_SUCCESS_TYPE, 
        payload: folders,
    }
)

export const fetchFoldersAction = async (dispatch) => {
    dispatch(fetchFoldersInitAction());
    const folders = await pinService.getFolders();
    dispatch(fetchFoldersSuccessAction(folders));
}

// SAVE FOLDER ACTIONS
export const saveFolderInitAction = () => (
    { type: types.SAVE_FOLDER_INIT_TYPE }
)

export const saveFolderSuccessAction = (folder) => (
    { 
        type: types.SAVE_FOLDER_SUCCESS_TYPE, 
        payload: folder,
    }
)

export const saveFolderAction = async (dispatch, folderName) => {
    dispatch(saveFolderInitAction());
    await sleep(1000);
    const newFolder = await pinService.saveFolder(folderName);
    dispatch(saveFolderSuccessAction(newFolder));
}

// SAVE PIN IN FOLDER ACTIONS
export const savePinInFolderInitAction = () => (
    { type: types.SAVE_PIN_IN_FOLDER_INIT_TYPE }
)

export const savePinInFolderSuccessAction = (folders) => (
    { 
        type: types.SAVE_PIN_IN_FOLDER_SUCCESS_TYPE, 
        payload: folders,
    }
)

export const savePinInFolderAction = async (dispatch, pinId, folderId) => {
    dispatch(savePinInFolderInitAction());
    await sleep(1000);
    await pinService.savePinInFolder(folderId, pinId);
    const folders = await pinService.getFolders();
    dispatch(savePinInFolderSuccessAction(folders));
}

// FETCH PINS ACTIONS
export const fetchPinsInitAction = () => (
    { types: types.FETCH_PINS_INIT_TYPE }
)

export const fetchPinsSuccessAction = (pinsData) => (
    { 
        types: types.FETCH_PINS_SUCCESS_TYPE, 
        payload: pinsData,
    }
)

export const fetchPinsAction = async (dispatch) => {
    dispatch(fetchPinsInitAction());
    const pinsData = await pinService.getPins();
    dispatch(fetchPinsSuccessAction(pinsData));
    console.log("fetch pins action sendo chamado");
}