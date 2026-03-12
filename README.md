# 🏨 **Smart Hotel Reservation System**

![React](https://img.shields.io/badge/React-Frontend-blue)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple)
![Tailwind](https://img.shields.io/badge/TailwindCSS-Styling-38B2AC)
![Status](https://img.shields.io/badge/Project-Active-success)

🚀 **Live Demo:**  
https://hotel-reservation-system-psi-dusky.vercel.app  

💻 **GitHub Repository:**  
https://github.com/yuvrajjuv/hotel-reservation-system  

---

## 📌 **Project Overview**

The **Smart Hotel Reservation System** is a modern web application that simulates intelligent room allocation in a multi-floor hotel environment.

Instead of assigning rooms randomly, the system allocates rooms in a way that **minimizes total travel time for guests across floors and corridors**.

The application visually represents a **10-floor hotel layout** and allows users to simulate room booking using an optimized allocation strategy.

This project demonstrates how **algorithm optimization and modern frontend development** can work together to build efficient and interactive systems.

---

## ✨ **Key Features**

### 🧠 **Smart Room Allocation**
Rooms are allocated using an optimized algorithm that reduces travel distance between selected rooms.

### 🏢 **Multi-Floor Hotel Visualization**
Displays a **10-floor hotel building layout** with clearly visible rooms.

### ⚡ **Interactive Booking System**
Users can select the number of rooms and the system automatically finds the best available combination.

### 🎲 **Random Occupancy Simulation**
Simulates real hotel occupancy by randomly filling rooms.

### 🔄 **Reset System**
Reset the entire layout and start a new simulation instantly.

### 📊 **Real-Time Room Status**

Rooms visually indicate their status:

🟢 **Available Rooms**  
🟡 **Allocated Rooms**  
🔴 **Occupied Rooms**

---

## 🧠 **Smart Allocation Algorithm**

The goal of the system is to **minimize total travel time between allocated rooms**.

Instead of randomly selecting rooms, the algorithm prioritizes:

• Rooms close together horizontally  
• Rooms on the same floor whenever possible  
• Floors that reduce vertical travel  

### **Travel Time Logic**

Travel time is calculated using:

Horizontal room distance  
+  
Vertical floor distance  

Example rule:

1 floor movement = 2 minutes

This ensures guests receive rooms with **minimum walking distance between them**.

---

## 🖥 **User Interface**

The application displays the hotel structure visually.

Example layout:

Floor 10  
1001 1002 1003 1004 1005 1006 1007  

Floor 9  
901 902 903 904 905 906 907 908 909 910  

...  

Floor 1  
101 102 103 104 105 106 107 108 109 110  

Users interact using:

• Room count input  
• **Book Best Rooms** button  
• **Random Occupancy** button  
• **Reset** button  

---

## 🛠 **Tech Stack**

⚛ **React** — Frontend Framework  

🎨 **Tailwind CSS** — Modern UI Styling  

⚡ **Vite** — Fast Build Tool  

🧠 **JavaScript** — Allocation Algorithm Logic  

---

## 🌐 **Live Demo**

Try the project here:

👉 https://hotel-reservation-system-psi-dusky.vercel.app

---

## 📂 **Project Structure**

hotel-reservation-system  
│  
├── frontend  
│   ├── src  
│   │   ├── App.jsx  
│   │   ├── main.jsx  
│   │   ├── index.css  
│   │  
│   ├── package.json  
│   ├── tailwind.config.js  
│   └── vite.config.js  
│  
└── README.md  

---

## 🚀 **Run Project Locally**

Clone repository

git clone https://github.com/yuvrajjuv/hotel-reservation-system.git

Go to project directory

cd hotel-reservation-system/frontend

Install dependencies

npm install

Run development server

npm run dev

Open browser

http://localhost:5173

---

## 📈 **Future Improvements**

Possible upgrades for the system:

🏨 Real hotel database integration  
🔐 User authentication system  
📅 Date-based booking system  
📱 Mobile responsive improvements  
🧠 Advanced allocation algorithms  

---

## 👨‍💻 **Developed By**

**Yuvraj Malviya**

Frontend Developer | Algorithm Enthusiast

---

## ⭐ **Support**

If you like this project, consider giving it a ⭐ on GitHub.
