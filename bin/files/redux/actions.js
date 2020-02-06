import {

GET_NAME_REQUEST,
GET_NAME_SUCCESS,
GET_NAME_LOADING,
GET_NAME_FAILURE,

} from './constants';

/**
 * GET_NAME [CHANGE NAME]
 */
export const getNameRequest = (param) => ({
	type: GET_NAME_REQUEST,
	param,
});

export const getNameLoading = (param) => ({
	type: GET_NAME_LOADING,
	param,
});

export const getNameSuccess = (response, data) => ({
	type: GET_NAME_SUCCESS,
	data,
});

export const getNameFailure = (error, param) => ({
	type: GET_NAME_FAILURE,
	error,
	param,
});
