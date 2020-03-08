import {
    SET_CHARACTERS,
    SET_DETAIL,
    SET_LOADING,
    SET_ERROR
} from "../actionTypes"
import Toastify from 'toastify-js'
import axios from 'axios'

export const setCharacters = (characters) => {
    return {
        type: SET_CHARACTERS,
        payload: characters
    }
}

export const setDetail = (detail) => {
    return {
        type: SET_DETAIL,
        payload: detail
    }
}

export const setLoading = (status) => {
    return {
        type: SET_LOADING,
        payload: status
    }
}

export const setError = (status) => {
    return {
        type: SET_ERROR,
        payload: status
    }
}

export const fetchCharacters = () => {
    return dispatch => {
        dispatch(setLoading(true))
        axios
            .get(`https://www.breakingbadapi.com/api/characters`)
            .then(({ data }) => {
                dispatch(setCharacters(data))
                Toastify({
                    text: "Welcome!",
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    className: "info",
                }).showToast();
            })
            .catch(({ response }) => {
                dispatch(setError(response.data))
                Toastify({
                    text: response.data,
                    backgroundColor: "linear-gradient(to right, red, white)",
                    className: "danger",
                }).showToast();
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}

export const fetchDetail = (payload) => {
    return dispatch => {
        dispatch(setLoading(true))
        axios
            .get(`https://www.breakingbadapi.com/api/characters/${payload}`)
            .then(({ data }) => {
                dispatch(setDetail(data))
                Toastify({
                    text: "More detail on this character..",
                    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
                    className: "info",
                }).showToast();
            })
            .catch(({ response }) => {
                dispatch(setError(response.data))
                Toastify({
                    text: response.data,
                    backgroundColor: "linear-gradient(to right, red, white)",
                    className: "danger",
                }).showToast();
            })
            .finally(() => {
                dispatch(setLoading(false))
            })
    }
}