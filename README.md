# 🚌 Bus Reservation System

A full-stack web application for managing bus ticket bookings, schedules, and user reservations.

---

## 🚀 Features

- User registration and login
- Admin panel to manage buses, routes, and schedules
- Book/cancel bus tickets
- Real-time seat availability tracking
- Email confirmations (optional)
- Responsive UI for desktop and mobile

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Tailwind CSS / Bootstrap

### Backend:
- Node.js
- Express.js
- MongoDB (Mongoose)

---

## 📁 Project Structure

```
Bus_Reservation_System/
│
├── frontend/               # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/       # API calls
│   │   └── App.jsx
│   └── package.json
│
├── backend/                # Node + Express backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   ├── server.js
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/ADITYA0018TH/Bus_Reservation_System.git
cd Bus_Reservation_System
```

Install dependencies:

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

---

## 🧪 Running the App

Start the backend server:

```bash
cd backend
npm start
```

Start the frontend dev server:

```bash
cd ../frontend
npm start
```

The app should now be running on:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

---

## 🧑‍💻 Author

- **Aditya Raj**  
  GitHub: [@ADITYA0018TH](https://github.com/ADITYA0018TH)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
