import axios from 'axios';

export const addRepo = (repo) => {
    return dispatch => dispatch({
        type: 'ADD_REPO',
        payload: {
            name: repo.name,
            creatorName: repo.creatorName,
            stars: repo.stars,
            description: repo.description,
            id: repo.id,
            notes: repo.notes,
            source: repo.source,
            favorite: repo.favorite
        }
    })
};

export const deleteRepo = (id) => {
    return dispatch => dispatch({
        type: 'DELETE_REPO',
        payload: id
    })
};

export const updateRepo = (id, repo) => {
    return dispatch => dispatch({
        type: 'UPDATE_REPO',
        payload: {
            id, repo
        }
    })
};

export const setLocal = (store) => {
    return dispatch => dispatch({
        type: 'SET_LOCAL',
        payload: store
    })
};
export const addNote = (id, note) => {
    return dispatch => dispatch({
        type: 'ADD_NOTE',
        payload: {
            id, note: {
                text: note.text,
                date: note.date,
                id: note.id
            }
        }
    })


};
export const deleteNote = (idRepo, idNote) => {
    return dispatch => dispatch({
        type: 'DELETE_NOTE',
        payload: {idRepo, idNote}
    })

};

export const addToFavorites = (repo, id, boolean) => {
    return dispatch => dispatch({
        type: 'ADD_TO_FAVORITES',
        payload: {
            repo : {name: repo.name,
                creatorName: repo.creatorName,
                stars: repo.stars,
                description: repo.description,
                id: repo.id,
                notes: repo.notes,
                source: repo.source,
            favorite: repo.favorite},
            id, boolean
        }
    })
};

export const removeFromFavorites = id => {
    return dispatch => dispatch({
        type: 'REMOVE_FROM_FAVORITES',
        payload: id

    })
};

export const fetchRepos = () => {
    const request = axios.get(`https://api.github.com/users/GeorgiyBaluyev/repos`);

    return dispatch => {
        request.then(({data}) => {
            const array = data.map(repo => {
                repo = {
                    name: repo.name,
                    id: repo.id,
                    creatorName: repo[`full_name`].split('/')[0],
                    stars: repo['stargazers_count'],
                    notes: [],
                    source: 'gitHub',
                    favorite: false,
                    description: repo.description
                };
                return repo
            });
            dispatch({
                type: 'FETCH_REPOS',
                payload: array
            })
        })

    }

};

