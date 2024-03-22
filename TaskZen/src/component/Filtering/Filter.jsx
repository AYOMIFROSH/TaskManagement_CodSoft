import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MySelf from '../../Details/mySelf';
import '../Filtering/Filter.css'
import Sliding from '../Sidebar/slideing';

const Filter = ({ items, setFilteredItemsInParent }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState(items);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const location = useLocation();
  const name = location.state.name;

  useEffect(() => {
    if (items) {
      const results = items.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);
      setFilteredItemsInParent(results);
    }
  }, [searchTerm, items]);

  useEffect(() => {
    const filteredItems = items ? items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) : [];
    setFilteredItems(filteredItems);
    setFilteredItemsInParent(filteredItems);
  }, [searchTerm, items]);

  return (
    <div className=''>
      <div className='wrapperr' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: '5px'}}>
        <h4 style={{ paddingLeft: '10px'}}>
          {/* <cite style={{ color: 'blue' }}>Welcome,</cite> <b>{name}!</b> */}
          <Sliding />
        </h4>
        <h3 style={{paddingLeft: '4rem'}}><b style={{paddingLeft: '4rem', color: 'grey'}}>TaskZen</b></h3>
        <div style={{ display: 'flex', alignItems: 'center', paddingRight: '5px' }}>
          <FontAwesomeIcon icon={faSearch} style={{ Left: '30%' }} />
          <input type="text" placeholder='Search' id='put-style-' onChange={handleChange} style={{ borderRadius: '6px', marginLeft: '10px', width: '100%' }} />
        </div>
      </div>
        <h4 style={{ color: 'red', cursor: 'pointer', fontSize: '1.3rem', paddingLeft: '10px'}}>
          <cite style={{ color: 'blue' }}>Welcome,</cite> <b>{name}!</b>
        </h4>
    </div>
  );
};

export default Filter;
