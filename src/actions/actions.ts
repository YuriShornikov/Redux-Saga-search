export const SEARCH_REQUEST = "SEARCH_REQUEST";
export const SEARCH_SUCCESS = "SEARCH_SUCCESS";
export const SEARCH_FAILURE = "SEARCH_FAILURE";
export const SEARCH_RESET = "SEARCH_RESET";

export const searchRequest = (query: string) => ({
	type: SEARCH_REQUEST,
	payload: query,
});

export const searchSuccess = (data: any) => ({
	type: SEARCH_SUCCESS,
	payload: data,
});

export const searchFailure = (error: string) => ({
	type: SEARCH_FAILURE,
	payload: error,
});

export const searchReset = () => ({
  	type: SEARCH_RESET,
});
