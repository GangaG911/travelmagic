# TravelMagic - All-in-One Tourism Website

A beautiful, colorful, and user-friendly tourism website built with React, TypeScript, and Tailwind CSS. Perfect for travelers who want to book everything in one place!

## Features

- 🌈 **Colorful & Attractive Design** - Vibrant gradients and modern UI
- 👤 **User Profile System** - Login with name and phone number
- 🚂 **Train Booking** - Direct link to IRCTC for train reservations
- 🚌 **Bus Booking** - Integration with RedBus for bus tickets
- 🏨 **Hotel Booking** - Links to Booking.com for accommodations
- 🍔 **Food Ordering** - Zomato integration for food delivery
- ✈️ **Flight Booking** - MakeMyTrip integration for flights
- 🚗 **Ride Sharing** - Quick access to Ola, Uber, Rapido
- 🌡️ **Climate Information** - Weather details for each destination
- 📍 **Indian Destinations** - Featured places in India and Chennai
- 📱 **Responsive Design** - Works perfectly on all devices

## How to Run in VS Code

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **VS Code** - [Download here](https://code.visualstudio.com/)

### Setup Instructions

1. **Open VS Code**
   - Launch Visual Studio Code

2. **Open the Project**
   - Go to `File` → `Open Folder`
   - Select the project folder containing this README file

3. **Open Terminal in VS Code**
   - Press `Ctrl + ~` (or `Cmd + ~` on Mac)
   - Or go to `Terminal` → `New Terminal`

4. **Install Dependencies**
   ```bash
   npm install
   ```

5. **Start the Development Server**
   ```bash
   npm run dev
   ```

6. **View the Website**
   - The terminal will show a local URL (usually `http://localhost:5173`)
   - Click the URL or copy-paste it into your browser
   - Your website will automatically open!

### VS Code Extensions (Recommended)

Install these extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets** - Useful code snippets
2. **Tailwind CSS IntelliSense** - Auto-completion for Tailwind classes
3. **Auto Rename Tag** - Automatically rename paired HTML/JSX tags
4. **Prettier - Code formatter** - Automatic code formatting
5. **Bracket Pair Colorizer** - Color-coded brackets

### Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Header.tsx       # Navigation header with login
│   ├── LoginModal.tsx   # User login form
│   ├── BookingCard.tsx  # Booking service cards
│   ├── PlaceCard.tsx    # Destination cards
│   └── RideShareLinks.tsx # Quick ride links
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

### Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality

### Technologies Used

- **React 18** - Modern JavaScript library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icon library

### External Integrations

The website includes direct links to these services:
- **IRCTC** - Train booking
- **RedBus** - Bus booking
- **Booking.com** - Hotel reservations
- **Zomato** - Food delivery
- **MakeMyTrip** - Flight booking
- **Ola/Uber/Rapido** - Ride sharing

### Customization

To modify colors, update the Tailwind classes in the components. The main color scheme uses:
- Pink (`pink-500`, `pink-600`)
- Purple (`purple-500`, `purple-600`)
- Indigo (`indigo-500`, `indigo-600`)

### Troubleshooting

1. **Port already in use error**:
   - Try `npm run dev -- --port 3000` to use a different port

2. **Dependencies not installing**:
   - Delete `node_modules` folder and `package-lock.json`
   - Run `npm install` again

3. **Hot reload not working**:
   - Save the file again or restart the development server

### Need Help?

If you encounter any issues:
1. Make sure Node.js is properly installed
2. Check that you're in the correct project directory
3. Ensure all dependencies are installed with `npm install`
4. Try restarting VS Code and running the commands again

Happy traveling with TravelMagic! 🌟