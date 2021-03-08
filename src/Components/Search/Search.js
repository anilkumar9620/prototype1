import React from 'react';
import classes from './Search.css';
const Search = (props) => {
    return (
        <div className={classes.Search}>
            <input className={classes.Input}
                placeholder="Enter Input" type="text" value={props.value}
                onChange={props.valueChanged} />
        </div>
    )
};

export default Search;