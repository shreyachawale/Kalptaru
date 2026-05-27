import { CheckCircle, ShoppingCart } from 'lucide-react';
import { useAuth } from '../context/useAuth';
import { formatPrice, getCourse } from '../lib/courseCatalog';

interface CoursePurchaseButtonProps {
  courseId: string;
}

export default function CoursePurchaseButton({ courseId }: CoursePurchaseButtonProps) {
  const { user, hasPurchased, loading } = useAuth();
  const course = getCourse(courseId);

  if (!course) {
    return null;
  }

  const bought = hasPurchased(courseId);

  if (bought) {
    return (
      <div className="mt-5 inline-flex items-center gap-2 border border-green-600 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
        <CheckCircle className="h-4 w-4" />
        Bought
      </div>
    );
  }

  const buyCourse = () => {
    if (!user || user.role !== 'student') {
      window.location.hash = 'login';
      return;
    }

    window.location.hash = `payment?courseId=${encodeURIComponent(courseId)}`;
  };

  return (
    <button
      className="mt-5 inline-flex items-center gap-2 bg-[#372D67] px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-[#AC9A84] disabled:cursor-not-allowed disabled:opacity-60"
      disabled={loading}
      onClick={buyCourse}
      type="button"
    >
      <ShoppingCart className="h-4 w-4" />
      Buy Course - {formatPrice(course.price)}
    </button>
  );
}
