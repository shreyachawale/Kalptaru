import { ShieldCheck } from 'lucide-react';
import { useMemo, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { api } from '../lib/api';
import { formatPrice, getCourse } from '../lib/courseCatalog';

export default function Payment() {
  const { user, refreshPurchases, hasPurchased } = useAuth();
  const [error, setError] = useState('');
  const [paying, setPaying] = useState(false);
  const courseId = useMemo(() => new URLSearchParams(window.location.hash.split('?')[1] || '').get('courseId') || '', []);
  const course = getCourse(courseId);

  if (!user || user.role !== 'student') {
    window.location.hash = 'login';
    return null;
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-3xl font-light text-[#372D67]">Course not found</h1>
          <button className="mt-8 bg-[#372D67] px-6 py-3 text-white" onClick={() => (window.location.hash = 'courses')} type="button">
            Back to courses
          </button>
        </div>
      </div>
    );
  }

  if (hasPurchased(course.courseId)) {
    window.location.hash = `payment-confirmation?courseId=${encodeURIComponent(course.courseId)}`;
    return null;
  }

  const completePayment = async () => {
    setPaying(true);
    setError('');

    try {
      await api.confirmPurchase(course.courseId);
      await refreshPurchases();
      window.location.hash = `payment-confirmation?courseId=${encodeURIComponent(course.courseId)}`;
    } catch (paymentError) {
      setError(paymentError instanceof Error ? paymentError.message : 'Unable to complete payment.');
    } finally {
      setPaying(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f7f5] pt-24">
      <div className="mx-auto max-w-4xl px-6 py-12">
        <div className="bg-white p-8 shadow-sm">
          <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-[#AC9A84]">Dummy Razorpay Checkout</p>
              <h1 className="mt-2 text-3xl font-light text-[#372D67]">{course.title}</h1>
            </div>
            <ShieldCheck className="h-10 w-10 text-[#372D67]" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="border border-gray-200 p-6">
              <p className="text-sm text-gray-500">Student</p>
              <p className="mt-2 text-lg text-[#372D67]">{user.name}</p>
              <p className="text-sm text-gray-500">{user.email}</p>
            </div>
            <div className="border border-gray-200 p-6">
              <p className="text-sm text-gray-500">Amount</p>
              <p className="mt-2 text-3xl font-semibold text-[#372D67]">{formatPrice(course.price)}</p>
              <p className="text-sm text-gray-500">{course.category}</p>
            </div>
          </div>

          {error && <p className="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              className="bg-[#372D67] px-8 py-4 text-white transition-colors hover:bg-[#AC9A84] disabled:cursor-not-allowed disabled:opacity-60"
              disabled={paying}
              onClick={completePayment}
              type="button"
            >
              {paying ? 'Processing...' : 'Pay with Dummy Razorpay'}
            </button>
            <button
              className="border border-[#372D67] px-8 py-4 text-[#372D67]"
              onClick={() => window.history.back()}
              type="button"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
