import React, { useState } from 'react';
import PropertyCard from './PropertyCard';
import Checkout from './Checkout';

const properties = [
  { id: 1, title: 'Cozy Apartment', location: 'New York', price: 120, bedrooms: 2, image: '/assets/th.jpeg' },
  { id: 2, title: 'Beach House', location: 'Los Angeles', price: 200, bedrooms: 3, image: 'assets/th (1).jpeg' },
  { id: 3, title: 'Mountain Retreat', location: 'Denver', price: 150, bedrooms: 4, image: 'assets/th (2).jpeg' },
  { id: 4, title: 'Urban Flat', location: 'Chicago', price: 90, bedrooms: 1, image: 'assets/th (3).jpeg' },
  { id: 5, title: 'Luxury Villa', location: 'Hyderabad', price: 300, bedrooms: 5, image: 'assets/th (4).jpeg' },
  { id: 6, title: 'Sunny Cottage', location: 'Mumbai', price: 180, bedrooms: 2, image: 'assets/th (4).jpeg' },
  { id: 7, title: 'Modern Loft', location: 'Bangalore', price: 250, bedrooms: 3, image: 'assets/th (5).jpeg' },
];


function PropertyListings() {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [locationFilter, setLocationFilter] = useState('');
  const [bookedProperties, setBookedProperties] = useState([]);
  const [isCheckoutVisible, setCheckoutVisible] = useState(false);

  const handleFilterChange = (e) => {
    const value = e.target.value;
    setLocationFilter(value);
  
    // Filter properties based on location (case insensitive)
    const filtered = properties.filter(property =>
      property.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProperties(filtered);
  };
  

  const handleBook = (property) => {
    setBookedProperties([...bookedProperties, property]);
    alert(`Booked: ${property.title}`);
  };

  const handleCheckout = () => {
    setCheckoutVisible(true);
  };

  const handleConfirmation = () => {
    setBookedProperties([]);
    setCheckoutVisible(false);
    alert('Your booking has been confirmed!');
  };

  return (
    <div>
      <h2>Property Listings</h2>
      <input
        type="text"
        placeholder="Filter by location"
        value={locationFilter}
        onChange={handleFilterChange}
        style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
      />
      <div className="property-grid">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} onBook={handleBook} />
        ))}
      </div>
      <h3>Your Booked Properties:</h3>
      <ul>
        {bookedProperties.map((property, index) => (
          <li key={index}>{property.title} - ${property.price}/night</li>
        ))}
      </ul>
      {bookedProperties.length > 0 && !isCheckoutVisible && (
        <button onClick={handleCheckout}>Proceed to Checkout</button>
      )}
      {isCheckoutVisible && (
        <Checkout bookedProperties={bookedProperties} onCheckout={handleConfirmation} />
      )}
    </div>
  );
}

export default PropertyListings;
