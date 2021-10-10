export const reducer = (state, action) => {
    switch (action.type) {
        case 'openModal':
            return {
                ...state,
                openModal: action.payLoad
            }
        case 'loggedIn':
            return {
                ...state,
                loggedIn: action.payLoad
            }
        default: return state;
    }
}