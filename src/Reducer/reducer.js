const initialState = localStorage.length ? JSON.parse(localStorage.getItem('Store')) : {allRepos: [], githubRepos: [], favorites: []};


function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_REPO':
            return Object.assign({}, state, {allRepos: [...state.allRepos, action.payload]});
        case 'DELETE_REPO':
            return Object.assign({}, state, {
                allRepos: state.allRepos.filter(repo => {
                    return repo.id !== action.payload;
                })
            });
        case 'UPDATE_REPO':
            return Object.assign({},state, {allRepos: state.allRepos.map(repo =>{
                if(repo.id === action.payload.id){
                    repo = action.payload.repo
                }
                return repo;
                })});
        case 'SET_LOCAL':
             localStorage.setItem('Store',JSON.stringify(action.payload));
             return state;
        default:
            return state;
    }
}

export default reducer;