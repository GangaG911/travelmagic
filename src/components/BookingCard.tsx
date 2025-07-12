import React from 'react';
import { ExternalLink } from 'lucide-react';

interface BookingCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  link: string;
  buttonText: string;
}

export default function BookingCard({ title, description, icon, color, link, buttonText }: BookingCardProps) {
  const handleBooking = () => {
    window.open(link, '_blank');
  };

  return (
    <div className={`${color} rounded-2xl p-6 text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
      <div className="flex items-center space-x-3 mb-4">
        {icon}
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-white/90 mb-6">{description}</p>
      <button
        onClick={handleBooking}
        className="w-full bg-white/20 hover:bg-white/30 backdrop-blur text-white py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all"
      >
        <span>{buttonText}</span>
        <ExternalLink className="h-4 w-4" />
      </button>
    </div>
  );
}