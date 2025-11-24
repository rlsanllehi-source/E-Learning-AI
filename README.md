
# E-Learning AI Platform

## Architecture
This project is a Monorepo containing 3 distinct services:

1. **Frontend**: React (Vite/CRA) + Tailwind CSS (Port 3000)
2. **Backend**: Node.js + Express + MongoDB (Port 5000)
3. **AI Engine**: Python + FastAPI (Port 8000)

## Getting Started

### 1. Frontend (React)
The UI logic is contained in the root directory.
```bash
npm install
npm start
# Runs on http://localhost:3000
```

### 2. Backend (Node.js)
Handles Authentication, Course Data, and User Progress.
```bash
cd backend
npm init -y
npm install express mongoose cors dotenv
node server.js
# Runs on http://localhost:5000
```
*Note: Create a `.env` file in /backend with `MONGO_URI=your_mongodb_connection_string`*

### 3. AI Engine (Python)
Microservice for Course Recommendations.
```bash
cd ai-engine
pip install fastapi uvicorn
uvicorn main:app --reload --port 8000
# Runs on http://localhost:8000
```

## Integration Logic
The Frontend connects to the services via environment variables. Create a `.env` in the root:

```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_AI_URL=http://localhost:8000
```

In the production build, use Nginx or Docker Compose to route `/api` requests to the Node container and `/ai` requests to the Python container.
