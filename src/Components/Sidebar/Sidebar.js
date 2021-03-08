import React from 'react';
import classes from './Sidebar.css';
const Sidebar = (props) => {

    return (
        <div className={classes.Sidebar}>
            <div className={classes.collapsable_bar}>
                <p>Sidebar</p>
                <p>(Collapsable)</p>
            </div>
        </div>
    )
}

export default Sidebar;