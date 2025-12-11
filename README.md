# 🚌 Bus Reservation System

A modern, full-stack bus ticket booking application built with **Next.js 16**, **React 19**, **MongoDB**, and **Tailwind CSS**. This application allows users to search for buses, view availability, and book tickets with a seamless user experience.

## 🚀 Features

-   **User Authentication**: Secure Sign Up and Login using JWT and Bcrypt.
-   **Bus Search**: Search buses by Source, Destination, and Date.
-   **Seat Selection**: Visual seat layout for selecting preferred seats.
-   **Booking System**: Streamlined booking process with instant confirmation.
-   **Booking History**: View past bookings and trip details.
-   **Responsive Design**: Fully responsive UI built with Tailwind CSS and Framer Motion.
-   **Dark/Light Mode**: (If applicable, or remove) Modern UI with clean aesthetics.

## 🛠️ Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
-   **Frontend**: React 19, TypeScript
-   **Styling**: Tailwind CSS 4, Framer Motion, Lucide React (Icons)
-   **Database**: MongoDB, Mongoose
-   **Authentication**: JSON Web Tokens (JWT), BcryptJS
-   **Utilities**: date-fns, clsx, tailwind-merge

## 📂 Project Structure

Here is the detailed structure of the project:

```
Bus_Reservation_System/
├── public/                 # Static assets
├── src/
│   ├── app/                # Next.js App Router pages and API routes
│   │   ├── api/            # Backend API Routes
│   │   │   ├── auth/       # Authentication endpoints
│   │   │   │   ├── login/      # POST /api/auth/login
│   │   │   │   └── register/   # POST /api/auth/register
│   │   │   ├── bookings/   # Booking endpoints
│   │   │   │   ├── history/    # GET /api/bookings/history/[userId]
│   │   │   │   └── route.ts    # POST /api/bookings
│   │   │   └── locations/  # GET /api/locations (Available routes)
│   │   ├── booking/        # Booking page (Seat selection & confirmation)
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root layout component
│   │   └── page.tsx        # Home page (Search form & Landing)
│   ├── components/         # Reusable UI Components
│   │   ├── ui/             # Generic UI elements (button, etc.)
│   │   ├── BusCard.tsx     # Component to display bus details
│   │   ├── Footer.tsx      # Application footer
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── SearchForm.tsx  # Search input form
│   ├── lib/                # Utility functions and configurations
│   │   ├── db.ts           # MongoDB connection handler
│   │   └── utils.ts        # Helper functions (class merging, etc.)
│   └── models/             # Mongoose schemas
│       ├── Booking.ts      # Booking schema
│       └── User.ts         # User schema
├── .gitignore              # Git ignore file
├── eslint.config.mjs       # ESLint configuration
├── next-env.d.ts           # Next.js TypeScript declarations
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## ⚙️ Installation & Setup

Follow these steps to set up the project locally:

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    cd Bus_Reservation_System
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

3.  **Environment Variables:**

    Create a `.env.local` file in the root directory and add the following variables:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    JWT_SECRET=your_secret_key_here
    ```

    *Note: Replace `your_mongodb_connection_string` with your actual MongoDB URI (local or Atlas).*

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

5.  **Open the application:**

    Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| **POST** | `/api/auth/register` | Register a new user |
| **POST** | `/api/auth/login` | Authenticate user and get token |
| **GET** | `/api/locations` | Get available bus locations |
| **POST** | `/api/bookings` | Create a new booking |
| **GET** | `/api/bookings/history/:userId` | Get booking history for a user |

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## 📄 License

This project is licensed under the MIT License.
