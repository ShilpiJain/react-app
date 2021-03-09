import React from 'react';
import TabLabel from '../tab-label';
import styles from "./styles.css";

const FilterCategory = ({title}) =>{
    let colorarrary = ["1990, 1999, 2000, 500"]
    return(
        <React.Fragment>
            <div className="filterLabel">{title}</div>
            <TabLabel color={colorarrary}/>
        </React.Fragment>
    );
};
export default FilterCategory;