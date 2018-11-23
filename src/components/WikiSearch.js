import React, { Component } from 'react';
import axios from 'axios';
import WikiList from './WikiList';
import Alert from './Alert';
import './WikiSearch.css';

class WikiSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wikiData: [],
            loading: false,
            error: {
                message: ''
            }
        };

        this.fetchWikiData = this.fetchWikiData.bind(this);
    }

    fetchWikiData(e) {
        e.preventDefault();

        const searchQuery = document.getElementById('search-box').value;
        const url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchQuery}`;

        if (searchQuery) {
            this.setState({ loading: true });
            axios.get(url)
                .then((response) => this.setState({ wikiData: response.data.query.pages, loading: false }))
                .catch((error) => { this.setState({ loading: false, error: { message: error } }); })
        } else {
            this.setState({ loading: false, error: { message: 'Search Text is required' } });
        }
    }

    render() {
        const { loading, wikiData, error } = this.state;
        return (
            <div className="container">
                <div className="wiki-search-box">
                    {
                        error && error.message &&
                        <Alert type="danger" dismissible >
                            <strong>{error.message}</strong>
                        </Alert>
                    }
                    <div className="form-group">
                        <div className="col-xs-12 text-center">
                            <h3 className="wiki-title">
                                Wiki Search Engine
                            </h3>
                        </div>
                    </div>

                    <form onSubmit={this.fetchWikiData}>
                        <div className="row">
                            <div className="col-xs-12 form-group">
                                <label htmlFor="search-box" className="sr-only" >Search Text</label>
                                <input id="search-box" placeholder="Search Text..."
                                    className="form-control input-lg" required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <div className="row">
                                    <div className="col-xs-12 col-md-6 form-group">
                                        <button type="submit"
                                            className="btn btn-lg btn-default"
                                            onClick={this.fetchWikiData}>
                                            Wiki Search
                                        </button>
                                    </div>
                                    <div className="col-xs-12 col-md-6 form-group">
                                        <a className="btn btn-lg btn-default"
                                            rel="noopener noreferrer"
                                            href="https://en.wikipedia.org/wiki/Special:Random"
                                            target="_blank" >
                                            Get Random Wiki
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                    <WikiList loading={loading} items={wikiData} />
                </div>
            </div>
        );
    }
}

export default WikiSearch;