import React from 'react';
import Business from './Business';


const BusinessList = () => {
  const businessitem = {
    image: 'https://eatandlovemadrid.es/wordpress/wp-content/uploads/2018/06/amazonico-2.jpg',
    name: 'Restaurante Ejemplo',
    address: 'Calle Ejemplo, 123',
    city: 'Ciudad Ejemplo',
    state: 'Estado Ejemplo',
    zipCode: '12345',
    category: 'Categoría Ejemplo',
    rating: 4.5,
    reviewCount: 100
  };
  const businessitem2 = {
    image: 'https://eatandlovemadrid.es/wordpress/wp-content/uploads/2018/06/amazonico-2.jpg',
    name: 'Restaurante Ejemplo2',
    address: 'Calle Ejemplo, 123',
    city: 'Ciudad Ejemplo',
    state: 'Estado Ejemplo',
    zipCode: '12345',
    category: 'Categoría Ejemplo',
    rating: 4.5,
    reviewCount: 100
  };

  const businessArray = [
    businessitem, businessitem2
  ];

  return (
    <div>
    {businessArray.map((item, index) => (
      <Business key={index} data={item} />
    ))}
  </div>
  );
};

  export default BusinessList;