import React from 'react';
import Loader from './Loader';

const WikiList = (props) => {
  const { loading, items } = props;

  return !loading ? (
    <div className="wiki-list">
      {
        Object.keys(items).map(key => (
          <div className="rounded overflow-hidden shadow-lg mb-10">
            {
              items[key].thumbnail && <img className="w-full" src={items[key].thumbnail.source} alt={items[key].title} />
            }
            
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                <a className="card-title" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank"> {items[key].title}
                </a>
              </div>
              <p className="text-gray-700 text-base">{items[key].extract}</p>
              <a className="card-title font-bold" rel="noopener noreferrer" href={`https://en.wikipedia.org/?curid=${key}`} target="_blank"> 
              Read More...
              </a>
            </div>
          </div>
        ))
      }
    </div>
  ) : <Loader />
};

export default WikiList;
