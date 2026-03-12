🏨 Smart Hotel Reservation System

🚀 Live Demo:
https://hotel-reservation-system-psi-dusky.vercel.app

💻 GitHub Repository:
https://github.com/yuvrajjuv/hotel-reservation-system

---

📌 Project Overview

The Smart Hotel Reservation System is a modern web application that simulates intelligent room allocation in a multi-floor hotel.

Instead of randomly assigning rooms, this system allocates rooms in a way that minimizes the total travel time for guests across floors.

The project visually represents a 10-floor hotel building and provides an interactive interface where users can request rooms and the system intelligently finds the best available combination.

This project demonstrates how algorithm optimization and modern frontend development can work together to create efficient and visually interactive systems.

---

✨ Key Features

🧠 Smart Room Allocation

Rooms are allocated using an optimized logic that reduces the total travel distance between rooms.

🏢 Multi-Floor Hotel Visualization

The interface displays a 10-floor hotel layout with clearly visible rooms.

⚡ Interactive Booking System

Users can enter the number of rooms required and the system automatically selects the best available rooms.

🎲 Random Occupancy Simulation

Rooms can be randomly filled to simulate real hotel occupancy scenarios.

🔄 Reset Functionality

Reset the hotel layout instantly and start a new booking simulation.

📊 Real-Time Room Status

Room colors represent different states:

🟢 Available Rooms
🟡 Allocated Rooms
🔴 Occupied Rooms

---

🧠 Smart Allocation Algorithm

The main goal of the system is to minimize total travel time between allocated rooms.

Instead of spreading rooms randomly across floors, the system prioritizes:

• Rooms that are close together horizontally
• Rooms on the same floor when possible
• Floors that minimize vertical movement

Travel Time Logic

Travel time is calculated based on:

Horizontal movement between rooms
+
Vertical movement between floors

1 floor movement = 2 minutes

The algorithm ensures the selected rooms create the least total travel time.

---

🖥 User Interface

The interface visually represents the hotel building structure:

Floor 10
1001 1002 1003 1004 1005 1006 1007

Floor 9
901 902 903 904 905 906 907 908 909 910

...

Floor 1
101 102 103 104 105 106 107 108 109 110

Users can interact with the system using:

• Room input field
• Book Best Rooms button
• Random Occupancy simulation
• Reset functionality

---

🛠 Tech Stack

⚛ React — Frontend Framework
🎨 Tailwind CSS — Modern UI Styling
⚡ Vite — Fast Development & Build Tool
🧠 JavaScript — Allocation Algorithm Logic

---

🌐 Live Demo

Try the live project here:

https://hotel-reservation-system-psi-dusky.vercel.app

---

📂 Project Structure

hotel-reservation-system

frontend
┣ src
┃ ┣ App.jsx
┃ ┣ main.jsx
┃ ┣ index.css
┃ ┗ assets

┣ package.json
┣ tailwind.config.js
┗ vite.config.js

README.md

---

🚀 Run Project Locally

Clone the repository

git clone https://github.com/yuvrajjuv/hotel-reservation-system.git

Go to project directory

cd hotel-reservation-system/frontend

Install dependencies

npm install

Start development server

npm run dev

Open browser

http://localhost:5173

---

📈 Future Improvements

Possible upgrades for this system:

🏨 Real hotel database integration
🔐 User authentication system
📅 Date-based room booking
📱 Mobile responsive layout improvements
🧠 Advanced room allocation algorithms

---

👨‍💻 Developed By

Yuvraj Malviya

Frontend Developer | Algorithm Enthusiast

---

⭐ Support

If you like this project, please give it a ⭐ on GitHub.
