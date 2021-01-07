import {useState, useEffect} from 'react';

const Route=({path,children})=>{
  const [currentLocation,setCurrentLocation]=useState(window.location.pathname);
  useEffect(() => {
    const onLocationChange=()=>{
      setCurrentLocation(window.location.pathname);
    }
    window.addEventListener('popstate',onLocationChange);
    return () => {
      window.removeEventListener('popstate',onLocationChange);
    }
  }, [])
  if(window.location.pathname=== path)
    return children;
  else
    return null;
};

export default Route;