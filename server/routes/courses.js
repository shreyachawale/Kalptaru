import express from 'express';
import { Course } from '../models/Course.js';
import { Purchase } from '../models/Purchase.js';
import { requireAdmin, requireStudent } from '../middleware/auth.js';

export const courseRouter = express.Router();

courseRouter.get('/courses', async (_req, res) => {
  const courses = await Course.find().sort({ category: 1, title: 1 });
  return res.json({ courses });
});

courseRouter.get('/purchases/mine', requireStudent, async (req, res) => {
  const purchases = await Purchase.find({ student: req.user.id }).populate('course').sort({ createdAt: -1 });
  return res.json({
    purchases: purchases.map((purchase) => ({
      id: purchase._id.toString(),
      courseId: purchase.course.courseId,
      title: purchase.course.title,
      category: purchase.course.category,
      amount: purchase.amount,
      status: purchase.status,
      purchasedAt: purchase.createdAt,
    })),
  });
});

courseRouter.post('/purchases/confirm', requireStudent, async (req, res) => {
  const courseId = String(req.body.courseId || '').trim();
  const course = await Course.findOne({ courseId });

  if (!course) {
    return res.status(404).json({ message: 'Course not found.' });
  }

  const purchase = await Purchase.findOneAndUpdate(
    { student: req.user.id, course: course._id },
    {
      $setOnInsert: {
        student: req.user.id,
        course: course._id,
        amount: course.price,
        paymentReference: `dummy_rzp_${Date.now()}`,
      },
    },
    { returnDocument: 'after', upsert: true }
  ).populate('course');

  return res.status(201).json({
    purchase: {
      id: purchase._id.toString(),
      courseId: purchase.course.courseId,
      title: purchase.course.title,
      category: purchase.course.category,
      amount: purchase.amount,
      status: purchase.status,
      purchasedAt: purchase.createdAt,
    },
  });
});

courseRouter.get('/admin/purchases', requireAdmin, async (_req, res) => {
  const purchases = await Purchase.find()
    .populate('student', 'name email')
    .populate('course', 'courseId title category price')
    .sort({ createdAt: -1 });

  return res.json({
    purchases: purchases.map((purchase) => ({
      id: purchase._id.toString(),
      studentName: purchase.student.name,
      studentEmail: purchase.student.email,
      courseId: purchase.course.courseId,
      courseTitle: purchase.course.title,
      category: purchase.course.category,
      amount: purchase.amount,
      purchasedAt: purchase.createdAt,
    })),
  });
});
