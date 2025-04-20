# Admin Dashboard

A modern admin dashboard built with React, Tailwind CSS, and Shadcn/ui components.

## Features

- **User Authentication**
  - Secure login/logout functionality
  - Session management using localStorage
- **Dashboard Overview**
  - Key metrics visualization (Students, Transactions, Wallet Balance)
  - Inventory stock monitoring
  - Low stock alerts
- **Recent Transactions**
  - Tabular view of latest transactions
  - Student, ID, amount, item, and time details

## Technologies Used

- **Frontend**
  - React 18
  - Tailwind CSS
  - Shadcn/ui component library
  - Lucide React icons
- **Routing**
  - React Router v6
- **Build Tool**
  - Vite

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/admin-dashboard.git
   cd admin-dashboard
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
src/
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── sidebar.jsx        # Navigation sidebar
│   ├── header.jsx         # Dashboard header
|   |-- stats-card.jsx     # cards for stats
│   └── recent-transactions.jsx # Transactions table
├── pages/                 # Application pages
│   ├── login.jsx          # Login page
│   └── dashboard.jsx      # Main dashboard
├── main.jsx               # Application entry point
└── assets/                # Static assets
```

## Authentication

Default login credentials:
- **Username**: `admin`
- **Password**: `admin123`
