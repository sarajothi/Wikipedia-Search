import React, { Component } from 'react';
import WikiList from './WikiList';
import axios from 'axios';

class WikiSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wikiData: []
        };
    }

    fetchWikiData = (e) => {
        e.preventDefault();

        let searchQuery = document.getElementById('search-box').value;
        let url = `https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=extracts&origin=*&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=${searchQuery}`;

        if (searchQuery) {
            axios.get(url)
                .then((response) => this.setState({ wikiData: response.data.query.pages }))
                .catch((error) => console.log(error))
        }
    }

    render() {
        return (
            <div className="container">
                <div className="wiki-search-box">
                    <div className="form-group">
                        <div className="col-xs-12 text-center">
                            <h3 className="wiki-title">
                                Wiki Search Engine
                        </h3>
                        </div>
                    </div>

                    <form>
                        <div className="row">
                            <div className="col-xs-12 form-group">
                                <label for="search-box" class="sr-only" >Search Text</label>
                                <input id="search-box" placeholder="Search Text..."
                                    className="form-control input-lg" autoFocus required />
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

                    <WikiList items={this.state.wikiData} />
                </div>
            </div>
        );
    }
}

export default WikiSearch;