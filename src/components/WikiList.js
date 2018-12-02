import React from 'react';
import Loader from './Loader';

const WikiList = (props) => {
  const { loading, items } = props;

  return !loading ? (
    <div className="wiki-list">
      {
        Object.keys(items).map(key => (
          <div key={key} className="card form-group">
            <div className="card-body" >
              <a className="card-title" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank"> {items[key].title}
              </a> <hr />
              <div>{items[key].extract}</div>
            </div>

          </div>
        ))
      }
    </div>
  ) : <Loader />
};

export default WikiList;
