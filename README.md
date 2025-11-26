Vintage Reads – Online Bookstore

A full-stack MERN application where users can browse books, add them to cart, manage authentication, and admins can create/remove books.

🚀 Live Demo

Frontend: (https://vintagereadfrontend-1.onrender.com/)
Backend: (https://vintagereadsbackend.onrender.com)

📁 Project Structure
/client  → React + Redux frontend  
/server  → Node.js + Express + MongoDB backend

✨ Features
👤 User Features

User Registration & Login (JWT Authentication)

Login using Google OAuth (optional)

Browse all books

View book details

Add/remove/update cart

Protected checkout page

Search books by title

Login popup modal (AuthModal)

🛒 Cart Features

Add book to cart

Update quantity

Remove items

Checkout redirection (requires login)

🛠 Admin Features

Admin uses same login system 

Create Books – /admin/create

Delete Books – /admin/books/:id

Admin Dashboard UI

Protected admin routes

⚙️ Backend Features

REST API built with Express

MongoDB Atlas database

JWT authentication + role-based access

Secure password hashing (bcrypt)

CORS enabled for production

🧰 Tech Stack
Frontend

React.js (Vite)

Redux Toolkit

TailwindCSS

Axios

Lucide Icons

Backend

Node.js

Express.js

MongoDB (Mongoose)

bcrypt.js

jsonwebtoken

cors

dotenv
