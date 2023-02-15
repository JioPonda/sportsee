1. General information
This project works with an API present in the P9-front-end-dashboard folder. All the frontend is present in the Front-end folder.

2. Installation
a. Prerequisites
NPM (or yarn) and NodeJS (version 12.18)

b1. Installing the backend and launching the API
Clone the backend (https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard) and run the command : npm install to install dependencies
To start the API on port: 8000 : npm run start

b.2 Installing the frontend and launching the application
In the front folder run the command: npm install to install the dependencies
To launch the application: npm start
The application will then be available on http://localhost:3000
There are currently 2 URLs : /users/12 et /users/18

C.To change the data source

To change the data source (moker or with the API) go to the /Data folder and in the getData file on line 18 switch the const useApi from true to false

