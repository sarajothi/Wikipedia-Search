import React, { Component } from 'react';
import WikiSearch from './components/WikiSearch';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <WikiSearch />
        );
    }
}

export default App;