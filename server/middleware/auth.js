import jwt from 'jsonwebtoken';
import { Student } from '../models/Student.js';

const cookieName = 'kalptaru_session';

export function signSession(res, payload) {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '7d' });

  res.cookie(cookieName, token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

export function clearSession(res) {
  res.clearCookie(cookieName, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  });
}

export async function requireStudent(req, res, next) {
  try {
    const decoded = jwt.verify(req.cookies[cookieName], process.env.JWT_SECRET);

    if (decoded.role !== 'student') {
      return res.status(403).json({ message: 'Student access required.' });
    }

    const student = await Student.findById(decoded.sub).select('-passwordHash');
    if (!student) {
      clearSession(res);
      return res.status(401).json({ message: 'Please log in again.' });
    }

    req.user = {
      id: student._id.toString(),
      role: 'student',
      name: student.name,
      email: student.email,
    };

    return next();
  } catch {
    return res.status(401).json({ message: 'Please log in.' });
  }
}

export function requireAdmin(req, res, next) {
  try {
    const decoded = jwt.verify(req.cookies[cookieName], process.env.JWT_SECRET);

    if (decoded.role !== 'admin') {
      return res.status(403).json({ message: 'Admin access required.' });
    }

    req.user = {
      id: 'admin',
      role: 'admin',
      name: 'Admin',
      email: process.env.ADMIN_EMAIL,
    };

    return next();
  } catch {
    return res.status(401).json({ message: 'Please log in as admin.' });
  }
}
