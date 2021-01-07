import React from 'react';
import '../CSS/Header.css';
const Link=({className,href,children})=>{
  const onClick=(event)=>{
    if(event.ctrlKey){
      return;
    }
  event.preventDefault();
  window.history.pushState({},'',href);
  // it just tell route component that the url just change
  const navEvent=new PopStateEvent('popstate');
  window.dispatchEvent(navEvent);
};
  return(
    <a onClick={onClick} className={className} href={href}>{children}</a> 
  );
};
export default Link;