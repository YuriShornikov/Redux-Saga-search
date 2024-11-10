import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE, SEARCH_RESET } from '../actions/actions';

interface SearchState {
    data: any[];
    error: string | null;
    loading: boolean;
}

const initialState: SearchState = {
    data: [],
    error: null,
    loading: false,
};

export const searchReducer = (state = initialState, action: any): SearchState => {
    switch (action.type) {
        case SEARCH_REQUEST:
            return { ...state, loading: true, error: null };
        case SEARCH_SUCCESS:
            return { ...state, loading: false, data: action.payload };
        case SEARCH_FAILURE:
            return { ...state, loading: false, error: action.payload };
        case SEARCH_RESET:
            return { ...state, data: [], error: null };
        default:
            return state;
    }
};
