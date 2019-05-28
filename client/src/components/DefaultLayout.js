import React from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

const DefaultLayout = ({ component: Component, ...props}) => {
    return (
        <Route { ...props } render={ matchProps => (
            <section>
                <Header />
                <div className="body">
                    <Component { ...matchProps } />
                </div>
            </section>
        )} />
    );
}

export default DefaultLayout;