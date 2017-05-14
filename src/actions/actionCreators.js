// dummy actions from another application
export function fetchDataPending(bool){
	return {
		type: 'FETCH_DATA_PENDING',
		isLoading: bool
	}
}

export function fetchDataError(bool, error = {}){
	return {
		type: 'FETCH_DATA_ERROR',
		hasError: bool,
		error
	}
}

export function fetchUserDataSuccess(userdata) {
    return {
        type: 'FETCH_USER_DATA_SUCCESS',
        userdata
    };
}

export function fetchUserDataPending(bool){
	return {
		type: 'FETCH_USER_DATA_PENDING',
		isLoading: bool
	}
}

export function fetchUserDataError(bool, error){
	return {
		type: 'FETCH_USER_DATA_ERROR',
		hasError: bool,
		error
	}
}
