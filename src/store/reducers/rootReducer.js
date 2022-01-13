const initSatte = {
    users: [
        { id: '1', name: 'Ronaldo' },
        { id: '2', name: 'Messi' },
        { id: '3', name: `Neymar'Jr` }
    ],
    posts: []
}
const rootReducer = (state = initSatte, action) => {
    switch (action.type) {
        case 'DELETE_USER': {
            console.log("run delete user", action);
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id);

            return {
                ...state, users
            }

        }
        case 'CREATE_USER': {
            let ii = Math.floor(Math.random() * 1000);
            let user = { id: ii, name: `Random name ${ii}` };
            return {
                ...state, users: [...state.users, user]
            }
        }
        default:
            {
                return state;
            }
    }

}
export default rootReducer;