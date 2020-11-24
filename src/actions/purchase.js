export function setInfo(info) {
    return {
        type: 'SET_PURCHASE_INFO',
        payload: info
    }
}

export function clearInfo() {
    return {
        type: 'CLEAR_PURCHASE_INFO',
    }
}

export function updatePurchase(info) {
    return {
        type: 'UPDATE_PURCHASE',
        payload: info
    }
}

export function createPurchase(info) {
    return {
        type: 'CREATE_PURCHASE',
        payload: info
    }
}

export function deletePurchase() {
    return {
        type: 'DELETE_PURCHASE',
    }
}