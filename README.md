# Netflix Clone

This application is (a Netflix clone) was built using React (Custom Hooks, Context), Firebase & Tailwind CSS, to practice using firebase. I have built the following pages within this application: sign in, sign up, account, saved shows, & lastly the homepage. There are six different pages, some using protected routes with auth listeners. Firebase firestore handles all the data and that data is retrieved using a custom hook; authentication is used on all pages, which is handled by Firebase as well.

![Screenshot from 2024-01-29 15-47-51](https://github.com/arnold-aswan/netflix_clone/assets/135007872/3034697e-848e-4b91-bec4-934764f4bc6c)

![Screenshot from 2024-02-02 12-17-42](https://github.com/arnold-aswan/netflix_clone/assets/135007872/316ee0c7-c623-48d3-ad8b-5e0584d2e23f)

## Features

1.  Sign up & Login Authentication. <br/>
    New users can sign up and login with their emails and passwords and get started with the app.
    The app uses google level authentication so their details are guarantee to be secured.
2.  Saved Shows. <br/>
    Authenticated users can save their favorite shows and movies, which will be found in `My List`
3.  Anonymous Login as a guest user. <br/>
    New users can log in anonymously and test out the application before signing up.
4.  A clickable modal that will display film description and extra information.

## Future Enhancements

1. Implement Subscription service with Stripe.

## Technologies Used

1. React vite
2. Firebase
3. Firestore
4. Tailwind CSS

## Project Setup & Installation

### Getting Started

1. Navigate to a directory you would like to clone the project.
2. Open terminal and enter the following command to clone the repo in your desired directory: `git clone git@github.com:arnold-aswan/netflix_clone.git`
3. After cloning the repository, run `yarn install` to install the required dependencies.

### Environment Variables

#### TMDB API KEY

1. Sign up to `TMDB` to get the TMDB api key.

#### FIREBASE

##### 1: Create a Firebase Project

1. Go to the Firebase Console: `https://firebase.google.com/`
2. Click on the `Add project` button.
3. Enter a name for your project and choose your desired options.
4. Click `Create project`

##### 2: Set Up Firebase Web App

1. In the Firebase Console, select your project.
2. Click on `Add app` and choose the web icon `</br>`.
3. Enter a nickname for your app and click `Register app`.
4. Copy the configuration object provided.

- The config object looks something like this:

```
{
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
}
```

##### 3: Create Firestore Database

1. In the Firebase Console, select your project.
2. Navigate to `Firestore` from the left sidebar.
3. Click on `Create database` and follow the prompts to set up your Firestore database.

##### 4: Set Environment Variables

1. Open your code editor and create a file named `.env` in the root directory of your project.
2. Add the following lines to the `.env` file:

```
REACT_APP_FIREBASE_API_KEY=YOUR_API_KEY
REACT_APP_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
REACT_APP_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
REACT_APP_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
REACT_APP_FIREBASE_APP_ID=YOUR_APP_ID
```

Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, etc., with the values from your Firebase config object.

#### 5: Accessing Environment Variables in Code

In your code, you can access these environment variables using `process.env.REACT_APP_FIREBASE_API_KEY`, `process.env.REACT_APP_FIREBASE_AUTH_DOMAIN`, etc.

Once everything is already setup, run `yarn start` on your terminal in the root directory of the cloned repository to launch the application.

## Author & License

[Arnold Aswani](https://github.com/arnold-aswan)

Licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for more details.
