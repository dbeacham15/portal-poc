import { SET_ICONS, SET_FILTER_COUNT, SET_THEME, SET_SELECTED_ICON } from '../types';

const initialState = {
    icons: [],
    filterCount: 0,
    theme: {
        primary: '#FF0052',
        secondary: '#FE6F4E'
    },
    selectedIcon: ''
};

export default ( state = initialState, action) => {
    switch(action.type) {
        case SET_ICONS :
            return { ...state, icons: action.payload }
        case SET_FILTER_COUNT :
            return { ...state, filterCount: action.payload }
        case SET_THEME :
            return { ...state, theme: action.payload }
        case SET_SELECTED_ICON:
            return { ...state, selectedIcon: action.payload }
        default:
            return state;
    }
}