import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { NavLink, withRouter } from 'react-router-dom';
import { setComponentDetail } from '../../store/actions/components';
import styled from 'styled-components';

const StyledComponentExplorerSidebar = styled.aside`
    border-right: solid 1px rgba(244,244,244,.1);
    height: 100%;
    position: relative;
    width: 300px;
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

const activeClassName = 'active';
const StyledLink = styled(NavLink).attrs({
    activeClassName
})`
    color: #00ff84;
    font-size: 14px;
    padding: 8px 36px;
    text-decoration: none;
    transition: color .25s;

    &:hover {
        color: #ff0052;
    }

    &.${activeClassName} {
        color: #fe6f4e;
    }
`;

const LinkContainer = styled.div`
    align-items: center;
    display: flex;
    margin-bottom: 8px;
`;

class ComponentSidebar extends PureComponent {
    constructor() {
        super();

        this._handleComponentNameClick = this._handleComponentNameClick.bind(this);
    }

    _handleComponentNameClick(evt, component) {
        evt.preventDefault();
        this.props.setComponentDetail(component);
        this.props.history.push(evt.currentTarget.getAttribute('href'));
    }

    _renderComponentNavigation() {
        const linkBase = '/component/';

        if (!this.props.components) {
            return;
        }

        return this.props.components.map(comp => {
            const { slug, componentName } = comp.config;

            return (
                <LinkContainer key={ `component-${componentName}`}>
                    <StyledLink
                        onClick={ (evt) => {
                            this._handleComponentNameClick(evt, comp);
                        }}
                        to={ `${linkBase}${slug}` }>
                        { componentName }
                    </StyledLink>
                </LinkContainer>
            )
        })
    }

    render() {
        return (
            <StyledComponentExplorerSidebar>
                <SideBarContainer>
                    <H4>Components</H4>
                    { this._renderComponentNavigation() }
                </SideBarContainer>
            </StyledComponentExplorerSidebar>
        )
    }
}

// Redux Bindings
const mapStateToProps = state => {
    const { components } = state.components;

    return { components };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setComponentDetail }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ComponentSidebar));