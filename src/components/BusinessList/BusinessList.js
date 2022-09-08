import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

const BusinessList = ({ businesses }) => {

  return (
    <div className="BusinessList">
        {businesses.map((business) => {
            return <Business key={Math.floor(Math.random() * 10000)} business={business}/>
        })}
    </div>
  )
}

export default BusinessList