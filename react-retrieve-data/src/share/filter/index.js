import React from 'react';
import styles from "./styles.css";
import FilterCategory from "../filter-category";

const Filter = () =>{
    return(
        <React.Fragment>
            <h2>Filters</h2>
            <FilterCategory/>
        </React.Fragment>
    );
};
export default Filter;