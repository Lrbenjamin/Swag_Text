# Swag_Text

Swag_Text is a Progressive Web Application (PWA) built with Node.js, Express, and Webpack. The application allows users to create and save text notes, even when offline. The app uses IndexedDB for storage and can be installed as a desktop application. Render Link:https://swag-text.onrender.com 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [License](#license)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

To run this application locally, follow these steps:

1. Clone the repository:
   ``bash
   git clone https://github.com/Lrbenjamin/Swag_Text.git
   ``

2. Navigate to the project directory:
   ``bash
   cd Swag_Text
   ``

3. Install server dependencies:
   ``bash
   npm install
   ``

4. Navigate to the client directory and install client dependencies:
   ``bash
   npm install --prefix client
   ``

5. Build the client-side application:
   ``bash
   npm run build --prefix client
   ``

6. Start the application:
   ``bash
   npm start
   ``

   The application should now be running on `http://localhost:3000`.

## Usage

1. Open the application in your web browser.
2. You can create, edit, and save text notes.
3. The app works offline, so you can continue using it without an internet connection.
4. The app can be installed on your desktop by clicking the "Install" button.

## Features

- **Offline Functionality:** The app uses IndexedDB to store notes locally, allowing you to use it without an internet connection.
- **Service Worker:** A service worker is used to cache assets and data, making the app fast and reliable.
- **PWA:** The app can be installed as a Progressive Web Application, providing a native-like experience on the desktop.

## Deployment

The application is deployed using Render. Follow these steps to deploy the application:

1. Log in to your Render account and create a new web service.
2. Link the service to your GitHub repository containing the Swag_Text project.
3. Set the build command:
   ``bash
   npm install && npm install --prefix client && npm run build --prefix client
   ``

4. Set the start command:
   ``bash
   node server.js
   ``

5. Deploy the application. Render will handle the deployment and provide you with a live URL.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express**: Web framework for Node.js.
- **Webpack**: Module bundler for JavaScript.
- **IndexedDB**: Database for storing data locally in the browser.
- **Service Worker**: Background script that caches assets for offline use.
- **PWA**: Progressive Web App for a native-like experience.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.

## Contact

If you have any questions or issues, please contact the project maintainer:

- **Email**: Lrbenjamin22@gmail.com
- **GitHub**: [Lrbenjamin](https://github.com/Lrbenjamin)

