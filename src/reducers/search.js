const initialState = {
    result: null,
    err: null
}

const SET_PURCHASE_LIST = 'SET_PURCHASE_LIST'
const SET_CONTRACTOR_LIST = 'SET_CONTRACTOR_LIST'
const CLEAR_RESULT = 'CLEAR_RESULT'
const SET_ERROR = 'SET_ERROR'

export function searchReducer (state = initialState, action) {
    switch (action.type) {
        case SET_PURCHASE_LIST:
            return {
                ...state, 
                result: action.payload,
                err: null
            }

        case SET_CONTRACTOR_LIST:
            return {
                ...state, 
                result: action.payload,
                err: null
            }

        case CLEAR_RESULT:
            return {
                ...state, 
                result: null,
                err: null
            }

        case SET_ERROR:
            return {
                ...state, 
                result: null,
                err: action.payload
            }      
            
    
        default:
            return state
    }
}

