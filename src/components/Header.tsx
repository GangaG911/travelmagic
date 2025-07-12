import React from 'react';
import { MapPin, User, Heart } from 'lucide-react';

interface HeaderProps {
  onLoginClick: () => void;
  user: { name: string; phone: string } | null;
}

export default function Header({ onLoginClick, user }: HeaderProps) {
  return (
    <header className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8" />
            <h1 className="text-2xl font-bold">TravelMagic</h1>
            <Heart className="h-6 w-6 text-pink-200" />
          </div>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <div className="flex items-center space-x-3 bg-white/20 rounded-full px-4 py-2">
                <User className="h-5 w-5" />
                <span className="font-medium">{user.name}</span>
              </div>
            ) : (
              <button
                onClick={onLoginClick}
                className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-pink-50 transition-colors"
              >
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}