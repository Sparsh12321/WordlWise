
# 🌍 WorldWise

A clean, responsive web app to track and document all the places you've visited worldwide. Built during Jonas Schmedtmann’s Ultimate React Course, this project includes location-based notes and interactive maps, built with modern React tools.

---

## 🎯 Live Demo
https://wordl-wise.vercel.app
![image](https://github.com/user-attachments/assets/6dc90a7f-eaa3-445c-b857-dc755dd007bc)
![image](https://github.com/user-attachments/assets/f6e370ec-667e-4aaf-862b-302e9f42a20a)

---

## 🔍 Overview

WorldWise allows users to:

- Log cities they've visited, including photos and notes.
- Visualize all entries on an interactive world map.
- Sort visits and search by city or country.
- Save each visit as a unique list of locations.

Built with React, TypeScript, React Query, Context API, React Router v6, and React-Leaflet.

---

## 🧰 Tech Stack

- **Framework:** React + Vite  
- **Language:** TypeScript  
- **Data Fetching & Caching:** React Query  
- **State Management:** Context API + React Router v6 (URL state)  
- **Maps:** React-Leaflet (OpenStreetMap)  
- **Routing:** React Router v6  
- **Styling:** CSS + Tailwind (or CSS Modules)  
- **API:** Mock JSON API

---

## 📁 Project Structure

```plaintext
📦 WorldWise
 ┣ 📂 public            # Static files (index.html, favicon, etc.)
 ┣ 📂 src
 ┃ ┣ 📂 api            # Modules to fetch/save visit data
 ┃ ┣ 📂 components     # Reusable UI components
 ┃ ┣ 📂 context        # Context providers (e.g., authentication, visits)
 ┃ ┣ 📂 pages          # Route-level components (Home, AddVisit, VisitDetails)
 ┃ ┣ 📂 styles         # Global styles or CSS/Tailwind config
 ┃ ┣ 📂 utils          # Helpers (formatting dates, generating IDs)
 ┃ ┗ 📜 main.tsx       # Application entry, includes Router & Context
 ┣ 📜 README.md
 ┣ 📜 package.json
 ┗ 📜 tsconfig.json
