import { FaDownload } from 'react-icons/fa';
import { useState } from 'react';
import './styles.css';

const Download_Button = ({ onclick }) => {
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    // Trigger bounce animation by adding the bounce class
    setIsBouncing(true);
    // Trigger the passed click handler function
    onclick();
    // Remove the bounce class after animation ends (300ms duration)
    setTimeout(() => setIsBouncing(false), 300); // Bounce duration is 300ms
  };

  return (
    <div onClick={handleClick} className='hover:scale-105 duration-300'>
      <button className={`Download-button ${isBouncing ? 'bounce' : ''}`}>
        <FaDownload />
        <span>Download</span>
      </button>
    </div>
  );
};

export default Download_Button;
