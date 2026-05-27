import { FormEvent, useState } from 'react';
import { useAuth } from '../context/useAuth';
import { api } from '../lib/api';

type LoginMode = 'student-login' | 'student-register' | 'admin-login';

export default function Login() {
  const { user, setAuthenticatedUser, logout } = useAuth();
  const [mode, setMode] = useState<LoginMode>('student-login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      const data =
        mode === 'student-register'
          ? await api.register({ name, email, password })
          : mode === 'admin-login'
            ? await api.adminLogin({ email, password })
            : await api.login({ email, password });

      setAuthenticatedUser(data.user);
      window.location.hash = data.user.role === 'admin' ? 'admin' : 'courses';
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : 'Unable to log in.');
    } finally {
      setSubmitting(false);
    }
  };

  if (user) {
    return (
      <div className="min-h-screen bg-white pt-24">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h1 className="text-4xl font-light text-[#372D67]">You are logged in</h1>
          <p className="mt-4 text-[#372D67]/70">
            Signed in as {user.name} ({user.email})
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              className="bg-[#372D67] px-8 py-4 text-white"
              onClick={() => (window.location.hash = user.role === 'admin' ? 'admin' : 'courses')}
              type="button"
            >
              {user.role === 'admin' ? 'Open admin page' : 'View courses'}
            </button>
            <button className="border border-[#372D67] px-8 py-4 text-[#372D67]" onClick={logout} type="button">
              Logout
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f7f5] pt-24">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="grid overflow-hidden bg-white shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#372D67] p-8 text-white lg:p-12">
            <p className="text-sm uppercase tracking-wide text-white/70">Student Portal</p>
            <h1 className="mt-4 text-4xl font-light leading-tight">Login, register, and keep your courses saved.</h1>
            <p className="mt-6 leading-relaxed text-white/75">
              Bought courses are linked to your account, so every login shows the same course status.
            </p>
          </div>

          <div className="p-8 lg:p-12">
            <div className="mb-8 grid grid-cols-3 border border-gray-200 text-sm">
              <button
                className={`px-3 py-3 ${mode === 'student-login' ? 'bg-[#372D67] text-white' : 'text-[#372D67]'}`}
                onClick={() => setMode('student-login')}
                type="button"
              >
                Student Login
              </button>
              <button
                className={`px-3 py-3 ${mode === 'student-register' ? 'bg-[#372D67] text-white' : 'text-[#372D67]'}`}
                onClick={() => setMode('student-register')}
                type="button"
              >
                Register
              </button>
              <button
                className={`px-3 py-3 ${mode === 'admin-login' ? 'bg-[#372D67] text-white' : 'text-[#372D67]'}`}
                onClick={() => setMode('admin-login')}
                type="button"
              >
                Admin
              </button>
            </div>

            <form className="space-y-5" onSubmit={submit}>
              {mode === 'student-register' && (
                <label className="block">
                  <span className="text-sm text-[#372D67]">Full name</span>
                  <input
                    className="mt-2 w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#372D67]"
                    onChange={(event) => setName(event.target.value)}
                    required
                    type="text"
                    value={name}
                  />
                </label>
              )}

              <label className="block">
                <span className="text-sm text-[#372D67]">Email</span>
                <input
                  className="mt-2 w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#372D67]"
                  onChange={(event) => setEmail(event.target.value)}
                  required
                  type="email"
                  value={email}
                />
              </label>

              <label className="block">
                <span className="text-sm text-[#372D67]">Password</span>
                <input
                  className="mt-2 w-full border border-gray-300 px-4 py-3 outline-none focus:border-[#372D67]"
                  minLength={mode === 'student-register' ? 8 : undefined}
                  onChange={(event) => setPassword(event.target.value)}
                  required
                  type="password"
                  value={password}
                />
              </label>

              {error && <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

              <button
                className="w-full bg-[#372D67] px-6 py-4 text-white transition-colors hover:bg-[#AC9A84] disabled:cursor-not-allowed disabled:opacity-60"
                disabled={submitting}
                type="submit"
              >
                {submitting
                  ? 'Please wait...'
                  : mode === 'student-register'
                    ? 'Create student account'
                    : mode === 'admin-login'
                      ? 'Login as admin'
                      : 'Login as student'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
