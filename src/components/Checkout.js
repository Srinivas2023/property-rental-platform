import React, { useState } from 'react';

function Checkout({ bookedProperties, onCheckout }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentInfo, setPaymentInfo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the booking confirmation
    onCheckout();
    alert('Thank you for your booking!');
  };

  const totalCost = bookedProperties.reduce((sum, property) => sum + property.price, 0);

  return (
    <div>
      <h3>Checkout</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Payment Information:</label>
          <input type="text" value={paymentInfo} onChange={(e) => setPaymentInfo(e.target.value)} required />
        </div>
        <div>
          <h4>Total Cost: ${totalCost}</h4>
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Checkout;
