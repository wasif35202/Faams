import React from 'react';
import { useLocation } from 'react-router-dom';

function CurrentRoute() {
  const location = useLocation();
  
 

  return (
    <div>
      <h2>Current Route</h2>
      <p>The current route is: {location.pathname}</p>
    </div>
  );
}

export default CurrentRoute;


// {(location.pathname=='/')? <HeroSlider/>:""}