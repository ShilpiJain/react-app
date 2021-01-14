import './App.css';
import Filter from './share/filter';
import React, { useEffect, useState } from 'react';
import Card from './share/card';
import axios from 'axios';

const App = () => {
  const DeveloperName = "Shilpi Jain";
  const [responseData, setResponseData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  const fetchData  = React.useCallback(()=>{
    setIsloading(true);
    axios({
      "method": "GET",
      "url": "https://api.spacexdata.com/v3/launches",
      headers: {
        "Content-Type": "application/json"
    }
    })
    .then((response) => {
      setResponseData(response.data);
      setIsloading(false);
    })
    .catch((error) => {
      console.log(error)
      setHasError(true)
      setIsloading(false);
    })
  }, [] )

  useEffect( ()=> {
    fetchData()
  }, [fetchData]);
  
  console.log(responseData);
  return (
      isLoading ? "Loading page" :
      <React.Fragment>
        <h1>SpaceX lunch Program</h1>
        {hasError ? "Error" : ""}
        <Filter/>
        {
          responseData.length && responseData.map((item, i) => 
            // <p key={i}>{item.flight_number}</p>
            <Card imgUrl={item.links.mission_patch_small !== undefined || null ? item.links.mission_patch : `No Image Found`} missionName={item.mission_name} flightNumber={item.flight_number} missionId={item.mission_id} yearLaunch={item.launch_year} successfulLaunch={item.launch_success} successfulLanding={item.rocket.first_stage.cores}/>
          )
        }
        <footer>Developed By : {DeveloperName}</footer>
        </React.Fragment>
  );
}

export default App;
