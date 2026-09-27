# SafeWeb Inspector & Comparator 🛡️⚡

> A modern web safety inspection and comparison platform for evaluating website security signals through a futuristic 3D cyber interface.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?logo=mongodb&logoColor=white)](https://www.mongodb.com/)

SafeWeb Inspector & Comparator combines a decoupled React frontend with a Node.js/Express backend to inspect website safety indicators, compare domains, and maintain authenticated scan history.

> **Note:** This tool is intended to support security awareness and preliminary analysis. It should not replace a professional security audit.

---

## ✨ Features

- **Futuristic 3D interface** — Interactive particle-mesh background, glassmorphism cards, animated score rings, and neon cyber styling.
- **Authentication and security** — Registration and login with bcrypt password hashing and JWT-based authentication.
- **MongoDB persistence** — Stores user profiles, authentication data, and scan/comparison history.
- **Single-site scanner** — Reviews TLS/SSL certificates, HTTP security headers, DNS infrastructure, and potential phishing or typosquatting signals.
- **Website comparator** — Compares two websites side by side and highlights score differences to identify the safer domain.
- **Scan history** — Lets authenticated users review previous security checks and comparisons.

---

## 🧱 Architecture

The project uses a decoupled frontend and backend structure:

```text
Safe-Web-Scanner-v2/
├── backend/                    # Node.js + Express + TypeScript API
│   ├── config/
│   │   └── db.ts               # MongoDB/Mongoose connection
│   ├── middleware/
│   │   └── auth.ts             # JWT authentication middleware
│   ├── models/
│   │   ├── User.ts             # User schema
│   │   └── ScanHistory.ts      # Scan history schema
│   ├── routes/
│   │   ├── auth.ts             # Registration and login endpoints
│   │   └── scan.ts             # Scan and comparison endpoints
│   ├── .env.example             # Backend environment template
│   ├── package.json             # Backend dependencies and scripts
│   ├── server.ts                # Express server entry point
│   └── tsconfig.json            # Backend TypeScript configuration
│
├── src/                         # React + TypeScript frontend
│   ├── components/
│   │   ├── Navbar.tsx           # Glassmorphic navigation bar
│   │   ├── ParticleField.tsx    # Interactive 3D particle canvas
│   │   └── ScoreRing.tsx         # Animated SVG score ring
│   ├── context/
│   │   └── AuthContext.tsx      # Authentication state provider
│   ├── pages/
│   │   ├── Dashboard.tsx        # Scan, compare, and history dashboard
│   │   └── LoginPage.tsx        # Sign-in and registration portal
│   ├── App.tsx                  # Root application component
│   ├── index.css                # Cyberpunk theme and neon styles
│   └── main.tsx                 # React entry point
│
├── index.html                   # HTML template
├── package.json                 # Frontend dependencies and scripts
├── tsconfig.json                # Frontend TypeScript configuration
└── vite.config.ts               # Vite configuration and API proxy
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [MongoDB](https://www.mongodb.com/) running locally or a MongoDB Atlas connection string
- npm

### 1. Clone the repository

```bash
git clone https://github.com/narendraborhade-creator/Safe-Web-Scanner-v2.git
cd Safe-Web-Scanner-v2
```

### 2. Configure and start the backend

Create `backend/.env` using the following values as a starting point:

```env
MONGODB_URI=mongodb://localhost:27017/safeweb
JWT_SECRET=your_custom_jwt_secret_key
PORT=5000
```

Then install dependencies and start the API:

```bash
cd backend
npm install
npm run dev
```

The backend API will be available at `http://localhost:5000`.

### 3. Start the frontend

Open a second terminal from the project root:

```bash
cd Safe-Web-Scanner-v2
npm install
npm run dev
```

Open the local URL shown by Vite, typically `http://localhost:5173`.

## Deploying to Vercel

The frontend and Express API deploy together on Vercel. The API runs as a serverless function under `/api` and connects to MongoDB on demand.

1. Import the repository into Vercel. Use `npm run build` as the build command and `dist` as the output directory.
2. In Vercel project settings, add `MONGODB_URI` and a secure `JWT_SECRET` for Production, Preview, and Development as needed.
3. Leave `VITE_API_URL` empty when the API is deployed with the same Vercel project; the frontend will use the same-origin `/api` routes.
4. Redeploy after saving the environment variables.

---

## 📡 API Reference

### Authentication

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| `POST` | `/api/auth/register` | Create an account with `username`, `email`, and `password` | Public |
| `POST` | `/api/auth/login` | Authenticate with `email` and `password` | Public |
| `GET` | `/api/auth/me` | Fetch the authenticated user profile | Protected |

### Scanning and comparison

| Method | Endpoint | Description | Access |
| --- | --- | --- | --- |
| `POST` | `/api/scan/check-site` | Analyze safety metrics for a URL | Protected |
| `POST` | `/api/scan/compare-sites` | Compare safety metrics for two URLs | Protected |
| `GET` | `/api/scan/history` | Retrieve the user's scan history | Protected |
| `GET` | `/api/scan/samples` | Retrieve safe and suspicious sample URLs | Public |

Protected endpoints require a valid JWT authentication token.

---

## 🛠️ Tech Stack

### Frontend

- React 19
- TypeScript
- Tailwind CSS v4
- Lucide React
- HTML5 Canvas for 3D visual effects
- Vite

### Backend

- Node.js
- Express
- TypeScript
- TSX

### Database and authentication

- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcryptjs

---

## 🤝 Contributing

Contributions, ideas, and improvements are welcome. To contribute:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes with a clear message.
4. Push the branch and open a pull request.

Please keep changes focused and include relevant documentation when adding or changing functionality.

### Contributors

- [@narendraborhade-creator](https://github.com/narendraborhade-creator)
- [@AdityaGaikwad03](https://github.com/AdityaGaikwad03)

---

## 📄 License

No license has been specified yet. Add a license file if you intend to define terms for using, modifying, or distributing this project.
