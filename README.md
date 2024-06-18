# Backend Shopping Cart

This is a simple shopping cart checkout application built using Node.js, Sequelize ORM, PostgreSQL, and Stripe for payment processing.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Stripe Integration](#stripe-integration)
- [Email Configuration](#email-configuration)

## Prerequisites
- Node.js
- PostgreSQL
- Stripe account for payment processing
- Email and App password

## Installation
1. Clone the repository:
    ```sh
    https://github.com/sudaisali/frontend_shopping_checkout.git
    
    ```
2. Go to backend_shopping_cart:
    ```sh
    cd backend_shopping_cart
    ```
3. Install dependencies:
    ```sh
    npm install
    ```

## Database Setup
1. Create a PostgreSQL database:
    ```sh
    createdb checkout
    ```
2. Configure your database connection in a `.env` file:
    ```env
    DB_USER=
    DB_PASSWORD=
    DB_NAME=
    DB_HOST=
    DB_DIALECT=
    PORT=
    ```

## Running the Application
1. Install sequelize cli:
    ```sh
      npm install --save-dev sequelize-cli
    ```

2. Go to database folder:
    ```sh
    cd src
    cd database
    ```

3. Run Sequelize migration to set up the database and seed it with initial data:
    ```sh
    sequelize-cli db:migrate
    sequelize-cli db:seed:all
    ```
4. Go to main folder:
    ```sh
    cd ..
    ```
5. Start the application:
    ```sh
    node index.js
    ```
6. The application will be running at `http://localhost:8000`.

## Stripe Integration
1. Set up your Stripe API keys in the `.env` file:
    ```env
    STRIPE_SECRET_KEY=your_secret_key
    STRIPE_WEBHOOK_SECRET=your_webhook_secret
    RETURN_BASE_URL=your_return_base_url
    ```

## Stripe Webhook for Testing
1. Set up Stripe CLI and log in:
    ```sh
    stripe login
    ```
2. Start listening to the webhook events:
    ```sh
    stripe listen --forward-to localhost:8000/api/webhook
    ```

## Email Configuration
1. Set up your email configuration in the `.env` file:
    ```env
    EMAIL=
    APP_PASSWORD=
    ```
## Documentation Link
    https://docs.google.com/document/d/1Ubjj5BknzZzE-N1sBWbeqbn0Vy22oBx6ALUear59tco/edit?usp=sharing
---

## Video Link
    https://drive.google.com/file/d/1VfKS6N2LZ9Pr8fRRQIs0OX_szKqCB46L/view?usp=sharing  
