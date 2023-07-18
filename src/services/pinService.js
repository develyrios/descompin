const generateId = () => {
    return `${(Math.floor(Math.random() * 100_000)).toString(16)}-${(Math.floor(Math.random() * 100_000)).toString(16)}`
}

const saveFolders = async (folders) => {
    localStorage.setItem('folders', JSON.stringify(folders));
}

export const getFolders = async () => {
    return JSON.parse(localStorage.getItem('folders')) || []
}

export const saveFolder = async (folderName) => {
    const folders = await getFolders();

    const newFolder = {
        id: generateId(),
        name: folderName,
        pins: []
    }
    folders.push(newFolder);

    await saveFolders(folders);

    return newFolder;
}

export const savePinInFolder = async (folderId, pinId) => {
    const folders = await getFolders();

    const folderIndex = folders.findIndex((folder) => {
        return folder.id === folderId;
    })

    if (folderIndex !== -1) {
        folders[folderIndex].pins.push(pinId);
    }

    await saveFolders(folders);

    return {...folders[folderIndex]};
}

export const getPins = async () => {
    console.log("get pins sendo chamado");
    return [
        {
            id: "123",
            title: "Pin Teste 1",
            image: "https://picsum.photos/200/300?53",
            total: 0,
        },
        {
            id: "456",
            title: "Pin Teste 2",
            image: "https://picsum.photos/200/300?13",
            total: 0,
        },
        {
            id: "789",
            title: "Pin Teste 3",
            image: "https://picsum.photos/200/300?37",
            total: 0,
        },
    ]
}