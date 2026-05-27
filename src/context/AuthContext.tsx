import { createContext, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';
import { api, AuthUser, Purchase } from '../lib/api';

export interface AuthContextValue {
  user: AuthUser | null;
  purchases: Purchase[];
  loading: boolean;
  refreshUser: () => Promise<void>;
  refreshPurchases: () => Promise<void>;
  setAuthenticatedUser: (user: AuthUser) => void;
  logout: () => Promise<void>;
  hasPurchased: (courseId: string) => boolean;
}

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [loading, setLoading] = useState(true);

  const refreshPurchases = useCallback(async () => {
    if (user?.role !== 'student') {
      setPurchases([]);
      return;
    }

    const data = await api.myPurchases();
    setPurchases(data.purchases);
  }, [user]);

  const refreshUser = useCallback(async () => {
    try {
      const data = await api.me();
      setUser(data.user);
    } catch {
      setUser(null);
      setPurchases([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUser();
  }, [refreshUser]);

  useEffect(() => {
    if (user?.role === 'student') {
      refreshPurchases().catch(() => setPurchases([]));
    } else {
      setPurchases([]);
    }
  }, [refreshPurchases, user]);

  const value = useMemo<AuthContextValue>(
    () => ({
      user,
      purchases,
      loading,
      refreshUser,
      refreshPurchases,
      setAuthenticatedUser: setUser,
      logout: async () => {
        await api.logout();
        setUser(null);
        setPurchases([]);
        window.location.hash = 'login';
      },
      hasPurchased: (courseId: string) => purchases.some((purchase) => purchase.courseId === courseId),
    }),
    [loading, purchases, refreshPurchases, refreshUser, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
