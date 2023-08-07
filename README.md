# E-Commerce Store using React.js and Redux Toolkit

This is a small e-commerce store built with React.js and Redux Toolkit for managing global state. The backend is powered by Node.js and Express.js, and the application is deployed on Heroku.

## Features

- Categories: Browse products by different categories.
- Products: View product details, add products to the cart.
- Users: Users can sign up, log in, and manage their profiles.
- Cart: Users can add products to their cart and proceed to checkout.

## Technologies Used

- React.js: Front-end framework for building the user interface.
- Redux Toolkit: To manage the global state efficiently.
- Node.js: Backend server environment.
- Express.js: Web application framework for Node.js.
- Heroku: Cloud platform to deploy and host the application.

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- Git installed on your machine.

### Installation

1. Clone the repository.

```bash
git clone <repository-url>
```
2. Install dependencies for both the client and server.

```bash
cd client
npm install

cd ../server
npm install
```

### Usage

1. Run the Server

```bash
cd server
npm start
```
The server will start running at http://localhost:3001.


2. Run the Client

```bash
cd client
npm start
```

The server will start running at http://localhost:3000.

### Deployment
The application is deployed on Heroku. You can access it using the following URL:
[linkhere](https://my-redux-store-mern-55daed3946a0.herokuapp.com/)

### Folder Structure
The project is organized into the following structure:

```bash
├── client/                 # Front-end React.js application
│   ├── public/             # Public assets and index.html
│   ├── src/                # React application source code
│   │   ├── components/     # Reusable React components
│   │   ├── pages/          # Different pages of the application
│   │   ├── REDUX/          # Redux store configuration and actions
│   │   ├── App.js          # Main App component
│   │   ├── index.js        # Entry point of the React application
│   │   └── ...
│   ├── package.json        # Front-end dependencies and scripts
│   └── ...
├── server/                 # Node.js and Express.js backend
│   ├── routes/             # API routes for categories, products, users, and cart
│   ├── controllers/        # Controllers for handling API requests
│   ├── models/             # Data models and schema
│   ├── app.js              # Express.js application setup
│   └── ...
├── package.json            # Backend dependencies and scripts
├── package-lock.json       # Auto-generated file for dependency locking
├── .gitignore              # Specifies intentionally untracked files to ignore
└── ...

```
