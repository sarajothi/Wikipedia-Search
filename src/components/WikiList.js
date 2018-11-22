import React from 'react';
import Loader from './Loader';

const WikiList = (props) => {
    return !props.loading ? (
        <div className="wiki-list">
            {
                Object.keys(props.items).map(key => {
                    return (
                        <div key={key} className="panel panel-default">
                            <div className="panel-heading" >
                                <a rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank"> {props.items[key].title}
                                </a>
                            </div>
                            <div className="panel-body">{props.items[key].extract}</div>
                        </div>
                    );
                })
            }
        </div>
    ) : <Loader />
};

export default WikiList;
