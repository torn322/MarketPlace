const initialState = {
    info: null
}

const SET_PURCHASE_INFO = 'SET_PURCHASE_INFO'
const UPDATE_PURCHASE = 'UPDATE_PURCHASE'
const CLEAR_PURCHASE_INFO = 'CLEAR_PURCHASE_INFO'
const DELETE_PURCHASE = 'DELETE_PURCHASE'

export function purchaseReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PURCHASE_INFO:
            return {...state, info: action.payload}
        case UPDATE_PURCHASE:
            return {...state, info: action.payload}    
        case DELETE_PURCHASE:
            return {...state, info: null}
        case CLEAR_PURCHASE_INFO:
            return {...state, info: null}      
    
        default:
            return state
    }
}
