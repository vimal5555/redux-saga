import { createSelectorHook, ReactReduxContext } from "react-redux";

const loading = false;

const reducer = (state = { loading }, action) => {

    switch (action.type) {
        case 'SET_LOADING':
            return { ...state, loading: true }

        case 'SET_POSTS':
            return { ...state, loading: true ,data : action.data}
        case 'SET_POST':
            return { ...state, loading: false, regUsers: action.data }

     
        default:
            return state;
    }

}

export default reducer;