
/*
NOTE: This file is for the Node.js backend.
It is commented out to prevent errors in the frontend browser environment.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// --- USER SCHEMA ---
const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  status: { type: String, enum: ['active', 'banned'], default: 'active' },
  createdAt: { type: Date, default: Date.now }
});

// --- COURSE SCHEMA ---
const CourseSchema = new Schema({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
  price: Number,
  image: String,
  level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
  tags: [String], // Important for AI Recommender
  modules: [{
    title: String,
    lessons: [{
      title: String,
      videoUrl: String,
      duration: String
    }]
  }]
});

// --- ENROLLMENT & PROGRESS SCHEMA ---
const EnrollmentSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  course: { type: Schema.Types.ObjectId, ref: 'Course' },
  progress: { type: Number, default: 0 },
  completedLessons: [{ type: String }], // Array of Lesson IDs
  enrolledAt: { type: Date, default: Date.now }
});

module.exports = {
  User: mongoose.model('User', UserSchema),
  Course: mongoose.model('Course', CourseSchema),
  Enrollment: mongoose.model('Enrollment', EnrollmentSchema)
};
*/
