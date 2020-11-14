


export function advancedSearchHandler(isAdvanced) {
    const advancedFilters = document.getElementsByClassName('search-form__advanced-filters')[0]
    console.log(advancedFilters)
    
    if (isAdvanced) {
        advancedFilters.classList.remove('search-form__advanced-filters_opened')
        advancedFilters.classList.add('search-form__advanced-filters_closed')
    } else {
        advancedFilters.classList.remove('search-form__advanced-filters_closed')
        advancedFilters.classList.add('search-form__advanced-filters_opened')
    }

    return {
        type: 'CHANGE_ADVANCED_STATUS',
        payload: !isAdvanced
    }
}