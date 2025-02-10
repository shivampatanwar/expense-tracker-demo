# 🚀 Expense Tracker - Frontend (Client)

This is the frontend of the **Expense Tracker** application built using **React.js**. The app allows users to sign up, log in, manage their expenses, and export them as a PDF.

## 📌 Features
- User registration and login
- Add, view, and delete expenses
- Income, expenses, and balance summary
- PDF export of expenses
- Responsive design for mobile and tablet
- Protected routes (Dashboard accessible only after login)

---

## 🛠️ Technologies Used
- **React.js** for UI
- **React Router** for navigation
- **Axios** for making API requests
- **jsPDF & jsPDF-AutoTable** for PDF export

---

## ⚡ Getting Started

- ### Install Dependencies
    ```bash
    npm install

- ### Set Up Environment Variables
    ```bash
    VITE_API_URL=http://localhost:5000

- ### Start the Development Server
    ```bash
    npm run dev

- ### Clone the Repository
    ```bash
    git clone https://github.com/shivampatanwar/expense-tracker-demo.git
    cd expense-tracker-demo/client

---


# 🚀 Expense Tracker - Backend (Server)

This is the **backend** of the **Expense Tracker** application. It is built using **Node.js, Express.js, Sequelize ORM, and MySQL**. The backend handles **user authentication, expense management, and database operations**.

---

## 📌 Features

- **User Authentication** (Register, Login, JWT-based authentication)
- **CRUD Operations** for Expenses
- **MySQL Database** with Sequelize ORM
- **Protected Routes** (JWT-based authorization)
- **Deployed to Render**


## 🛠️ Technologies Used

- **Node.js & Express.js** (Backend API)
- **MySQL & Sequelize ORM** (Database)
- **JWT (JSON Web Token)** (Authentication)
- **bcrypt.js** (Password Hashing)
- **dotenv** (Environment Variables)
- **CORS** (Cross-Origin Resource Sharing)
- **helmet** (Security Middleware)
- **express-rate-limit** (Request Rate Limiting)



## ⚡ Getting Started

- ### Install Dependencies
    ```bash
    npm install

- ### Set Up Environment Variables
    ```bash
    PORT=5000
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=expense_tracker
    JWT_SECRET=your-secret-key

- ### Start the Development Server
    ```bash
    npm start

- ### Clone the Repository
    ```bash
    git clone https://github.com/shivampatanwar/expense-tracker-demo.git
    cd expense-tracker-demo/server

## 🔌 API Endpoints

- ### 🔐 Authentication
    | Method | Endpoint             | Description             |
    |--------|----------------------|-------------------------|
    | `POST` | `/api/auth/register` | Register a new user    |
    | `POST` | `/api/auth/login`    | Login user & get JWT   |

- ### 💰 Expenses
    | Method  | Endpoint            | Description                      |
    |---------|---------------------|----------------------------------|
    | `GET`   | `/api/expenses`     | Get all expenses (protected)    |
    | `POST`  | `/api/expenses`     | Add a new expense (protected)   |
    | `DELETE`| `/api/expenses/:id` | Delete an expense (protected)   |

⚠️ **Note:** Use the **JWT Token** in the `Authorization` header for protected routes.
