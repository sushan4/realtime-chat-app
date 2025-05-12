# Real-time Chat App with Expo and Socket.IO

A real-time chat application built with Expo (React Native) and Socket.IO, enabling instant messaging in different chat rooms.

## Features

- Real-time messaging using Socket.IO
- Multiple chat rooms
- Message history
- Pull to refresh room list
- Modern UI with NativeBase components
- Keyboard-aware chat interface
- Supports iOS and Android

## Tech Stack

- [Expo](https://expo.dev/) - React Native framework
- [Socket.IO](https://socket.io/) - Real-time communication
- [NativeBase](https://nativebase.io/) - UI components
- [React Navigation](https://reactnavigation.org/) - Navigation
- [Moment.js](https://momentjs.com/) - Time formatting

## Getting Started

### Prerequisites

- Node.js
- npm/yarn
- Expo CLI
- iOS Simulator/Android Emulator (optional)

### Installation

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
npm install
```

### Running the Application

1. Update the server URL
- Open `context/SocketContext.js`
- Update the Socket.IO URL to your server's IP address

2. Start the Expo app
```bash
npx expo start
```

3. Launch the app
- Scan the QR code with Expo Go app
- Press 'i' for iOS simulator
- Press 'a' for Android emulator

## Development

- Main app screens are in `screens/` directory
- Socket context is in `context/SocketContext.js`
- Navigation setup is in `app/` directory

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

ISC
