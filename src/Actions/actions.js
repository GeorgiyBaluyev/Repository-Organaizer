export const addRepo = (repo) => {
    return {
        type: 'ADD_REPO',
        payload: {
            name: repo.name,
            creatorName: repo.creatorName,
            stars: repo.stars,
            description: repo.description,
            id: repo.id,
            notes: repo.notes
        }
    }
};

export const deleteRepo = (id) => {
    return {
        type: 'DELETE_REPO',
        payload: id
    }
};

export const updateRepo = (id, repo) => {
    return {
        type: 'UPDATE_REPO',
        payload: {
            id, repo
        }
    }
};

export const setLocal = (store)=>{
    return{
        type: 'SET_LOCAL',
        payload: store
    }
};