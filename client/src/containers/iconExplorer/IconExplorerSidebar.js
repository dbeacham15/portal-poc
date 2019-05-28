import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTheme, setIconFilter } from '../../store/actions/icons';
import styled from 'styled-components';

import Icon from '../../components/Icon';

const StyledIconExploredSidebar = styled.div`
    border-right: solid 1px rgba(244,244,244,.1);
    height: 100%;
    position: relative;
    width: 300px;
`;

const IconExplorerSidebarOptions = styled.div`
    height: 100%;
`;

const Input = styled.input`
    background: none;
    border: none;
    color: #4efdfe;
    font-size: 14px;
    margin-left: 12px;
    &:focus {
        outline: none;
    }
`;

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    border-bottom: solid 1px rgba(244,244,244,.3);
    height: 60px;
    padding-left: 24px;
`;

const SideBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: solid 1px rgba(244,244,244,.3);
    padding: 24px;
`;

const H4 = styled.h4`
    font-size: 12px;
    text-transform: uppercase;
    margin: 0 0 24px;
`;

/** @TODO Lookup using ATTRS for themeing */
const InfraredSample = styled.div`
    background: linear-gradient(to bottom, rgba(254,111,78,1) 0%,rgba(255,0,82,1) 100%);
    border-radius: 50%;
    cursor: pointer;
    height: 20px;
    margin-right: 16px;
    width: 20px;
`;

const GammaSample = styled(InfraredSample)`
    background: linear-gradient(to bottom, rgba(78,253,254,1) 0%,rgba(0,255,132,1) 100%);
`;

const UltravioletSample = styled(InfraredSample)`
    background: linear-gradient(to bottom, rgba(161,115,254,1) 0%,rgba(56,120,254,1) 100%);
`;

const CategoryBlock = styled.div`
    align-items: center;
    display: flex;
    height: 40px;
`;

const CategoryBlockLabel = styled.label`
    cursor: pointer;
    font-size: 12px;
    margin-left: 16px;
    pointer-events: none;
    text-transform: uppercase;
    user-select: none;
`;

const CHECKBOX_STATUS = {
    ACTIVE: 'checkboxActive',
    STANDBY: 'checkboxStandby'
};

class IconExplorerSidebar extends PureComponent {
    constructor() {
        super();

        this._handleThemeClick = this._handleThemeClick.bind(this);
        this._handleCategoryBlockClick = this._handleCategoryBlockClick.bind(this);
        this._resetCategoryFiltersToAll = this._resetCategoryFiltersToAll.bind(this);
    }
    _getAllCheckboxStatus() {
        return this.props.filterCount ? CHECKBOX_STATUS.STANDBY : CHECKBOX_STATUS.ACTIVE;
    }

    /**
     * Handles the Theme Click change
     *
     * @todo Explore more dynamic theming with design token variables
     */
    _handleThemeClick(evt) {
        try {
            const { dataset: { theme } } = evt.target;
            let newTheme = {
                primary: '#FF0052',
                secondary: '#FE6F4E'
            };

            if (theme === 'gamma') {
                newTheme.primary = '#00FF84';
                newTheme.secondary = '#4EFDFE';
            }

            if (theme === 'ultraviolet') {
                newTheme.primary = '#3878FE';
                newTheme.secondary = '#A173FE';
            }

            this.props.setTheme(newTheme);
        } catch (err) {
            console.error('Problem changing themes', err);
        }
    }

    _handleCategoryBlockClick(evt) {
        const groupId = evt.currentTarget.dataset.category;

        this.props.setIconFilter(groupId);

    }

    _getProperCheckbox(group) {
        return group.filtered ? CHECKBOX_STATUS.ACTIVE : CHECKBOX_STATUS.STANDBY;
    }

    _renderCategoryBlocks() {
        return this.props.icons.map(group => {
            const whichCheckbox = this._getProperCheckbox(group);

            return (
                <CategoryBlock
                    key={`group${group.groupId}`}
                    data-category={ group.groupId }
                    onClick={ this._handleCategoryBlockClick }>
                    <Icon
                        icon={`data:${whichCheckbox}` }
                        size="30"
                        primaryFill="#FF0052"
                        secondaryFill="#FE6F4E" />
                    <CategoryBlockLabel>{ group.groupId }</CategoryBlockLabel>
                </CategoryBlock>
            );
        })
    }

    _resetCategoryFiltersToAll() {
        this.props.setIconFilter('all');
    }

    render() {
        return (
            <StyledIconExploredSidebar>
                <IconExplorerSidebarOptions>
                    <SearchContainer>
                        <Icon
                            size="30"
                            icon="navigation:search"
                            primaryFill="#FFFFFF"
                            secondaryFill="#EAEAEA" />
                        <Input type="text" placeholder="Filter" />
                    </SearchContainer>
                    <SideBarContainer>
                        <H4>Theme</H4>
                        <div style={{ display: 'flex' }}>
                            <InfraredSample
                                data-theme="infrared"
                                onClick={ this._handleThemeClick }
                                title="Infrared" />
                            <GammaSample
                                data-theme="gamma"
                                onClick={ this._handleThemeClick }
                                title="Gamma" />
                            <UltravioletSample
                                data-theme="ultraviolet"
                                onClick={ this._handleThemeClick }
                                title="Ultraviolet" />
                            <p
                                style={{ marginLeft: 'auto', marginTop: '0', marginBottom: '0', color: '#00ff84'}}>custom</p>
                        </div>
                    </SideBarContainer>
                    <SideBarContainer>
                        <H4>Categories</H4>
                        <div>
                            <CategoryBlock onClick={ this._resetCategoryFiltersToAll }>
                                <Icon
                                    icon={ `data:${this._getAllCheckboxStatus() }` }
                                    size="30"
                                    primaryFill="#FF0052"
                                    secondaryFill="#FE6F4E" />
                                <CategoryBlockLabel>All</CategoryBlockLabel>
                            </CategoryBlock>
                            { this._renderCategoryBlocks() }
                        </div>
                    </SideBarContainer>
                </IconExplorerSidebarOptions>
            </StyledIconExploredSidebar>
        );
    }
}

const mapStateToProps = state => {
    const { icons, filterCount } = state.icons;

    return { icons, filterCount };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setTheme, setIconFilter }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IconExplorerSidebar);