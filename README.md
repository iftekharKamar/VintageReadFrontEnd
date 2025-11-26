# 📚 Vintage Reads – Modern Online Bookstore

**A full-stack MERN application with robust admin controls, secure authentication, and a seamless browsing experience for vintage book lovers.**

<p align="center">
  <img src="https://img.shields.io/badge/React-18.0-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Redux-Toolkit-purple?style=for-the-badge&logo=redux" />
  <img src="https://img-shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js" />
  <img src="https://img.shields.io/badge/MongoDB-Atlas-darkgreen?style=for-the-badge&logo=mongodb" />
  <img src="https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel" />
</p>

## 🚀 Live Demo

Experience the application live:

| Component | URL |
| :--- | :--- |
| **Frontend** (Vercel) | [https://vintagereadfrontend-1.onrender.com](https://vintagereadfrontend-1.onrender.com) |
| **Backend** (Render) | [https://vintagereadsbackend.onrender.com](https://vintagereadsbackend.onrender.com) |

---

## ✨ Features

This application is split into two distinct, feature-rich sections: **User** and **Admin**.

### 👤 User Features

* **Secure Authentication:** Seamless **Register & Login** with **JWT** and one-click **Google OAuth login**.
* **Book Browsing:** Easily **Browse books**, **View product details**, and utilize the **Search books by title** feature.
* **E-commerce Core:** **Add to cart / update quantity** functionality.
* **Modern UI:** Features a convenient **Login modal (popup)** and a **Fully responsive UI** for all devices.

### 🛠 Admin Features

* **Protected Access:** Dedicated **Admin login using JWT** with protected APIs.
* **Content Management:** Full CRUD (Create, Read, Update, Delete) capability:
    * **Add a book** (including image upload).
    * **Delete a book**.
* **Dashboard:** Dedicated **Admin Dashboard UI** for managing inventory.

---

## 🧰 Tech Stack

Vintage Reads is built using the **MERN stack**, leveraging modern tools for a fast, scalable, and maintainable application. 

[Image of MERN Stack Diagram]


### Frontend
* **Framework:** **React** + **Vite** ⚡ (Fast build tooling)
* **State Management:** **Redux Toolkit**
* **Styling:** **TailwindCSS** (Utility-first framework)
* **HTTP Client:** **Axios**
* **Icons:** **Lucide Icons**

### Backend
* **Runtime/Framework:** **Node.js** + **Express**
* **Database:** **MongoDB** (with **Mongoose** ORM)
* **Authentication:** **JSON Web Token** (JWT) & **bcrypt.js** (for password hashing)
* **Middleware:** **CORS** + **dotenv**
