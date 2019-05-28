import React, { Fragment, PureComponent } from 'react';
import MarkIt from 'markdown-it';

import { connect } from 'react-redux';
import PropertyTable from './PropertyTable';
import { H1 } from '../../assets/styled/typography';

class ComponentDetails extends PureComponent {
    constructor() {
        super();

        this.state = {
            markdown: false
        };
    }

    _renderMarkdown() {
        const { componentDetail: { readme } } = this.props;
        if (!readme) {
            return null;
        }

        const md  = new MarkIt({
            html: true,
            linkify: true,
            typographer: true
        });
        const markdown = md.render(readme);

        return (
            <div dangerouslySetInnerHTML={{
                __html: markdown
            }}></div>
        )
    }

    renderExample() {

    }

    render() {
        const { componentDetail: { config, readme } } = this.props;

        if (!config) {
            return null;
        }

        return(
            <Fragment>
                <H1>{ config.componentName }</H1>
                {config.description && (
                    <div>
                        { config.description}
                    </div>
                )}
                <div style={{marginTop: '60px'}}>
                    <PropertyTable 
                        properties={config.properties}

                    />
                </div>
            </Fragment>
        );
    }
}

// Redux Bindings
const mapStateToProps = state => {
    const { componentDetail } = state.components;

    return { componentDetail };
}

export default connect(mapStateToProps)(ComponentDetails);