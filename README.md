# 🚀 BrandHive

**BrandHive** is a modern service booking platform that connects users with service providers through a clean, responsive, and intuitive interface. It enables users to explore services, view provider details, and book services seamlessly.

---

## ✨ Key Features

* 🔍 **Service Discovery** – Browse services by categories
* 👤 **User Authentication** – Secure login/signup using Firebase
* 📅 **Booking System** – Book services via a smooth modal interface
* ⚡ **Real-Time Database** – Firestore integration for storing users & bookings
* 🎨 **Modern UI/UX** – Built with Tailwind CSS + Framer Motion
* 📱 **Responsive Design** – Works across mobile, tablet, and desktop
* 🇮🇳 **Localized Experience** – Indian pricing (₹), names, and realistic data

---

## 🛠 Tech Stack

### Frontend

* **React (Vite)** – Fast and scalable UI development
* **Tailwind CSS** – Utility-first styling
* **React Router DOM** – Client-side routing
* **Framer Motion** – Animations
* **Lucide React** – Icons

### Backend (BaaS)

* **Firebase Authentication** – User login/signup
* **Firestore Database** – Stores users and bookings

---

## 📁 Project Structure

```
BrandHive/
├── client/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Application pages (routes)
│   │   ├── firebase/       # Firebase config & auth logic
│   │   ├── services/       # Backend interaction (Firestore)
│   │   ├── context/        # Global state management
│   │   ├── data/           # Mock data
│   │   ├── App.jsx         # Routing setup
│   │   └── main.jsx        # Entry point
│   ├── public/
│   └── package.json
└── README.md
```

---

## ⚙️ How It Works

### 🔐 Authentication Flow

1. User signs up / logs in via **AuthModal**
2. Firebase Authentication verifies user
3. User data is stored in **Firestore (****`users`**** collection)**

---

### 📅 Booking Flow

1. User selects a service
2. Opens **BookingModal**
3. Submits booking form
4. Data is sent via `bookingService.js`
5. Stored in **Firestore (****`bookings`**** collection)**

---

## 🚀 Getting Started

### Prerequisites

* Node.js (v16+)
* Firebase account

---

### Installation

```bash
git clone <your-repo-link>
cd BrandHive/client
npm install
```

---

### Firebase Setup

Create a `.env.local` file inside `client/` and add:

```
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

### Run the App

```bash
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 📜 Available Scripts

* `npm run dev` → Start development server
* `npm run build` → Production build
* `npm run preview` → Preview build
* `npm run lint` → Code linting

---

## 🔮 Future Improvements

* Provider dashboard
* Reviews & ratings system
* Advanced filters (price, location, rating)
* Role-based authentication (User / Provider)
* Replace mock data with live Firestore data

---

## ❤️ Conclusion

BrandHive demonstrates a real-world service marketplace workflow with modern technologies, focusing on usability, scalability, and clean design.

---
