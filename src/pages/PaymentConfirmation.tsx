import { CheckCircle } from 'lucide-react';
import { useMemo } from 'react';
import { formatPrice, getCourse } from '../lib/courseCatalog';

export default function PaymentConfirmation() {
  const courseId = useMemo(() => new URLSearchParams(window.location.hash.split('?')[1] || '').get('courseId') || '', []);
  const course = getCourse(courseId);

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <CheckCircle className="mx-auto h-16 w-16 text-green-600" />
        <h1 className="mt-6 text-4xl font-light text-[#372D67]">Payment confirmed</h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-[#372D67]/70">
          {course
            ? `${course.title} is now marked as bought in your student account.`
            : 'Your course is now marked as bought in your student account.'}
        </p>
        {course && <p className="mt-4 text-[#AC9A84]">Amount paid: {formatPrice(course.price)}</p>}
        <button
          className="mt-8 bg-[#372D67] px-8 py-4 text-white transition-colors hover:bg-[#AC9A84]"
          onClick={() => (window.location.hash = 'courses')}
          type="button"
        >
          Back to courses
        </button>
      </div>
    </div>
  );
}
