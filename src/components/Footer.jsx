export default function Footer() {
  return (
    <footer className="mt-auto border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
          <p className="text-sm text-neutral-600">© {new Date().getFullYear()} Grid. All rights reserved.</p>
          <nav className="flex items-center gap-6 text-sm text-neutral-700">
            <a href="#features" className="hover:text-neutral-900">Features</a>
            <a href="#signup" className="hover:text-neutral-900">Sign up</a>
            <a href="#" className="hover:text-neutral-900">Privacy</a>
            <a href="#" className="hover:text-neutral-900">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
