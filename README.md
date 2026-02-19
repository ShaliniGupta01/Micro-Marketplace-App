# 🛒 Micro Marketplace App  
Full Stack Developer Intern Assignment  

A complete Micro Marketplace platform with:

- ✅ Backend (Node.js + Express + MongoDB)
- ✅ Web App (React)
- ✅ Mobile App (React Native – Expo)
- ✅ Authentication (JWT)
- ✅ Favorites System
- ✅ Search & Pagination
- ✅ Production Deployment

---

# 📌 Live Links

🌐 **Web App:**  
<Add Web Deploy Link Here>

📱 **Mobile App (Android Build):**  
https://expo.dev/accounts/shalini012/projects/mobile/builds/5d527cf1-bd64-46df-942a-19276be9cddb

🛠 **Backend API:**  
<Add Backend Deploy Link Here>

---

# 🏗 Project Architecture

```
micro-marketplace/
│
├── backend/     → Node.js + Express API
├── web/         → React Web Application
└── mobile/      → React Native Mobile App
```

---

# 🚀 Features Overview

## 🔐 Authentication
- User Registration
- User Login
- JWT-based authentication
- Password hashing (bcrypt)
- Protected routes

## 📦 Products
- Create Product
- Read Products
- Update Product
- Delete Product
- Search by title
- Pagination support

## ⭐ Favorites
- Add to favorites
- Remove from favorites
- User-specific favorite list

## 🎨 UI/UX
- Responsive Web UI
- Clean product cards
- Smooth micro-interactions
- Mobile-friendly design

---

# ⚙️ Backend Setup (Node.js + Express)

## 📂 Tech Stack
- Node.js
- Express
- MongoDB (Mongoose)
- JWT
- bcrypt

## 🔧 Installation

```bash
cd backend
npm install
```

```

## ▶️ Run Server

```bash
npm run dev
```

Runs on:
```
http://localhost:5000
```

---

## 🌱 Seed Data

```bash
node seed.js
```

Includes:
- 10 Products
- 2 Users

### 🔐 Test Credentials

User 1  
Email: soniya12@gmail.com
Password: 123456

User 2  
Email: rahul12@gmail.com
Password: 123456789

---

## 📡 API Endpoints

### Auth
POST /auth/register  
POST /auth/login  

### Products
GET /products  
GET /products/:id  
POST /products  
PUT /products/:id  
DELETE /products/:id  

### Favorites
POST /products/:id/favorite  
DELETE /products/:id/favorite  

### Search & Pagination

Example:
```
GET /products?search=phone&page=1&limit=5
```

---

# 🌐 Web App (React)

## 📂 Tech Stack
- React
- Axios
- React Router
- CSS / Tailwind

## 🔧 Installation

```bash
cd web
npm install
npm start
```

Runs on:
```
http://localhost:3000
```

## 🔗 Backend Configuration

Update:
```
src/services/api.js
```

```
const API = "https://micro-marketplace-appbackend.onrender.com";
```

---

## 💡 Features

- Login/Register
- Product listing
- Search & Pagination
- Product detail page
- Favorite toggle
- Responsive layout
- Creative UI interaction

---

# 📱 Mobile App (React Native + Expo)

## 📂 Tech Stack
- React Native
- Expo
- Axios
- React Navigation

## 🔧 Installation

```bash
cd mobile
npm install
npx expo start
```

---

## 📱 Android Production Build

Built using Expo EAS.

🔗 Build Link:
https://expo.dev/accounts/shalini012/projects/mobile/builds/5d527cf1-bd64-46df-942a-19276be9cddb

---

## 📡 Backend Configuration

Update:
```
mobile/services/api.js
```

```
const API = "https://your-backend-url.com";
```

---

# 🧪 Evaluation Criteria Covered

✔ Functionality  
✔ Authentication (JWT)  
✔ CRUD Operations  
✔ Search & Pagination  
✔ Favorites System  
✔ Code Structure  
✔ Responsive UI  
✔ Documentation  
✔ Seed Script  
✔ Deployment  

---



# 👩‍💻 Author

**Shalini**  
Full Stack Developer Intern Candidate  

GitHub: <Add GitHub Profile Link>  
Contact: <Add Email>

---

# 📝 Completion Window

Completed within 72 hours  
Submission Deadline: 20 February 2026

---

