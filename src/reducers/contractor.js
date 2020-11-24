const initialState = {
    info: null
}

const SET_CONTRACTOR_INFO = 'SET_CONTRACTOR_INFO'
const CREATE_CONTRACTOR = 'CREATE_CONTRACTOR'
const UPDATE_CONTRACTOR = 'UPDATE_CONTRACTOR'

export function contractorReducer (state = initialState, action) {
    switch (action.type) {
        case SET_CONTRACTOR_INFO:
            return {...state, info: action.payload}
        case CREATE_CONTRACTOR:
            return {...state, info: null}    
        case UPDATE_CONTRACTOR:
            return {...state, info: action.payload}  
    
        default:
            return state
    }
}
