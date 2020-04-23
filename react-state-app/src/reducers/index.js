const initialState = {
    dog: 0,
    cat: 0,
    parrot: 0
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'VOTE_DOG':
            return Object.assign({}, state, {
                dog: state.dog + 1
            })
        case 'VOTE_CAT':
            return Object.assign({}, state, {
                cat: state.cat + 1
            })
        case 'VOTE_PARROT':
            return Object.assign({}, state, {
                parrot: state.parrot + 1
            })
        default:
            return state
    }
}