import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { Student } from '../models/Student.js';
import { clearSession, signSession } from '../middleware/auth.js';

export const authRouter = express.Router();

function publicStudent(student) {
  return {
    id: student._id.toString(),
    role: 'student',
    name: student.name,
    email: student.email,
  };
}

authRouter.post('/register', async (req, res) => {
  const name = String(req.body.name || '').trim();
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');

  if (!name || !email || password.length < 8) {
    return res.status(400).json({ message: 'Name, email, and an 8+ character password are required.' });
  }

  const existingStudent = await Student.findOne({ email });
  if (existingStudent) {
    return res.status(409).json({ message: 'An account already exists with this email.' });
  }

  const passwordHash = await bcrypt.hash(password, 12);
  const student = await Student.create({ name, email, passwordHash });
  signSession(res, { sub: student._id.toString(), role: 'student' });

  return res.status(201).json({ user: publicStudent(student) });
});

authRouter.post('/login', async (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');

  const student = await Student.findOne({ email });
  if (!student) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  const passwordsMatch = await bcrypt.compare(password, student.passwordHash);
  if (!passwordsMatch) {
    return res.status(401).json({ message: 'Invalid email or password.' });
  }

  signSession(res, { sub: student._id.toString(), role: 'student' });
  return res.json({ user: publicStudent(student) });
});

authRouter.post('/admin/login', (req, res) => {
  const email = String(req.body.email || '').trim().toLowerCase();
  const password = String(req.body.password || '');

  if (email !== process.env.ADMIN_EMAIL || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: 'Invalid admin credentials.' });
  }

  signSession(res, { sub: 'admin', role: 'admin' });
  return res.json({
    user: {
      id: 'admin',
      role: 'admin',
      name: 'Admin',
      email: process.env.ADMIN_EMAIL,
    },
  });
});

authRouter.post('/logout', (_req, res) => {
  clearSession(res);
  return res.json({ message: 'Logged out.' });
});

authRouter.get('/me', async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.kalptaru_session, process.env.JWT_SECRET);

    if (decoded.role === 'admin') {
      return res.json({
        user: {
          id: 'admin',
          role: 'admin',
          name: 'Admin',
          email: process.env.ADMIN_EMAIL,
        },
      });
    }

    if (decoded.role === 'student') {
      const student = await Student.findById(decoded.sub).select('-passwordHash');
      if (student) {
        return res.json({ user: publicStudent(student) });
      }
    }

    clearSession(res);
    return res.status(401).json({ message: 'Please log in.' });
  } catch {
    return res.status(401).json({ message: 'Please log in.' });
  }
});
