import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <div>
        <form>
            <input 
            type='text'
            placeholder='Search for Restro....'
            id='search_field'
            className='form-control'
            />
            <div className="input-group-append">
                <button id="search_btn" className="btn">
                    <FaSearch className='fa fa-search'></FaSearch>
                </button>
            </div>
        </form>
    </div>
  );
}
