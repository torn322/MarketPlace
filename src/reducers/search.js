const initialState = {
    form: {
        isAdvanced: false
    }
}

const CHANGE_ADVANCED_STATUS = 'CHANGE_ADVANCED_STATUS'

export function searchReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_ADVANCED_STATUS:
            console.log(action.payload)
            return {...state, form: {
                isAdvanced: action.payload
            }}
            
    
        default:
            return state
    }
}

