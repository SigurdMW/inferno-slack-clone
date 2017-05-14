export function userReducer(state = {}, action){
	switch(action.type){
		case 'GET_STARRED_REPOS_SUCCESS':
			return {
				...state,
				[action.username]: action.repos
			}
		case 'FETCH_USER_REPOS_SUCCESS':
			return {
				...state,
				[action.username]: action.someField
			}
		default:
			return state
	}
}

export default userReducer;
