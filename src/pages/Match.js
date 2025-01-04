import React from 'react';
import HackathonCard from '../components/HackathonCard';

const Match = () => {
  const hackathons = [
    { name: 'HackNY', date: '2025-02-15', location: 'New York, NY' },
    { name: 'TechJam', date: '2025-03-01', location: 'San Francisco, CA' },
  ];

  return (
    <div>
      <h1>Find Your Match</h1>
      {hackathons.map((hack, index) => (
        <HackathonCard key={index} {...hack} />
      ))}
    </div>
  );
};

export default Match;
