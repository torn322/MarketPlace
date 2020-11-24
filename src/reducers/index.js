import { combineReducers } from 'redux'
import { searchReducer } from './search'
import { purchaseReducer } from './purchase'
import { contractorReducer } from './contractor'

export const rootReducer = combineReducers({
    search: searchReducer, 
    purchase: purchaseReducer,
    contractor: contractorReducer,
})