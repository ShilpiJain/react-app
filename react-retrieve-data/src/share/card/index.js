import React from 'react';
import styles from "./styles.css";

const Card = ({
    imgUrl,
    missionName,
    flightNumber,
    missionId,
    yearLaunch,
    successfulLaunch,
    successfulLanding
}) =>{
    return(
        <div className="cardWrapper">
            <img src={imgUrl} alt="ll"/>
            <div>{missionName} #{flightNumber}</div>
            <div>Mission ID: {missionId}</div>
            <div>Launch Year : {yearLaunch}</div>
            <div>SuccessFull Launch: # {successfulLaunch}</div>
            {
                successfulLanding.map = (item)=> <div>SuccessFull Landing:  # {item.land_success}</div>
            }
        </div>
    );
};
export default Card;