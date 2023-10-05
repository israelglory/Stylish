const searchReducer = (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_DATA':
            return state=action.payload;
        default:
            return state;
    }
}

export default searchReducer;