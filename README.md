# 🚀 Expense Tracker - Frontend (Client)

This is the frontend of the **Expense Tracker** application built using **React.js**. The app allows users to sign up, log in, manage their expenses, and export them as a PDF.

## 🔗 Production URL
- [Production URL](https://github.shivampatanwar.com/client)  

- *(Click the link above to open in a new tab.)*  
- 📌 **Note:** The server will respond **50 seconds** after the first request due to initial cold start delays.  


### 📂 Expense Tracker Client - Folder Structure

    The following structure represents the organization of the frontend (client) directory:

    client/
    ├── public/           
    │   └── index.html     
    ├── src/          
    │   ├── components/   
    │   │   ├── Expenses.jsx    
    │   │   ├── Login.jsx        
    │   │   └── Signup.jsx       
    │   ├── api/           
    │   │   └── api.js      
    │   ├── styles/         
    │   │   ├── App.css     
    │   │   └── Expenses.css 
    │   ├── App.jsx        
    │   └── main.jsx
    └── vite.config.js


## 📌 Features
- User registration and login
- Add, view, and delete expenses
- Income, expenses, and balance summary
- PDF export of expenses
- Responsive design for mobile and tablet
- Protected routes (Dashboard accessible only after login)


## 🛠️ Technologies Used
- **React.js** for UI
- **React Router** for navigation
- **Axios** for making API requests
- **jsPDF & jsPDF-AutoTable** for PDF export


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

### 📂 Expense Tracker Server - Folder Structure

    The following structure represents the organization of the backend (server) directory:

    expense-tracker-server/
    ├── config/
    │   ├── db.js
    ├── controllers/
    │   ├── authController.js
    │   ├── expenseController.js
    ├── middleware/
    │   ├── authMiddleware.js
    │   ├── errorMiddleware.js
    ├── models/
    │   ├── User.js
    │   ├── Expense.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── expenseRoutes.js
    ├── .env
    ├── server.js
    ├── package.json


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
    DB_HOST=your-mysql-host
    DB_USER=your-mysql-user
    DB_PASSWORD=your-mysql-password
    DB_NAME=your-database-name
    JWT_SECRET=your-jwt-secret


- ### Start the Development Server
    ```bash
    npm start

- ### Clone the Repository
    ```bash
    git clone https://github.com/shivampatanwar/expense-tracker-demo.git
    cd expense-tracker-demo/server

## 🔌 API Endpoints

- ### 🔐 Authentication
    | Method | Endpoint             | Description            |
    |--------|----------------------|------------------------|
    | `POST` | `/api/auth/register` | Register a new user    |
    | `POST` | `/api/auth/login`    | Login user & get JWT   |

- ### 💰 Expenses
    | Method  | Endpoint            | Description                     |
    |---------|---------------------|---------------------------------|
    | `GET`   | `/api/expenses`     | Get all expenses (protected)    |
    | `POST`  | `/api/expenses`     | Add a new expense (protected)   |
    | `DELETE`| `/api/expenses/:id` | Delete an expense (protected)   |

⚠️ **Note:** Use the **JWT Token** in the `Authorization` header for protected routes.





## MIT License

    Copyright (c) 2025 Shivam Patanwar

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.
