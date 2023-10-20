# RevoU Week 17

Deploy previous project (also adds the front-end) to Firebase / GCP

## Features

basically, its the same as my previous project [RevoU Week 16](https://github.com/adriantori/RevoU-Week-16) so the back-end should be the same. As for the front-end, I simplify my [RevoU Week 13](https://github.com/adriantori/RevoU-Week-13) project. Anything else is the same.

## Deploy Links:

front-end: https://week-17-adriantori.web.app
back-end: https://us-central1-revou-fullstack.cloudfunctions.net/week_17_adriantori

## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

1. Node.js and npm installed on your local machine.
2. Firebase CLI installed. You can install it using npm install -g firebase-tools.
3. A Firebase project named "revou-fullstack." If you don't have one, create it on the Firebase Console ([https://console.firebase.google.com/](https://console.firebase.google.com/)).

## Front-End Deployment (React)

1. Navigate to your React front-end project directory.

2. Build the React app for production:
   
   - Run the following command:
     
     arduinoCopy code
     
     `npm run build`

3. Initialize your Firebase project:
   
   - Run the following command:
     
     csharpCopy code
     
     `firebase init`
   
   - Follow the prompts and select the hosting option.

4. Choose your Firebase project ("revou-fullstack") when prompted.

5. Configure your project for deployment:
   
   - What do you want to use as your public directory? Enter "build."
   - Configure as a single-page app (rewrite all URLs to /index.html)? Select "Yes."
   - File build/index.html already exists. Overwrite? Select "No."

6. Deploy your React front-end to Firebase Hosting:
   
   - Run the following command:
     
     Copy code
     
     `firebase deploy`

7. Your React app is now deployed. You will receive a hosting URL.

## Back-End Deployment (Express.js)

1. Navigate to your Express.js back-end project directory.

2. Ensure you have the Firebase Admin SDK installed:
   
   - Run the following command:
     
     Copy code
     
     `npm install firebase-admin`

3. Initialize your Firebase project:
   
   - Run the following command:
     
     csharpCopy code
     
     `firebase init`
   
   - Follow the prompts and select the functions option.

4. Choose your Firebase project ("revou-fullstack") when prompted.

5. Deploy the back-end to Firebase Functions:
   
   - Run the following command:
     
     bashCopy code
     
     `firebase deploy --only functions`

6. Your Express.js back-end is now deployed as a Firebase Function. You will receive a functions URL.

## Accessing Your Deployed App

You can access your deployed app by visiting the URLs provided during the deployment process. Make sure you update your front-end code to make API requests to the correct back-end URL (Firebase Functions URL) if needed.

Congratulations! You have successfully deployed your React front-end and Express.js back-end to Firebase/GCP.

For more advanced configurations or custom domain setups, refer to the Firebase documentation (https://firebase.google.com/docs) and Google Cloud documentation (https://cloud.google.com/docs).## Prerequisites

Before you begin, make sure you have the following prerequisites in place:

1. Node.js and npm installed on your local machine.
2. Firebase CLI installed. You can install it using npm install -g firebase-tools.
3. A Firebase project named "revou-fullstack." If you don't have one, create it on the Firebase Console ([https://console.firebase.google.com/](https://console.firebase.google.com/)).

## Front-End Deployment (React)

1. Navigate to your React front-end project directory.

2. Build the React app for production:
   
   - Run the following command:
     
     arduinoCopy code
     
     `npm run build`

3. Initialize your Firebase project:
   
   - Run the following command:
     
     csharpCopy code
     
     `firebase init`
   
   - Follow the prompts and select the hosting option.

4. Choose your Firebase project ("revou-fullstack") when prompted.

5. Configure your project for deployment:
   
   - What do you want to use as your public directory? Enter "build."
   - Configure as a single-page app (rewrite all URLs to /index.html)? Select "Yes."
   - File build/index.html already exists. Overwrite? Select "No."

6. Deploy your React front-end to Firebase Hosting:
   
   - Run the following command:
     
     Copy code
     
     `firebase deploy`

7. Your React app is now deployed. You will receive a hosting URL.

## Back-End Deployment (Express.js)

1. Navigate to your Express.js back-end project directory.

2. Ensure you have the Firebase Admin SDK installed:
   
   - Run the following command:
     
     Copy code
     
     `npm install firebase-admin`

3. Initialize your Firebase project:
   
   - Run the following command:
     
     csharpCopy code
     
     `firebase init`
   
   - Follow the prompts and select the functions option.

4. Choose your Firebase project ("revou-fullstack") when prompted.

5. Deploy the back-end to Firebase Functions:
   
   - Run the following command:
     
     bashCopy code
     
     `firebase deploy --only functions`

6. Your Express.js back-end is now deployed as a Firebase Function. You will receive a functions URL.

## Accessing Your Deployed App

You can access your deployed app by visiting the URLs provided during the deployment process. Make sure you update your front-end code to make API requests to the correct back-end URL (Firebase Functions URL) if needed.

Congratulations! You have successfully deployed your React front-end and Express.js back-end to Firebase/GCP.

For more advanced configurations or custom domain setups, refer to the Firebase documentation (https://firebase.google.com/docs) and Google Cloud documentation (https://cloud.google.com/docs).
