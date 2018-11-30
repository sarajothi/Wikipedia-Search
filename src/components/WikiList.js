import React from 'react';
import Loader from './Loader';

const WikiList = (props) => {
  const { loading, items } = props;

  return !loading ? (
    <div className="wiki-list">
      {
        Object.keys(items).map(key => (
          <div key={key} className="panel panel-default">
            <div className="panel-heading" >
              <a rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`}        target="_blank"> {items[key].title}
              </a>
            </div>
            <div className="panel-body">{items[key].extract}</div>
          </div>
        ))
      }
    </div>
  ) : <Loader />
};

export default WikiList;
