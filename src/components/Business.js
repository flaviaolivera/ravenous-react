import React from 'react';
const Business = ({data}) => {
   console.log(data.name)
     return (
    <div className="business">
       <img src={data.image} alt={data.name} />
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <p>{data.city}, {data.state} {data.zipCode}</p>
      <p>Category: {data.category}</p>
      <p>Rating: {data.rating}</p>
      <p>Reviews: {data.reviewCount}</p>
    </div>
  );
};
export default Business;