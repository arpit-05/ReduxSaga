import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <ImageGrid />
            </Fragment>
        );
    }
}

export default App;
