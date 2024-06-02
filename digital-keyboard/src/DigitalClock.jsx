import React, {useState, useEffect} from 'react';

function DigitalClock() {
    const [time, setTime] = useState(new Date());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
  
    function formatTime() {
      let hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const meridiem = hours >= 12 ? "PM" : "AM";
  
      // Convert to 12-hour format
      hours = hours % 12 || 12; 
  
      // Add leading zeros to minutes and seconds if needed
      const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
  
      return `${hours}:${formattedMinutes}:${formattedSeconds} ${meridiem}`;
    }
  
    return (
      <div className='Clock-container'>
        <div className='clock'>
          <span>{formatTime()}</span>
        </div>
      </div>
    );
  }
  




export default DigitalClock