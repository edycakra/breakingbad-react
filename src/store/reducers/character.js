import {
    SET_CHARACTERS,
    SET_DETAIL,
    SET_LOADING,
    SET_ERROR
} from "../actionTypes"

let initialState = {
    characters: [],
    detail: [],
    loading: false,
    error: null
}

export const characters = (state = initialState, action) => {
    switch (action.type) {
        case SET_CHARACTERS:
            return { ...state, characters: action.payload }
        case SET_DETAIL:
            return { ...state, detail: action.payload }
        case SET_LOADING:
            return { ...state, loading: action.payload }
        case SET_ERROR:
            return { ...state, error: action.payload }
        default:
            return state
    }
}