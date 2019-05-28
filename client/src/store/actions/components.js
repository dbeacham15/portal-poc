import { SET_COMPONENTS, SET_COMPONENT_DETAIL } from '../types';

export const setComponents = components => {
    return dispatch => {
        dispatch({
            type: SET_COMPONENTS,
            payload: components
        });
    };
}

export const setComponentDetail = detail => {
    return dispatch => {
        dispatch({
            type: SET_COMPONENT_DETAIL,
            payload: detail
        });
    }
}