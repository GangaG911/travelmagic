import React, { useState } from 'react';
import { Train, Bus, Hotel, UtensilsCrossed, Plane, MapPin } from 'lucide-react';
import Header from './components/Header';
import LoginModal from './components/LoginModal';
import BookingCard from './components/BookingCard';
import PlaceCard from './components/PlaceCard';
import RideShareLinks from './components/RideShareLinks';

interface User {
  name: string;
  phone: string;
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (name: string, phone: string) => {
    setUser({ name, phone });
  };

  const bookingServices = [
    {
      title: 'Train Booking',
      description: 'Book train tickets across India with ease',
      icon: <Train className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-blue-500 to-blue-700',
      link: 'https://www.irctc.co.in/',
      buttonText: 'Book Train'
    },
    {
      title: 'Bus Booking',
      description: 'Find and book bus tickets for your journey',
      icon: <Bus className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-green-500 to-green-700',
      link: 'https://www.redbus.in/',
      buttonText: 'Book Bus'
    },
    {
      title: 'Hotels',
      description: 'Discover and book amazing hotels',
      icon: <Hotel className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-purple-500 to-purple-700',
      link: 'https://www.booking.com/',
      buttonText: 'Book Hotel'
    },
    {
      title: 'Food Delivery',
      description: 'Order delicious food during your travels',
      icon: <UtensilsCrossed className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-red-500 to-red-700',
      link: 'https://www.zomato.com/',
      buttonText: 'Order Food'
    },
    {
      title: 'Flight Booking',
      description: 'Find the best flight deals',
      icon: <Plane className="h-8 w-8" />,
      color: 'bg-gradient-to-br from-indigo-500 to-indigo-700',
      link: 'https://www.makemytrip.com/',
      buttonText: 'Book Flight'
    }
  ];

  const destinations = [
    {
      name: 'Marina Beach',
      location: 'Chennai, Tamil Nadu',
      temperature: '28°C',
      climate: 'Tropical',
      rating: 4.2,
      image: 'https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'One of the longest urban beaches in the world with golden sand and beautiful sunrise views.'
    },
    {
      name: 'Meenakshi Temple',
      location: 'Madurai, Tamil Nadu',
      temperature: '31°C',
      climate: 'Hot & Dry',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/3581030/pexels-photo-3581030.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Historic Hindu temple with stunning architecture and intricate carvings.'
    },
    {
      name: 'Munnar Hills',
      location: 'Kerala',
      temperature: '22°C',
      climate: 'Cool & Pleasant',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1193743/pexels-photo-1193743.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Beautiful hill station with tea plantations and misty mountains.'
    },
    {
      name: 'Goa Beaches',
      location: 'Goa',
      temperature: '29°C',
      climate: 'Coastal',
      rating: 4.5,
      image: 'https://images.pexels.com/photos/1007657/pexels-photo-1007657.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Pristine beaches with golden sand, clear waters, and vibrant nightlife.'
    },
    {
      name: 'Taj Mahal',
      location: 'Agra, Uttar Pradesh',
      temperature: '26°C',
      climate: 'Pleasant',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Iconic white marble mausoleum and UNESCO World Heritage Site.'
    },
    {
      name: 'Mahabalipuram',
      location: 'Chennai, Tamil Nadu',
      temperature: '27°C',
      climate: 'Coastal',
      rating: 4.4,
      image: 'https://images.pexels.com/photos/3581030/pexels-photo-3581030.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Ancient port city with rock-cut temples and sculptures by the sea.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50">
      <Header onLoginClick={() => setShowLogin(true)} user={user} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mb-4">
            Your Dream Journey Awaits
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover amazing places, book everything you need, and create unforgettable memories with TravelMagic
          </p>
        </div>

        {/* Booking Services */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            <MapPin className="inline-block h-8 w-8 mr-2 text-purple-600" />
            Book Your Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {bookingServices.map((service, index) => (
              <BookingCard key={index} {...service} />
            ))}
          </div>
          
          {/* Ride Share Links */}
          <div className="max-w-md mx-auto">
            <RideShareLinks />
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Popular Destinations in India
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((place, index) => (
              <PlaceCard key={index} {...place} />
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Adventure?</h3>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of travelers who trust TravelMagic for their journeys
          </p>
          {!user && (
            <button
              onClick={() => setShowLogin(true)}
              className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-all transform hover:scale-105"
            >
              Get Started Now
            </button>
          )}
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2024 TravelMagic. Your all-in-one tourism companion. Made with ❤️ for travelers.
          </p>
        </div>
      </footer>

      <LoginModal
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}

export default App;