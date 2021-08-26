### App is deployed and runing on https://super-github-repos.netlify.app/

# 🚀 Table of Contents

## Getting Started with App

## Library Framework Used

## What's inside?

## How to build

# Getting Started with App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Environment

Nodejs

## Available Scripts

In the project directory, you can run:

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

App is deployed and runing on https://super-github-repos.netlify.app/

### Steps to deploy app - refer netlify section

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

# Library Framwork Used

## React

React library is used for frontend components. Use of Functional component is encouraged however you can use class components for rare cases.

## Typescript

For static types to Javascript code

## axios

Axios is used as http client instance because of it's out of the box offerings and some extra methods over native fetch. A centralised instance is used, you can add headers from a single place using this file and handle 401, 404, 500, etc errors here.

## react-bootstrap

CSS framwork for readymade UI comonents is used.

## query-string

For parsing and stringifying the query/params.

## react-content-loader

Use this loader to show inside your compnent for data loading duration. You can customize the view of loader.

## redux

State container is used for common state management. Only common data should be moved to it. You can cal API within component itself if the data is not shared among other components/pages. If you feel some data is required in multiple components then move it to redux. A hybrid approach is used for data storage. Keep the data inside component(one time use) and other one is keep it in redux(common data).

## react-router-dom

Is used for routing. Add your routing for new pages/screen in Routing.tsx file.

## redux-persist

Is used to persist data on page refresh. To allow `redux persist` keep your data, use blacklist, whitelist config. You can check store.js configuration file for it to manage.

## redux-thunk

Is used to have the ablity to dispatch async function. Use this for api calling and async operations.

# What's inside?

.
├── node_modules
├── public
├── src
├── .gitignore
└── DOC.md
├── package-lock.json
├── package.json
└── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/public`**: This folder will have static content for your app.

3.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`DOC.md`** **`README.md`**: A text file containing useful reference information about your project.

6.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

7.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

# How to build

## /src

- This directory will have frontend code. index.js is the root file that will bootstrap the app and this file will import the App component. App component will have Router.js file. You can add your routers in this file and start adding new screens/pages.
- A store is created for state management, store will have multiple redux reducers and they are combined together using combineReducers. folow the same folder structure and design for adding new reducers to it.
- Use centralised http client for api calling. You can import the instance from /src/helpers/httpClient and stat calling the api using it.
- Add common components inside /src/cmponents directory. This directory do have the common components used across diffrent pages insde app.
- For styling CSS modules are used for below benifits--
  Using CSS modules avoid namespace collision for CSS classes.
  You can use the same CSS class in multiple CSS files.
  You can confidently update any CSS file without worrying about affecting other pages.
  Using CSS Modules generates random CSS classes when displayed in the browser and css will not override/overlap.

- Folder structor of a component

├── Home
├── index
├── components
-├── Banner
-└── Features
├── models
└── styles
├── Home.test.js

Follow above folder signature for new pages/components.

- Keep your constants inside config file. This config will import the constants from .env file.

- React Testing libray is used for unit testing. Main/important test cases like adding repo, deleting Repo, listing repo, using search input cell are implemented. Create [Name].test.js file and write your test cases in it.

#### connect is used over useSelector (react-redux)

- Good separation of concerns.
- Easy handeling of props/data
- "Inner" components themselves are simpler and easier to test.
- Option to include redux in your component tests.
- Better performance optimizations by default.

