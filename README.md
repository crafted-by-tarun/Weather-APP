# Weather-APP
# 🌦️ Weather App

A modern **Weather Application** built using **HTML, CSS, and JavaScript** to practice real-world frontend concepts like **API integration, DOM manipulation, and browser features**.

---

## 🚀 Features

- 📍 **Location-Based Weather Detection**
  - Requests location access on first load
  - Fetches real-time weather data using the browser’s Geolocation API

- 🌍 **Search Weather by City**
  - Search weather information for any city worldwide
  - Dynamic UI updates without page reload

- 🔄 **Tabbed Interface**
  - Switch between:
    - **Your Weather** (current location)
    - **Search Weather** (custom city)

- 💾 **Session Storage Support**
  - Stores user coordinates in `sessionStorage`
  - Prevents repeated permission requests

- ⏳ **Loading State Handling**
  - Displays a loading screen while fetching weather data

- 📊 **Weather Information Display**
  - Temperature (°C)
  - Wind Speed
  - Humidity
  - Cloud Coverage
  - Weather description and icon
  - City and country (with dynamic country flag)

---

## 🎨 UI & UX Highlights

- Glassmorphism UI using `backdrop-filter`
- Gradient backgrounds and soft shadows
- Smooth transitions using CSS scaling
- Clean, modern, and user-friendly layout

---

## 🛠️ Tech Stack

- **HTML** – Structure and semantic markup  
- **CSS** – Styling, animations, glassmorphism effects  
- **JavaScript** – Core logic, DOM manipulation, state handling  
- **OpenWeather API** – Real-time weather data  

---

## ⚙️ How It Works

1. On load, the app checks for saved coordinates in `sessionStorage`.
2. If not found, it asks for location permission.
3. Weather data is fetched using latitude & longitude.
4. Users can also search weather by city name.
5. UI updates dynamically based on user actions and API responses.

---


---

## 🧠 Learning Outcomes

- JavaScript DOM manipulation
- Working with REST APIs
- Asynchronous programming (`async/await`)
- Browser APIs (Geolocation, Session Storage)
- UI state management
- Modern CSS techniques

---

## 🔮 Future Improvements

- Dynamic background changes based on weather
- Extended weather forecasts
- Additional animations and UI effects
- Improved error handling
- Better mobile responsiveness

---

## 📌 Note

This project was built for **learning and practice purposes** and will be improved over time.

---

## 🤝 Feedback

Suggestions and feedback are always welcome!

