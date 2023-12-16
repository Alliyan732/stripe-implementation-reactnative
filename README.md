
# ReactNative Stripe Implementation

This repository contains an example implementation of Stripe payment processing in a MERN (MongoDB, Express.js, React, Node.js) stack.

## Prerequisites

Before you start, make sure you have the following installed:

- Node.js and npm: [Node.js Downloads](https://nodejs.org/en/download/)
- Stripe Account: [Stripe Dashboard](https://dashboard.stripe.com/register)

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/Alliyan732/stripe-implementation-reactnative
    ```

2. Change into the project directory:

    ```bash
    cd <Project folder>
    ```

3. Install dependencies for both the server and the client:

    ```bash
    cd Server
    npm install
    cd ../App
    npm install
    ```

4. Set up your environment variables:

    Create a `.env` file in the `server` directory with the following content:

    ```env
    PORT='  '
    STRIPE_API_KEY= your_stripe_api_key
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

    Replace `your_stripe_secret_key` with your actual Stripe secret key.

5. Start the server and the client:

    In one terminal window, run the server:

    ```bash
    cd Server
    npm start
    ```

    In another terminal window, run the client:

    ```bash
    cd App
    npx react-native run-android
    ```

## Stripe API

This project uses the Stripe API for payment processing. Ensure that you have a valid Stripe account and replace the `STRIPE_SECRET_KEY` in the `.env` file with your actual secret key from the [Stripe Dashboard](https://dashboard.stripe.com/apikeys).


Feel free to explore and customize the code according to your project requirements.

## Author

Aalliyan Alvi

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support
If you encounter any issues or have any questions or suggestions, please feel free to open an issue. We appreciate your feedback and contributions to the project.

Email: alliyan732@gmail.com
LinkedIn: https://www.linkedin.com/in/alliyan-alvi/
Happy Coding! :)
