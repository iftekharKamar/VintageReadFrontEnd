.

📚 Vintage Reads – Modern Online Bookstore
A full-stack MERN application with admin controls, secure authentication, and seamless book browsing.
<p align="center"> <img src="https://img.shields.io/badge/React-18.0-blue?style=for-the-badge&logo=react" /> <img src="https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux" /> <img src="https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js" /> <img src="https://img.shields.io/badge/MongoDB-Atlas-darkgreen?style=for-the-badge&logo=mongodb" /> <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel" /> </p>
🚀 Live Demo

🔹 Frontend: https://vintagereadfrontend-1.onrender.com
🔹 Backend: https://vintagereadsbackend.onrender.com

📘 Table of Contents

✨ Features

🛠 Tech Stack

📂 Folder Structure

⚙️ Installation

🔗 API Endpoints

🧪 Admin Credentials

🚀 Deployment Guide

📸 Screenshots

🤝 Contributing

📄 License

✨ Features
👤 User Features

✔ Register & Login (JWT)
✔ Google OAuth login
✔ Browse books
✔ View product details
✔ Add to cart / update quantity
✔ Search books by title
✔ Login modal (popup)
✔ Fully responsive UI

🛠 Admin Features

✔ Admin login using JWT
✔ Add a book (with image upload)
✔ Delete a book
✔ Admin Dashboard UI
✔ Protected APIs

🧰 Tech Stack
Frontend

React + Vite ⚡

Redux Toolkit

TailwindCSS

Axios

Lucide Icons

Backend

Node.js + Express

MongoDB (Mongoose)

JSON Web Token

bcrypt.js

CORS + dotenv

📂 Folder Structure
VintageReads/
│
├── client/           # React Frontend
│   ├── src/
│   ├── public/
│   └── vite.config.js
│
└── server/           # Node.js Backend
    ├── models/
    ├── routes/
    ├── controllers/
    ├── middleware/
    ├── config/
    └── server.js

⚙️ Installation
🔹 Clone Repository
git clone https://github.com/YOUR_USERNAME/VintageReads.git
cd VintageReads

🖥 Backend Setup
cd server
npm install

Create .env
MONGO_URI=your_mongo_url
JWT_SECRET=your_secret
PORT=5000
CLIENT_URL=http://localhost:5173


Start server:

npm start

🎨 Frontend Setup
cd client
npm install

Create .env
VITE_API_URL=https://your-backend-url.com


Run frontend:

npm run dev

🔗 API Endpoints
📘 Authentication
Method	Endpoint	Description
POST	/auth/register	Register user
POST	/auth/login	Login user
GET	/auth/me	Get profile
📚 Books
Method	Endpoint	Description
GET	/books	Get all books
GET	/books/:id	Get book by ID
🛠 Admin
Method	Endpoint	Description
POST	/admin	Create book
DELETE	/admin/books/:id	Delete book
🧪 Admin Credentials

💡 (Only for development)

email: admin@example.com
password: admin123

🚀 Deployment Guide
🌐 Frontend (Vercel)

Framework: Vite

Build command: npm run build

Output folder: dist

Env variables:

VITE_API_URL

🟢 Backend (Render)

Runtime: Node

Start command:

node server.js


Add env variables from your .env

Allow CORS from your Vercel domain

📸 Screenshots

(You can add your own screenshots)

🖼 Home  
🖼 Book Grid  
🖼 Product Detail  
🖼 Admin Dashboard  
🖼 Add Book Form  

🤝 Contributing

Pull Requests are welcome!
Please open an issue for new features or improvements.

📄 License

MIT License © 2025 — Vintage Reads
