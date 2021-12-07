const initialState = 0;
const counterReducer = (state = initialState, action) => {
    if (typeof state === 'undefined') {
        return 0
    }
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'INCREMENT BY 10':
            return state + 10;
        case 'DECREMENT BY 10':
            return state - 10;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

export default counterReducer;