# 🚀 ShareMe - File Sharing Backend  

**ShareMe** is a secure and efficient backend service for a file-sharing application that allows users to upload, share, and download files seamlessly. This backend is designed with features like email notifications, link expiration, and automatic cleanup, making it a reliable choice for sharing files in a secure and user-friendly way.  

---

## ✨ Key Features  
- 📂 **File Uploads**: Supports uploading files up to **100MB**.  
- 🔗 **Shareable Links**: Generate unique, shareable links for uploaded files.  
- 📧 **Email Notifications**: Send file-sharing links directly to recipients' email addresses.  
- ⏱ **Link Expiration**: Automatically expires links after **24 hours** for enhanced privacy.  
- 🗑️ **Automatic Cleanup**: Deletes expired files and corresponding database entries.  
- 🔒 **Secure Access**: Implements **CORS** to restrict unauthorized API access.  

---

## 🔧 Tech Stack  
- **Backend Framework**: [Node.js](https://nodejs.org/) with [Express.js](https://expressjs.com/)  
- **Database**: [MongoDB](https://www.mongodb.com/)  
- **File Handling**: [Multer](https://github.com/expressjs/multer)  
- **Email Service**: [Nodemailer](https://nodemailer.com/)  
- **Templating Engine**: [EJS](https://ejs.co/)  
- **Environment Variables**: [dotenv](https://www.npmjs.com/package/dotenv)  

---

## 🚀 Getting Started  

### Prerequisites  
Before you begin, ensure you have the following installed:  
- **Node.js** (v14 or above recommended)  
- **MongoDB** (local instance or cloud, e.g., MongoDB Atlas)  

### Installation  

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/dineshraj92422/Share-File-Sharing.git
   cd Share-File-Sharing
   ```

2. **Install Dependencies**  
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and configure the following:  
   ```env
   PORT=3000
   MONGO_DB_URL=<your_mongo_connection_string>
   SMTP_HOST=<your_smtp_host>
   SMTP_PORT=<your_smtp_port>
   MAIL_USER=<your_email>
   MAIL_PASS=<your_email_password>
   ALLOWED_CLIENTS=http://localhost:3000,http://localhost:5000
   APP_BASE_URL=http://localhost:3000
   ```

4. **Start the Server**  
   ```bash
   npm start
   ```  
   Your backend will be running at `http://localhost:3000`.  

---

## 📁 Folder Structure  

```plaintext
Share-file-sharing/
├── config/
│   └── db.js           # MongoDB connection setup
├── models/
│   └── file.js         # Mongoose schema for files
├── routes/
│   ├── files.route.js        # Routes for file uploads and email sharing
│   ├── download.route.js     # Routes for file downloads
│   ├── show.route.js         # Routes for rendering the download page
├── services/
│   ├── emailService.js  # Email service using Nodemailer
│   ├── emailTemplate.js # HTML email template
├── public/
│   ├── css/             # Static CSS files
│   ├── img/             # Static image files
│   └── favicon.ico      # Favicon
├── views/
│   └── download.ejs     # EJS template for the download page
├── .env                 # Environment variables
├── server.js            # Entry point for the backend
├── script.js            # Script to clean up expired files
├── package.json         # Dependencies and scripts
```

---

## 🖊️ API Documentation  

### 1. **File Upload**  
- **Endpoint**: `POST /api/files`  
- **Request Body**: `multipart/form-data` with key `myfile`.  
- **Response**:  
   ```json
   {
     "file": "http://localhost:3000/files/<uuid>"
   }
   ```  

### 2. **Send File via Email**  
- **Endpoint**: `POST /api/files/send`  
- **Request Body**:  
   ```json
   {
     "uuid": "<file_uuid>",
     "emailTo": "recipient@example.com",
     "emailFrom": "sender@example.com"
   }
   ```  
- **Response**:  
   ```json
   {
     "success": true
   }
   ```  

### 3. **File Download**  
- **Endpoint**: `GET /files/<uuid>`  
- **Description**: Renders the download page with file details.  

### 4. **Direct File Download**  
- **Endpoint**: `GET /files/download/<uuid>`  
- **Description**: Directly downloads the file.

---

## 🗑️ Automatic Cleanup  

The project includes a `script.js` file to clean up files and database records older than **24 hours**. Run the script manually using:  
```bash
node script.js
```

---

## 📧 Email Notifications  

Email sharing is implemented using **Nodemailer**. Configure the SMTP settings in the `.env` file:  
```env
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
MAIL_USER=<your_email>
SMTP_PASS=<your_password>
```

**Example Email Template**:  
- **Subject**: `ShareMe File Sharing`  
- **Body**:  
   ```
   Hi there,
   <Sender Email> has shared a file with you.
   File Size: 2MB
   Link Expiry: 24 hours
   [Download File]
   ```

---

## 🌟 Example `.env` Configuration  
```env
PORT=3000
MONGO_DB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/inshare?retryWrites=true&w=majority
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
MAIL_USER=<your_email>
MAIL_PASS=<your_password>
ALLOWED_CLIENTS=http://localhost:3000,http://localhost:5000
APP_BASE_URL=http://localhost:3000
```

---

## 🤝 Contribution  

We welcome contributions! Here’s how you can get started:  

1. **Fork the repository**.  
2. Create a new branch for your feature:  
   ```bash
   git checkout -b feature-name
   ```  
3. Commit your changes:  
   ```bash
   git commit -m "Add feature-name"
   ```  
4. Push to your branch:  
   ```bash
   git push origin feature-name
   ```  
5. Open a **Pull Request**.

---

## 📜 License  

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.  

---

## 🙏 Acknowledgments  

- Thanks to **Coders Gyan** for inspiration and tutorials.  
- Powered by: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/), and [MongoDB](https://www.mongodb.com/).  

---

### 📌 Stay Awesome!  
ShareMe simplifies file sharing with ease and security. Happy Sharing! 🎉  

