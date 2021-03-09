import React from 'react';
import styles from "./styles.css";
import FilterCategory from "../filter-category";

const Filter = () =>{
    return(
        <React.Fragment>
            <div className="filterWrapper">
                <h2>Filters</h2>
                <FilterCategory title="color"/>
            </div>
        </React.Fragment>
    );
};
export default Filter;