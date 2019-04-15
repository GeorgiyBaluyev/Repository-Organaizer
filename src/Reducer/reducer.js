const initialState = localStorage.length ? JSON.parse(localStorage.getItem('Store')) : {
    allRepos: [],
    favorites: []
};


function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_REPO':
            return Object.assign({}, state, {allRepos: [...state.allRepos, action.payload]});
        case 'DELETE_REPO':
            return Object.assign({}, state, {
                allRepos: state.allRepos.filter(repo => {
                    return repo.id !== action.payload;
                }), favorites: state.favorites.filter(repo => {
                    return repo.id !== action.payload;
                })
            });
        case 'UPDATE_REPO':
            return Object.assign({}, state, {
                allRepos: state.allRepos.map(repo => {
                    if (repo.id === action.payload.id) {
                        repo = action.payload.repo
                    }
                    return repo;
                }), favorites: state.favorites.map(repo => {
                    if (repo.id === action.payload.id) {
                        repo = action.payload.repo
                    }
                    return repo;
                })
            });
        case 'SET_LOCAL':
            localStorage.setItem('Store', JSON.stringify(action.payload));
            return state;
        case 'ADD_NOTE':
            for (let i = 0; i < state.allRepos.length; i++) {
                if (state.allRepos[i].id === action.payload.id) {
                    state.allRepos[i].notes.push(action.payload.note);
                }
            }
            return state;
        case 'DELETE_NOTE':
            for (let i = 0; i < state.allRepos.length; i++) {
                if (state.allRepos[i].id === action.payload.idRepo) {
                    for (let j = 0; j < state.allRepos[i].notes.length; j++) {
                        if (state.allRepos[i].notes[j].id === action.payload.idNote) {
                            state.allRepos[i].notes.splice(j, 1);
                        }
                    }
                }
            }
            return state;
        case 'ADD_TO_FAVORITES':
            return Object.assign({}, state, {
                favorites: [...state.favorites, action.payload.repo], allRepos: state.allRepos.map(repo => {
                    if (repo.id === action.payload.id) {
                        repo.favorite = action.payload.boolean;
                    }
                    return repo
                })
            });
        case 'REMOVE_FROM_FAVORITES':
            return Object.assign({}, state, {
                favorites: state.favorites.filter(repo => {
                    return repo.id !== action.payload;
                }), allRepos: state.allRepos.map(repo => {
                    if (repo.id === action.payload) {
                        repo.favorite = !repo.favorite
                    }
                    return repo
                })
            });
        case 'FETCH_REPOS':
            for (let i = 0; i < state.allRepos.length; i++) {
                if (state.allRepos[i][0] === action.payload[0][0]) {
                    return state;
                }
            }
            for (let i = 0; i < action.payload.length; i++) {
                state = Object.assign({}, state, {allRepos: [...state.allRepos, action.payload[i]]})
            }
            return state;
        default:
            return state;
    }
}

export default reducer;