
/* 
NOTE: This file is for the Node.js backend. 
It is commented out to prevent errors in the frontend browser environment.
To run the backend, uncomment the code below and run `node server.js`.

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { User, Course, Enrollment } = require('./models');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection (Mock URL for structure)
// mongoose.connect(process.env.MONGO_URI);

// --- AUTH ROUTES ---

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  // Logic: Find user, compare password (bcrypt), generate JWT
  // Mock response:
  if (email === 'admin@elearning.ai') {
    return res.json({ token: 'mock-jwt-admin', user: { id: 'u2', role: 'admin' } });
  }
  res.json({ token: 'mock-jwt-student', user: { id: 'u1', role: 'student' } });
});

app.post('/api/auth/register', async (req, res) => {
  // Logic: Create User
  res.status(201).json({ message: 'User created' });
});

// --- COURSE ROUTES ---

app.get('/api/courses', async (req, res) => {
  // Logic: User.find()
  // const courses = await Course.find();
  // res.json(courses);
  res.json([]); // Returns Mock Data from DB
});

app.post('/api/courses', async (req, res) => {
  // Admin Only Middleware should be here
  const { title, description, videoUrl } = req.body;
  // const newCourse = await Course.create({ title, ... });
  console.log("Creating course:", title);
  res.status(201).json({ message: 'Course created' });
});

// --- PROGRESS ROUTES ---

app.post('/api/user/progress', async (req, res) => {
  const { userId, courseId, lessonId, status } = req.body;
  // Logic: Update Enrollment.completedLessons
  res.json({ success: true, newProgress: 55 });
});

app.listen(PORT, () => {
  console.log(`Backend Server running on port ${PORT}`);
});
*/
console.log("Backend server code is present but disabled for browser preview.");
