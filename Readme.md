# InShare - File Sharing Backend

This is the backend service for **InShare**, a file-sharing application that allows users to upload, share, and download files. The backend provides APIs for file sharing, email notifications, link expiration, and file downloads. The project is built using **Node.js**, **Express.js**, and **MongoDB**.

---

## Features
- **File Uploads**: Upload files up to 100MB.
- **File Sharing Links**: Generate shareable links for uploaded files.
- **Email Notifications**: Send file-sharing links via email.
- **Link Expiration**: Links expire automatically after 24 hours.
- **Automatic Cleanup**: Deletes expired files and database entries.
- **Secure**: Implements CORS to control API access.

---

## Tech Stack
- **Backend Framework**: Node.js with Express.js
- **Database**: MongoDB
- **File Handling**: Multer
- **Email Service**: Nodemailer
- **Templating Engine**: EJS
- **Environment Variables**: dotenv

---

## Installation

### Prerequisites
- Node.js (v14+ recommended)
- MongoDB (local or cloud instance, e.g., MongoDB Atlas)

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/dineshraj92422/Share-File-sharing.git
   cd Share-File-Sharing

2. Install dependencies:
   ```bash
   npm install
   
3. Create a .env file in the root directory and add the following variables:
    ```bash
     PORT=3000
     MONGO_DB_URL=<your_mongo_connection_string>
     SMTP_HOST=<your_smtp_host>
     SMTP_PORT=<your_smtp_port>
     MAIL_USER=<your_email>
     MAIL_PASS=<your_email_password>
     ALLOWED_CLIENTS=http://localhost:3000,http://localhost:5000
     APP_BASE_URL=http://localhost:3000

4. Start the server:
    ```bash
      npm start

### Project Structure
Share-file-sharing/
├── config/
│   ├── db.js           # MongoDB connection setup
├── models/
│   ├── file.js         # Mongoose schema for files
├── routes/
│   ├── files.route.js        # Routes for file uploads and email sharing
│   ├── download.route.js     # Routes for file downloads
│   ├── show.route.js         # Routes for rendering the download page
├── services/
│   ├── emailService.js  # Email service using Nodemailer
│   ├── emailTemplate.js # HTML email template
├── public/
│   ├── css/            # Static CSS files
│   ├── img/            # Static image files
│   ├── favicon.ico     # Favicon
├── views/
│   ├── download.ejs    # EJS template for the download page
├── .env                # Environment variables
├── server.js           # Entry point for the backend
├── script.js           # Script to clean up expired files
├── package.json        # Dependencies and scripts

