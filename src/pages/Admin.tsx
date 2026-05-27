import { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { AdminPurchase, api } from '../lib/api';
import { formatPrice } from '../lib/courseCatalog';

export default function Admin() {
  const { user } = useAuth();
  const [purchases, setPurchases] = useState<AdminPurchase[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (user?.role !== 'admin') {
      setLoading(false);
      return;
    }

    api
      .adminPurchases()
      .then((data) => setPurchases(data.purchases))
      .catch((adminError) => setError(adminError instanceof Error ? adminError.message : 'Unable to load purchases.'))
      .finally(() => setLoading(false));
  }, [user]);

  if (user?.role !== 'admin') {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-4xl font-light text-[#372D67]">Admin access</h1>
          <p className="mt-4 text-[#372D67]/70">Log in from the Login page using admin credentials to view course purchases.</p>
          <button className="mt-8 bg-[#372D67] px-8 py-4 text-white" onClick={() => (window.location.hash = 'login')} type="button">
            Go to login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pt-24">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-4xl font-light text-[#372D67]">Admin Purchases</h1>
        <p className="mt-3 text-[#372D67]/70">Students who bought courses are listed here.</p>

        {error && <p className="mt-6 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

        <div className="mt-8 overflow-x-auto border border-gray-200">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#f8f7f5]">
              <tr>
                <th className="px-5 py-4 text-left text-sm font-medium text-[#372D67]">Student</th>
                <th className="px-5 py-4 text-left text-sm font-medium text-[#372D67]">Course</th>
                <th className="px-5 py-4 text-left text-sm font-medium text-[#372D67]">Category</th>
                <th className="px-5 py-4 text-left text-sm font-medium text-[#372D67]">Amount</th>
                <th className="px-5 py-4 text-left text-sm font-medium text-[#372D67]">Purchased</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {loading && (
                <tr>
                  <td className="px-5 py-6 text-[#372D67]/70" colSpan={5}>
                    Loading purchases...
                  </td>
                </tr>
              )}
              {!loading && purchases.length === 0 && (
                <tr>
                  <td className="px-5 py-6 text-[#372D67]/70" colSpan={5}>
                    No course purchases yet.
                  </td>
                </tr>
              )}
              {purchases.map((purchase) => (
                <tr key={purchase.id}>
                  <td className="px-5 py-4">
                    <p className="font-medium text-[#372D67]">{purchase.studentName}</p>
                    <p className="text-sm text-gray-500">{purchase.studentEmail}</p>
                  </td>
                  <td className="px-5 py-4 text-[#372D67]">{purchase.courseTitle}</td>
                  <td className="px-5 py-4 text-gray-600">{purchase.category}</td>
                  <td className="px-5 py-4 text-gray-600">{formatPrice(purchase.amount)}</td>
                  <td className="px-5 py-4 text-gray-600">{new Date(purchase.purchasedAt).toLocaleDateString('en-IN')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
