# Internshala Clone

This project is a frontend clone of Internshala built using React.js.
It includes realistic internship filtering logic, responsive UI, loading animations, searchable dropdowns, and a clean user experience similar to the actual platform.

LIVE LINK:https://internshala-clone-alpha.vercel.app/
---

# Features

## Internship Filters

Users can filter internships using:

* Profile/Profession dropdown
* Location dropdown
* Duration dropdown
* Minimum stipend slider
* Work From Home filter
* Part-time filter
* Job Offer filter
* Fast Response filter
* Women Internship filter
* Start Date filter

All filters work together dynamically.

---

# UI Features

* Responsive layout
* Sticky filter sidebar
* Professional internship cards
* Hover effects
* Skeleton loading animation
* Searchable dropdowns
* Calendar date picker
* Smooth scroll-to-top on filtering
* Broken logo fallback handling

---

# Tech Stack

* React.js
* JavaScript
* CSS3
* React Icons
* React Select
* React Datepicker

---

# Installation

## 1. Clone the Repository

```bash id="44d5ya"
git clone <your-repository-link>
```

---

## 2. Open the Project Folder

```bash id="wvj7m1"
cd internshala-clone
```

---

## 3. Install Dependencies

```bash id="sgo6sp"
npm install
```

---

# Required Packages

If needed, install these packages manually:

```bash id="jj1kw8"
npm install react-icons
npm install react-datepicker
npm install react-select
```

---

# Run the Project

Start the development server:

```bash id="h87yd8"
npm run dev
```

After running the command, open:

```txt id="fd3bvy"
http://localhost:5173
```

in your browser.

---

# Folder Structure

```txt id="q7s2aj"
src/
│
├── assets/
├── components/
│   ├── filters/
│   ├── footer/
│   ├── internships/
│   ├── navbar/
│   ├── sections/
│   └── skeletons/
│
├── pages/
├── services/
├── styles/
└── App.jsx
```

---

# Main Functionalities

## Dynamic Filtering

The internship list updates instantly whenever filters are changed.

Examples:

* Bangalore + Marketing
* Work From Home + ₹10K stipend
* Part-time + Job Offer

---

## Loading Experience

Whenever filters are changed:

* loading skeletons appear
* page scrolls to top
* filtered results load smoothly

---

## Responsive Design

The project works properly on:

* Desktop
* Tablet
* Mobile devices

---

# What I Learned

This project helped in understanding:

* React state management
* Component structure
* Dynamic filtering logic
* Responsive UI design
* Skeleton loading implementation
* Real-world frontend practices

---

# Author

Dhruv Mayank

---

# Project Status

Frontend project completed successfully with production-style filtering logic and responsive UI.
