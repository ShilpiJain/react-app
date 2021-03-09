import React from 'react';
import styles from "./styles.css";

const TabLabel = ({color}) =>{

    return(
        <React.Fragment>
            {
                color && color.map ((item, index) => <div className="filterLabel" key={index}>{item}</div>)
                
            }
        </React.Fragment>
    );
};
export default TabLabel;