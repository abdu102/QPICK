import { api } from "../api/api"

const initialState = {
    liked: 0,
    saved: 0,
    data: []
}
export const reducer = (state=initialState, action) =>  { 
    switch (action.type) {
        case 'ADD LIKED' : 
        return {...state, liked: state.liked + 1}

        case 'REMOVE LIKED' : 
        return {...state, liked: state.liked - 1}

        case 'ADD SAVED' :
            return {...state, saved: state.saved + 1}

        case 'REMOVE SAVED' :
            return {...state, saved: state.saved - 1}
        case 'RENDER DATA' :
            return {...state, data: action.payload}
        case 'RENDER BY CATEGORY' :
            return {...state, data: action.payload}
    }
}