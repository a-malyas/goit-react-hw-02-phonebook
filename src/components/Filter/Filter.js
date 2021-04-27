import React from 'react';
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
 <div>
    <label>Find contacts by name</label>
    <input type="text" value={value} onChange={onChange}></input>
   </div> 
);

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Filter;