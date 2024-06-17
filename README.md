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
2. Install dependencies:
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
1. Run Sequelize migration to set up the database and seed it with initial data:
    ```sh
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all
    ```
2. Start the application:
    ```sh
    npm start
    ```
3. The application will be running at `http://localhost:8000`.

## Stripe Integration
1. Set up your Stripe API keys in the `.env` file:
    ```env
    STRIPE_SECRET_KEY=your_secret_key
    STRIPE_PUBLISHABLE_KEY=your_publishable_key
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

---
