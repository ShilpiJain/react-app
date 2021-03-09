import './App.css';
import Filter from './share/filter';
import React, { useEffect, useState } from 'react';
import Card from './share/card';
import axios from 'axios';

const App = () => {
  let DeveloperName = "Shilpi Jain";
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
      <div className="greyBG">
        <div className="container">
          <h1 className="heading">SpaceX lunch Program</h1>
        </div>
        <div className="container">
          {hasError ? "404" : ""}
          <div className="d-flex">
            <Filter/>
            <div className="filterMainWrapper">
            {
              responseData.length && responseData.map((item, i) => <Card key={i} imgUrl={item.links.mission_patch_small !== undefined || null ? item.links.mission_patch : `No Image Found`} missionName={item.mission_name} flightNumber={item.flight_number} missionId={item.mission_id} yearLaunch={item.launch_year} successfulLaunch={item.launch_success} successfulLanding={item.rocket.first_stage.cores}/>)
            }
            </div>
          </div>
          <footer>Developed By : {DeveloperName}</footer>
        </div>
      </div>
  );
}

export default App;
