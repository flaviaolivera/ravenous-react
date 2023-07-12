import React from 'react';
const Business = () => {
    const business = {
    image: 'https://example.com/image.jpg',
    name: 'Restaurante Ejemplo',
    address: 'Calle Ejemplo, 123',
    city: 'Ciudad Ejemplo',
    state: 'Estado Ejemplo',
    zipCode: '12345',
    category: 'Categoría Ejemplo',
    rating: 4.5,
    reviewCount: 100
  };
     return (
    <div className="business">
       <img src={business.image} alt={business.name} />
      <h2>{business.name}</h2>
      <p>{business.address}</p>
      <p>{business.city}, {business.state} {business.zipCode}</p>
      <p>Category: {business.category}</p>
      <p>Rating: {business.rating}</p>
      <p>Reviews: {business.reviewCount}</p>
    </div>
  );
};
export default Business;