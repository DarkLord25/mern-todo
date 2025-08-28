# MERN Todo App ✅

A full-stack Todo application built using the **MERN stack (MongoDB, Express, React, Node.js, Next.js)**.  
This app lets users add, update, delete, and view todos with persistent storage in MongoDB.

---

## 🚀 Project Setup Instructions

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/DarkLord25/mern-todo.git
cd mern-todo
```
### 2️⃣ Backend Setup (Express + MongoDB)

Go to the backend folder:
```bash
cd backend
```
Install dependencies:
```bash
npm install
```
Create a .env file inside the backend/ folder and add:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
Start the backend server:
```bash
npm start
```

### 3️⃣ Frontend Setup (Next.js)

Move to the frontend folder:
```bash
cd ../frontend
```
Install dependencies:
```bash
npm install
```
Update the API base URL inside lib/api.js:

- For local development:
```js
const API_BASE = "http://localhost:5000";
```
- For production(after deploying backend on Render/Heroku), replace with:
```js
const API_BASE = "https://your-backend-service-url.onrender.com";
```
Start the frontend development server:
```bash
npm run dev
```
The frontend will run on http://localhost:3000

### 4️⃣ Deployment
**Deploy Backend (Render)**

Push code to GitHub.
Create a new Web Service on Render.
Connect your GitHub repo → select backend as root directory.
Add environment variables (from .env) in Render dashboard.
Deploy → get your backend live URL.

**Deploy Frontend (Vercel)**

Go to Vercel and import your GitHub repo.
In project settings:
Root Directory → frontend
Build Command: npm run build
Output Directory: .next
Update lib/api.js in frontend to point to your Render backend URL.
Redeploy frontend → your app will be live!

## TECH STACK used

Frontend: Next.js (React)
Backend: Node.js, Express.js
Database: MongoDB (Atlas)
Deployment: Vercel (Frontend), Render (Backend)

## BONUS:

- Responsive UI (mobile + desktop).
- Deployed using modern cloud services.
- Environment variables for security.
