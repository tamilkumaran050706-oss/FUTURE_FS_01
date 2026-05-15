# Portfolio Backend

A clean, production-ready Express.js backend for handling contact form submissions.

## Features
- **MongoDB Integration**: Stores contact messages.
- **Nodemailer**: Sends real-time email notifications.
- **Validation**: Uses `express-validator` for input sanitization.
- **Security**: CORS enabled.
- **Error Handling**: Global middleware for consistent API responses.

## Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment Variables**:
   Update the `.env` file with your credentials:
   - `MONGO_URI`: Your MongoDB connection string.
   - `EMAIL_USER`: Your Gmail address.
   - `EMAIL_PASS`: Your Gmail App Password.

3. **Run the Server**:
   - Development mode: `npm run dev`
   - Production mode: `npm start`

## API Endpoints
- `POST /api/contact`: Submit a contact message.
  - Body: `{ name, email, subject, message }`
