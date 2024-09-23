import React from 'react';

function PropertyCard({ property, onBook }) {
  return (
    <div className="property-card">
      <img 
        src={property.image} 
        alt={property.title} 
        style={{ width: '100%', height: '1000px', objectFit: 'cover' }} 
      />
      <h3>{property.title}</h3>
      <p>{property.location}</p>
      <p>${property.price}/night</p>
      <button onClick={() => onBook(property)}>Book Now</button>
    </div>
  );
}

export default PropertyCard;
