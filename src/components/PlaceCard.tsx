import React from 'react';
import { MapPin, Thermometer, Star } from 'lucide-react';

interface PlaceCardProps {
  name: string;
  location: string;
  temperature: string;
  climate: string;
  rating: number;
  image: string;
  description: string;
}

export default function PlaceCard({ name, location, temperature, climate, rating, image, description }: PlaceCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 flex items-center space-x-1">
          <Star className="h-4 w-4 text-yellow-500 fill-current" />
          <span className="text-sm font-semibold">{rating}</span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center space-x-2 text-gray-600 mb-3">
          <MapPin className="h-4 w-4" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2 bg-blue-50 rounded-lg px-3 py-2">
            <Thermometer className="h-4 w-4 text-blue-500" />
            <span className="text-sm text-blue-700 font-medium">{temperature}</span>
          </div>
          <span className="text-sm text-gray-600 bg-gray-100 rounded-lg px-3 py-2">{climate}</span>
        </div>
        
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
}