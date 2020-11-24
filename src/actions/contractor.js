

export function setInfo(info) {
    return {
        type: 'SET_CONTRACTOR_INFO',
        payload: info
    }
}

export function createContractor() {
    return {
        type: 'CREATE_CONTRACTOR'
    }
}

export function updateContractor(info) {
    return {
        type: 'UPDATE_CONTRACTOR',
        payload: info
    }
}