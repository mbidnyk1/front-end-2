import { LOGIN_POST_START, LOGIN_POST_SUCCESS, LOGIN_POST_FAILURE } from '../actions/login.action';

const initialState = {
    username: '',
    password: '',
    isLoading: false,
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_POST_START:
            return {
                ...state,
                isLoading: true
            }
        case LOGIN_POST_SUCCESS:
            return {
                ...state,
                username: action.payload,
                isLoading: false
            }
        case LOGIN_POST_FAILURE:
            return {
                ...state,
                error:action.payload,
                isLoading:false
            }
        default:
            return state
    }
}

export default loginReducer