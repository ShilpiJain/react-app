import React from 'react';
import TabLabel from '../tab-label';
import styles from "./styles.css";

const FilterCategory = () =>{
    return(
        <React.Fragment>
            <div className="filterLabel">Filters Label Name </div>
            <TabLabel/>
        </React.Fragment>
    );
};
export default FilterCategory;