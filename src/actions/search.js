


export function setPurchaseList(purchases) {
    return {
        type: 'SET_PURCHASE_LIST',
        payload: purchases
    }
}

export function setContractorList(contractors) {
    return {
        type: 'SET_CONTRACTOR_LIST',
        payload: contractors
    }
}

export function setErr(err) {
    console.error(err)
    return {
        type: 'SET_ERROR',
        payload: err.message
    }
}

export function clearResult() {
    return {
        type: 'CLEAR_RESULT',
    }
}