import { SET_ICONS, SET_THEME, SET_SELECTED_ICON, SET_FILTER_COUNT } from '../types';

export const setIcons = icons => {
    return dispatch => {
        dispatch({
            type: SET_ICONS,
            payload: icons
        });
    }
}

export const setTheme = theme => {
    return dispatch => {
        dispatch({
            type: SET_THEME,
            payload: theme
        });
    }
}

export const setSelectedIcon = icon => {
    return dispatch => {
        dispatch({
            type: SET_SELECTED_ICON,
            payload: icon
        })
    }
}

export const setFilterCount = count => {
    return dispatch => {
        dispatch({
            type: SET_FILTER_COUNT,
            payload: count
        });
    }
}

/**
 * This is not the most elegant or correct way to filter.  Would need to be redone
 *
 * @param {*} filter
 */
export const setIconFilter = filter => {
    return (dispatch, getState) => {
        const { icons } = getState().icons;
        let numFiltered = 0;
        let newIcons = [];

        if (filter === 'all') {
            newIcons = icons.map(iconGroup => {
                iconGroup.filtered = false;
                iconGroup.displayed = true;

                return iconGroup;
            });
        } else {
            newIcons = icons.map(iconGroup => {
                if (filter === iconGroup.groupId) {
                    iconGroup.filtered = !iconGroup.filtered;
                }

                if (iconGroup.filtered) {
                    numFiltered++;
                }

                iconGroup.displayed = iconGroup.filtered;

                return iconGroup;
            });
        }

        dispatch(setIcons(newIcons));
        dispatch(setFilterCount(numFiltered));
    }
}
