import React from 'react';
import { Car, ExternalLink } from 'lucide-react';

const rideServices = [
  { name: 'Ola', link: 'https://www.olacabs.com/', color: 'bg-green-500' },
  { name: 'Uber', link: 'https://www.uber.com/', color: 'bg-black' },
  { name: 'Rapido', link: 'https://rapido.bike/', color: 'bg-yellow-500' },
  { name: 'Auto', link: 'https://www.olacabs.com/auto', color: 'bg-orange-500' }
];

export default function RideShareLinks() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg">
      <div className="flex items-center space-x-3 mb-6">
        <Car className="h-6 w-6 text-purple-600" />
        <h3 className="text-xl font-bold text-gray-800">Quick Rides</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {rideServices.map((service) => (
          <button
            key={service.name}
            onClick={() => window.open(service.link, '_blank')}
            className={`${service.color} text-white p-4 rounded-xl font-semibold hover:opacity-90 transition-all flex items-center justify-center space-x-2`}
          >
            <span>{service.name}</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        ))}
      </div>
    </div>
  );
}