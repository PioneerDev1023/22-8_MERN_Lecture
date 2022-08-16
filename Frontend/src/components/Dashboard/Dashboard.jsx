import React from 'react';
import Confirm from '../../assets/images/Confirm.png';

export default function Dashboard() {
  return(
    <div className='repair'>
        <div className='confirm-img'>
            <img src={Confirm} alt="image" />
        </div>
        <h1 class="confirm-title">Success!</h1>
        <h4 class="confirm-text">Your dashboard is right here!</h4>
    </div>
  );
}