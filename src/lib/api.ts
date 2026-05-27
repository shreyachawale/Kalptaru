export interface AuthUser {
  id: string;
  role: 'student' | 'admin';
  name: string;
  email: string;
}

export interface Purchase {
  id: string;
  courseId: string;
  title: string;
  category: string;
  amount: number;
  status: 'paid';
  purchasedAt: string;
}

export interface AdminPurchase {
  id: string;
  studentName: string;
  studentEmail: string;
  courseId: string;
  courseTitle: string;
  category: string;
  amount: number;
  purchasedAt: string;
}

async function request<T>(url: string, options: RequestInit = {}): Promise<T> {
  const response = await fetch(url, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });
  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong.');
  }

  return data as T;
}

export const api = {
  register: (payload: { name: string; email: string; password: string }) =>
    request<{ user: AuthUser }>('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  login: (payload: { email: string; password: string }) =>
    request<{ user: AuthUser }>('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  adminLogin: (payload: { email: string; password: string }) =>
    request<{ user: AuthUser }>('/api/auth/admin/login', {
      method: 'POST',
      body: JSON.stringify(payload),
    }),
  logout: () => request<{ message: string }>('/api/auth/logout', { method: 'POST' }),
  me: () => request<{ user: AuthUser }>('/api/auth/me'),
  myPurchases: () => request<{ purchases: Purchase[] }>('/api/purchases/mine'),
  confirmPurchase: (courseId: string) =>
    request<{ purchase: Purchase }>('/api/purchases/confirm', {
      method: 'POST',
      body: JSON.stringify({ courseId }),
    }),
  adminPurchases: () => request<{ purchases: AdminPurchase[] }>('/api/admin/purchases'),
};
