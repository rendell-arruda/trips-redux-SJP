import React from 'react';
import { useState, useEffect } from 'react';
import api from '../../assets/services/api';

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadApi() {
      const response = await api.get('trips');
      setTrips(response.data);
      console.log(response.data);
    }

    loadApi();
  }, []);
  return <div>Home</div>;
}
