'use client';
import React, { use, useState } from 'react';
import axios from 'axios';
const NkwaTest = () => {
  const [formData, setFormData] = useState({
    amount: '',
    phone: '',
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    console.log('API Key:', 'uJvUKKNjyK6N_zip6jIFm');
    try{
    const response = await axios.post('https://api.pay.staging.mynkwa.com/collect',{
        amount: Number(formData.amount),
        phoneNumber: formData.phone,
    },
{
    headers:{
        'Content-Type': 'application/json',
        'X-API-Key': 'uJvUKKNjyK6N_zip6jIFm', 
    }
})
    console.log('Payment initiated:', response.data);
  } 
  catch (error) {
    console.error('Payment error:', error);
  
  };
    };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded">
      <h1 className="text-2xl font-bold mb-4">Nkwa Payment Gateway Test</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="amount" className="block mb-1">Enter Amount</label>
          <input
            id="amount"
            name="amount"
            type="text"
            placeholder="Amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block mb-1">Phone</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default NkwaTest;
