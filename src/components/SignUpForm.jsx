import { useState } from 'react';
import { Mail, Lock, User, Building, CheckCircle2, AlertCircle } from 'lucide-react';

export default function SignUpForm() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    company: '',
    agree: false,
  });
  const [status, setStatus] = useState({ type: 'idle', message: '' });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
  };

  const validate = () => {
    if (!values.name.trim()) return 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) return 'Please enter a valid email address.';
    if (values.password.length < 8) return 'Password must be at least 8 characters.';
    if (!values.agree) return 'You must agree to the Terms to continue.';
    return '';
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: 'idle', message: '' });
    const error = validate();
    if (error) {
      setStatus({ type: 'error', message: error });
      return;
    }
    setStatus({ type: 'success', message: 'Account created! Check your email to verify your address.' });
  };

  return (
    <div className="mx-auto w-full max-w-2xl rounded-2xl border border-neutral-200 bg-white/90 backdrop-blur p-6 sm:p-8 shadow-xl shadow-neutral-900/5">
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">Sign up</h2>
      <p className="mt-1 text-neutral-600">Start your journey in less than a minute.</p>

      {status.type !== 'idle' && (
        <div
          className={`mt-4 flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
            status.type === 'success'
              ? 'bg-green-50 text-green-800 ring-1 ring-green-200'
              : 'bg-rose-50 text-rose-800 ring-1 ring-rose-200'
          }`}
          role="status"
          aria-live="polite"
        >
          {status.type === 'success' ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            <AlertCircle className="h-4 w-4" />
          )}
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={onSubmit} className="mt-6 grid grid-cols-1 gap-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-neutral-800">Full name</label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
              <User className="h-4 w-4" />
            </span>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={onChange}
              className="w-full rounded-md border border-neutral-200 bg-white px-10 py-2.5 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none ring-0 transition focus:border-neutral-900"
              placeholder="Jane Doe"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-neutral-800">Email address</label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
              <Mail className="h-4 w-4" />
            </span>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={onChange}
              className="w-full rounded-md border border-neutral-200 bg-white px-10 py-2.5 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-900"
              placeholder="you@company.com"
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="mb-1 block text-sm font-medium text-neutral-800">Password</label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
              <Lock className="h-4 w-4" />
            </span>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              value={values.password}
              onChange={onChange}
              className="w-full rounded-md border border-neutral-200 bg-white px-10 py-2.5 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-900"
              placeholder="At least 8 characters"
              required
              minLength={8}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-neutral-800">Company (optional)</label>
          <div className="relative">
            <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-neutral-400">
              <Building className="h-4 w-4" />
            </span>
            <input
              id="company"
              name="company"
              type="text"
              autoComplete="organization"
              value={values.company}
              onChange={onChange}
              className="w-full rounded-md border border-neutral-200 bg-white px-10 py-2.5 text-neutral-900 placeholder-neutral-400 shadow-sm outline-none transition focus:border-neutral-900"
              placeholder="Acme Inc."
            />
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <input
            id="agree"
            name="agree"
            type="checkbox"
            checked={values.agree}
            onChange={onChange}
            className="h-4 w-4 rounded border-neutral-300 text-neutral-900 focus:ring-neutral-900"
          />
          <label htmlFor="agree" className="text-sm text-neutral-700">
            I agree to the <a href="#" className="underline decoration-neutral-300 hover:decoration-neutral-800">Terms</a> and
            <span> </span>
            <a href="#" className="underline decoration-neutral-300 hover:decoration-neutral-800">Privacy Policy</a>.
          </label>
        </div>

        <button
          type="submit"
          className="mt-2 inline-flex w-full items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-neutral-900/10 transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
        >
          Create account
        </button>
      </form>

      <p className="mt-4 text-center text-sm text-neutral-600">
        Already have an account? <a href="#" className="font-medium text-neutral-900 underline decoration-neutral-300 hover:decoration-neutral-800">Sign in</a>
      </p>
    </div>
  );
}
