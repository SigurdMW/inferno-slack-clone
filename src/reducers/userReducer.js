import { users } from '../../data/users';

export function userReducer(state = {}, action){
	switch(action.type){
		case 'GET_USERS':
			console.log("get users is running");
			return {
				...state,
				users
			}
		default:
			return state
	}
}

export default userReducer;
