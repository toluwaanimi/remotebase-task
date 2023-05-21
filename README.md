# Remote-more Task

This is a React application built with Vite, a fast and opinionated build tool for React projects. The application
allows users to search for tracks, view track details, and browse charts. It integrates with the Deezer API to fetch
track and artist data.

## Features

- Search for tracks: Users can enter a search term in the search bar and view a list of tracks matching the search
  query.
- Track details: Users can click on a track to view more details, including the artist name, album name, and duration.
- Browse charts: Users can view a list of popular tracks on the charts page.
- Dark mode: The application supports a dark mode, which users can toggle using the color mode switch in the navbar.

## Technologies Used

- React: A JavaScript library for building user interfaces.
- Vite: A fast build tool that provides instant bundling and hot module replacement (HMR) for React projects.
- Chakra UI: A simple and modular UI component library for React applications.
- React Toastify: A library for displaying toast notifications in React applications.
- Deezer API: An API that provides access to music-related data, including tracks, artists, and albums.

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/toluwaanimi/remotebase-task.git`
2. Navigate to the project directory: `cd remotebase-task`
3. Install the dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and visit `http://127.0.0.1:5173/` or `https://remotebase-task.web.app/` to view the application.

## Project Structure

The project structure is organized as follows:

- `src` directory: Contains the main source code of the application.
    - `components` directory: Contains reusable UI components used in the application.
    - `pages` directory: Contains the main pages of the application, including the charts and track search pages.
    - `assets` directory: Contains static assets such as images and icons used in the application.
    - `App.tsx`: The root component of the application.
    - `index.tsx`: The entry point of the application.
- `public` directory: Contains static files that are served as-is by Vite.

## Deployment to Firebase

To deploy the application to Firebase, you can follow these steps:

1. Install Firebase CLI: If you haven't already, install the Firebase CLI by running the following command in your
   terminal:

   ```
   npm install -g firebase-tools
   ```

2. Initialize Firebase: In the root directory of your project, run the following command to initialize Firebase:

   ```
   firebase init
   ```

   This command will guide you through the Firebase initialization process. Choose the options that are appropriate for
   your project, including selecting the Firebase features you want to use and configuring the project for hosting.

3. Build the application: Before deploying to Firebase, you need to build the production-ready version of your
   application. Run the following command:

   ```
   npm run build
   ```

   This will create an optimized build of your application in the `build` directory.

4. Deploy to Firebase: Once the build is complete, you can deploy your application to Firebase by running the following
   command:

   ```
   firebase deploy
   ```

   This command will upload your application to Firebase and provide you with a hosting URL where you can access your
   deployed application.

   Note: Make sure you are logged in to your Firebase account using the Firebase CLI (`firebase login`) before running
   the deploy command.

## CORS (Cross-Origin Resource Sharing)

Most browsers enforce the same-origin restriction, which may prevent HTTP calls to the Deezer API. To overcome this
issue and enable CORS (Cross-Origin Resource Sharing) in your app, you need to forward requests through a public CORS
proxy that adds the Access-Control-Allow-Origin header to any OPTIONS preflight response.

In this application, we are using the https://cors-anywhere.herokuapp.com/ proxy to enable CORS. All API requests to the
Deezer API should be made by prepending the proxy URL to the actual API URL. For example, a call intended
for https://api.deezer.com/search?q=eminem should become a call
to https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=eminem in your code.

To visit the website and enable the proxy, follow these steps:

Open your web browser.
Enter the URL of the deployed application: `https://remotebase-task.web.app/``
Once the application loads, you should see the homepage.
To search for tracks or browse charts, use the respective features provided in the application.
Behind the scenes, the application is making API calls to the Deezer API via the https://cors-anywhere.herokuapp.com/
proxy to enable CORS.
Note: It is important to note that using a public CORS proxy in a production environment is not recommended due to
security and performance concerns. In a production setup, it is advisable to set up your own proxy server or configure
the server hosting your application to enable CORS.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please open an
issue or submit a pull request.

## Acknowledgements

- This project was built using Vite, React, and Chakra UI, which are open-source libraries.
- The Deezer API was used to fetch track and artist data.

