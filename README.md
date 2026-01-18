# 🌍 Browser Geolocation & Distance Calculator

### Homework Assignment - Browser Geolocation API

## 📖 Project Overview
This project is a web application designed to demonstrate the capabilities of the **HTML5 Geolocation API**. It allows users to retrieve their real-time geographic coordinates (Latitude and Longitude) and calculate the straight-line distance to any other target destination on Earth using the **Haversine Formula**.

The application features a responsive, user-friendly interface built with a focus on clean design and form validation.

---

## 📺 Video Presentation
I have recorded a short video demonstrating the functionality, code structure, and logic behind this project.

**▶️ Click here to watch: https://youtu.be/4dzmXlQwgjE**

---

## 🚀 Key Features
1.  **Real-Time Location:** Uses `navigator.geolocation` to fetch the user's current GPS position.
2.  **Permission Handling:** Gracefully handles scenarios where the user denies location access.
3.  **Form Validation:** Prevents empty submissions and ensures valid coordinates are entered.
4.  **Instant Calculation:** Uses JavaScript Event Listeners to calculate distance without reloading the page.
5.  **Mathematical Accuracy:** Implements the Haversine formula to account for the Earth's curvature.

---

## 🛠 Technical Implementation

### 1. The Geolocation API
I utilized the browser's built-in API to access the user's location. This is an **asynchronous** operation, meaning the code waits for the user to click "Allow" before proceeding.

```javascript
navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
