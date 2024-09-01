# Authentication System

A Node.js authentication system with JWT-based authentication and MySQL database integration.

## Features

- User registration
- User login
- Fetch current user details
- Middleware for authentication

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for MySQL.
- **MySQL**: Relational database.
- **JWT**: JSON Web Tokens for secure authentication.
- **Joi**: Validation library for input data.
- **Dotenv**: Loads environment variables from a `.env` file.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/auth-system.git
   ```
2. Navigate to the project directory:
   ```bash
   cd auth-system
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root directory of the project.
2. Add the following environment variables to the `.env` file:
   ```env
   MYSQL_HOST=your_mysql_host
   MYSQL_DB=your_mysql_database
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   JWT_SECRET=your_jwt_secret
   PORT=5001
   ```

## Usage

1. Start the server:
   ```bash
   npm run dev
   ```
2. The server will run on `http://localhost:5001`.

## API Endpoints

### Register

- **URL:** `/api/auth/register`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:** Success or validation error message.

### Login

- **URL:** `/api/auth/login`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:** JWT token.

### Get Current User

- **URL:** `/api/auth/me`
- **Method:** `GET`
- **Headers:**
  ```text
  Authorization: Bearer <your_jwt_token>
  ```
- **Response:** User details or authentication error.

## Contributing

Feel free to fork the repository and submit pull requests. Please make sure to follow the coding standards and include tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
