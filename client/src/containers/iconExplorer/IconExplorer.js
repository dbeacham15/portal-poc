import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import IconSidebar from './IconExplorerSidebar';
import Icon from '../../components/Icon';

import * as icons from '../../icons/icons';
import { setIcons, setSelectedIcon } from '../../store/actions/icons';


const IconExplorerBody = styled.div`
    display: flex;
    height: calc(100vh - 100px);
    overflow: hidden;
    position: relative;
`;

const IconExplorerMain = styled.div`
    margin-left: 275px;
    padding-top: 48px;
    overflow: auto;
    padding-left: 48px;
    width: calc(100vw - 300px);
`;

// @todo Create Shared Styled Components to import
const DescriptionBlock = styled.p`
    border-bottom: solid 1px rgba(244,244,244,.3);
    line-height: 24px;
    marginTop: 24px;
    margin-bottom: 48px;
    padding-bottom: 48px;
    width: 70%;
`;

const H2 = styled.h2`
    font-family: 'lineto-brown';
    font-size: 36px;
`;

const IconGroup = styled.div`
    padding: 48px;
    border-bottom: solid 1px rgba(244,244,244,.1);
`;

const IconGroupHeader = styled.h2`
    font-size: 16px;
    text-transform: uppercase;
`;

const IconGroupContent = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const IconLabel = styled.label`
    font-size: 12px;
    display: block;
    margin-top: 16px
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    width: 100%;
`;

const IconContainer = styled.div`
    align-items: center;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    width: 125px;
    height: 125px;
    padding: 16px;
`;

class IconExplorer extends PureComponent {
    componentWillMount() {
        const iconsRaw = Object.keys(icons);
        const iconArray = [];

        if (!iconsRaw.length) {
            return;
        }

        for (let key in icons) {
            let obj = {};
            obj.groupId = key;
            obj.filtered = false;
            obj.displayed = true;
            obj.icons = icons[key];

            iconArray.push(obj);
        }

        this.props.setIcons(iconArray);
    };

    _handleIconClick(evt) {
        try {
            const { dataset: { icon }} = evt.currentTarget;
            this.props.setSelectedIcon(icon);
        } catch (err) {
            console.error('Cant Select Icon', err);
        }
    };

    /**
     * Renders the Individual Icons
     *
     * @param {*} icons
     * @param {*} groupId
     */
    _renderIcons(icons, groupId) {
        return Object.keys(icons).map(iconKey => {
            return (
                <IconContainer
                    key={ iconKey }
                    data-icon={ `${groupId}:${iconKey}` }
                    onClick={ this._handleIconClick.bind(this) }>
                    <Icon
                        icon={ `${groupId}:${iconKey}` }
                        size="60"
                        primaryFill={ this.props.theme.primary }
                        secondaryFill={ this.props.theme.secondary }/>
                    <IconLabel>{ iconKey }</IconLabel>
                </IconContainer>
            )
        })
    }

    /**
     * Renders the Icon Group Blocks
     */
    _renderIconGroups() {
        return this.props.icons.filter(group => group.displayed)
            .map( component => {
                return (
                    <IconGroup key={ component.groupId}>
                        <IconGroupHeader>{ component.groupId }</IconGroupHeader>
                        <IconGroupContent>
                            { this._renderIcons(component.icons, component.groupId)}
                        </IconGroupContent>
                    </IconGroup>
                );
            });
    }

    render() {
        return (
            <IconExplorerBody>
                <div style={{ position: 'absolute', top: 0, bottom: 0, oveflow: 'hidden' }}>
                    <IconSidebar />
                </div>
                <IconExplorerMain>
                    <H2>ICON EXPLORER</H2>
                    <DescriptionBlock>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut mollis pulvinar lorem et hendrerit.
                        Ut tincidunt velit turpis, non tempor nisi scelerisque ac. Nam rhoncus consectetur dui eget malesuada.
                        Mauris sed est nulla. Morbi suscipit magna a libero elementum, eu rutrum diam accumsan
                    </DescriptionBlock>
                    <div style={{ display: 'flex', flexDirection: 'column'}}>
                        { this._renderIconGroups() }
                    </div>
                </IconExplorerMain>
            </IconExplorerBody>
        );
    }
}

const mapStateToProps = state => {
    const { icons, theme } = state.icons;

    return {
        icons,
        theme
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setIcons, setSelectedIcon }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IconExplorer);