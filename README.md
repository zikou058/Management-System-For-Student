# 🎓 Student Management System

![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)

A modern and responsive **Student Management System** dashboard. This project focuses on providing a clean administrative interface for managing student data, built with a utility-first approach using **Tailwind CSS** and dynamic **Vanilla JavaScript**.

## 🚀 Features

* **Student Data Table:** Organized view of student records with status indicators.
* **Search Functionality:** Real-time filtering to find specific students quickly.
* **Interactive Modals:** User-friendly forms for adding or editing student information.
* **Fully Responsive:** Optimized for a seamless experience on desktop.

## 🛠️ Tech Stack

* **Frontend:** HTML5, Modern JavaScript (ES6+)
* **Styling:** Tailwind CSS (v3/v4)
* **Workflow:** Git & GitHub

## 📂 Project Structure

```
├── MANAGEMENT SYSTEM/ 
├── js/                  # Source files (main logic & styles)
│   ├── script.js        # JavaScript modules
    ├── etudiants.js     # 
    ├── constants.js     # API
│   └── .gitignore       # File git ignore  
├── node_modules         # Tailwind CSS configuration
├── etudiants.json       # json file 
├── index.html           # 
├── package.json         # Project metadata and dependencies
├── package-lock.json    #
└── README.md            # Project documentation

```
## ⚙️ Setup & Installation

### 1. Clone the repository
```bash
git clone git@github.com:zikou058/Management-System-For-Student.git

cd Management-System-For-Student

```
### 2. Install Dependencies
``` 
npm install
```
### 2. Setup JSON Server (The Database)
This project uses json-server to manage student data.

To install it globally (if you haven't already):
``` bash
npm install -g json-server
```
To start the server: Run the following command to launch the database on port 3000:
``` bash
npx json-server etudiants.json --port 3000
```
