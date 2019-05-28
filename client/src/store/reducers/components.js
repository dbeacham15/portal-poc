import { SET_COMPONENTS, SET_COMPONENT_DETAIL } from '../types';

const initialState = {
    components: [],
    componentDetail: {}
};

export default ( state = initialState, action) => {
    switch(action.type) {
        case SET_COMPONENTS :
            return { ...state, components: action.payload }
        case SET_COMPONENT_DETAIL :
            return { ...state, componentDetail: action.payload }
        default:
            return state;
    }
}