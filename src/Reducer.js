const Reducer = (state = [], action) => {
    const {type, payload} = action;
    switch(type) {
        case 'ADD_CURRENT_USER':
            const newState = {
                ...state,
                currentUser: payload.username
            };
            return newState;
        default:
            return state;
    };
};

export default Reducer;