import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setComponents, setComponentDetail } from '../../store/actions/components';
import ComponentSidebar from './ComponentSidebar';
import styled from 'styled-components';
import ComponentDetails from './ComponentDetails';

const ComponentExplorerBody = styled.div`
    display: flex;
    height: calc(100vh - 100px);
    overflow: hidden;
    position: relative;
`;

const ComponentExplorerMain = styled.div`
    margin-left: 275px;
    padding-top: 48px;
    overflow: auto;
    padding-left: 48px;
    width: calc(100vw - 300px);
`;

class ComponentExplorer extends PureComponent {
    componentWillMount() {
        const { match: { params } } = this.props;

        fetch('/api/components')
            .then(response => response.json())
            .then(responseJson => {
                if (params.id) {
                    this.setComponentDetail(responseJson.components, params.id);
                }
                this.props.setComponents(responseJson.components);
            })
            .catch((error) => {
                console.error('Could not get components', error);
            });
    }

    setComponentDetail(components, id) { 
        const selectedComponent = components.find(component => component.config.slug === id);
        if (selectedComponent) {
            this.props.setComponentDetail(selectedComponent);
        }
    }

    render() {
        const { componentDetail } = this.props;

        return (
            <ComponentExplorerBody>
                <div style={{ position: 'absolute', top: 0, bottom: 0, oveflow: 'hidden' }}>
                    <ComponentSidebar />
                </div>
                <ComponentExplorerMain>
                {componentDetail && (
                    <ComponentDetails />
                )}
                </ComponentExplorerMain>
            </ComponentExplorerBody>
        );
    }
}

// Redux Bindings
const mapStateToProps = state => {
    const { components, componentDetail } = state.components;

    return { components, componentDetail };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setComponents, setComponentDetail }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ComponentExplorer);