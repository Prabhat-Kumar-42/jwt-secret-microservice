# JWT Secret Microservice

A simple microservice that provides a JWT secret key to anything that pings it. Ideal for applications that require a secure key for signing and verifying JWT tokens.

## Getting Started

### Prerequisites

- Node.js (v23.2.0) or later
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone <repository_url>
   cd jwt-secret-microservice
   ```

2. Install the dependencies:

   ```bash
   Copy code
   npm install
   ```

3. Set up your JWT secret:

   - Create a .env file in the root directory.
   - Add the following line with your JWT secret:

   ```env
       JWT_SECRET=your_jwt_secret_key

   ```

4. Running the Microservice
   Start the application with:

   ```bash
       npm start

   ```

   The server will run at http://localhost:3000.

### API Endpoint

GET /jwt-secret

Returns the JWT secret key in JSON format:

    ```json
    {
        "jwt_secret": "your_jwt_secret_key"
    }
    ```

## Docker Setup

You can also run the service via Docker:

Build the Docker image:

    ```bash
        docker build -t jwt-secret-service .
    ```

Run the container:

    ```bash
        docker run -p 3000:3000 jwt-secret-service -e .env-file
    ```

This will make the service available at http://localhost:3000.
