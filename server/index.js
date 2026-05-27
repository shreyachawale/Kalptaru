import 'dotenv/config';
import dns from 'node:dns';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { courseCatalog } from './config/courses.js';
import { Course } from './models/Course.js';
import { authRouter } from './routes/auth.js';
import { courseRouter } from './routes/courses.js';

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (process.env.DNS_SERVERS) {
  dns.setServers(process.env.DNS_SERVERS.split(',').map((server) => server.trim()).filter(Boolean));
}

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api', courseRouter);

app.get('/api/health', (_req, res) => {
  res.json({ ok: true });
});

const distPath = path.join(__dirname, '..', 'dist');
app.use(express.static(distPath));
app.use((_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

async function seedCourses() {
  await Promise.all(
    courseCatalog.map((course) =>
      Course.findOneAndUpdate(
        { courseId: course.courseId },
        { $set: course },
        { upsert: true, returnDocument: 'after' }
      )
    )
  );
}

mongoose
  .connect(process.env.MONGODB_URI, {
    serverSelectionTimeoutMS: Number(process.env.MONGODB_SERVER_SELECTION_TIMEOUT_MS || 10000),
  })
  .then(async () => {
    await seedCourses();
    app.listen(port, () => {
      console.log(`Kalptaru API running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  });
