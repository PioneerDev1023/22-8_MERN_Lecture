import React from 'react';
import Confirm from '../../assets/images/Confirm.png';

export default function Dashboard() {
  return (
    <div className='repair'>
      <div className='confirm-img'>
        <img src={Confirm} alt="image" />
      </div>
      <h1 className="confirm-title">Success!</h1>
      <h4 className="confirm-text">Your dashboard is right here!</h4>
    </div>
  );
}