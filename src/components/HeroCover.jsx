import Spline from '@splinetool/react-spline';

export default function HeroCover() {
  return (
    <header className="relative w-full" aria-label="Hero">
      <div className="relative h-[70vh] w-full overflow-hidden">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/80" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-[800] tracking-tight text-4xl sm:text-5xl md:text-6xl text-neutral-900 drop-shadow-[0_1px_0_rgba(255,255,255,0.6)]">
              Create your account and get started
            </h1>
            <p className="mt-4 text-neutral-700 text-base sm:text-lg md:text-xl">
              A minimalist, modern experience with interactive motion. Sign up in seconds and join the grid.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <a
                href="#signup"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-white text-sm sm:text-base font-medium shadow-lg shadow-neutral-900/10 transition hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-md bg-white/70 backdrop-blur px-5 py-3 text-neutral-900 text-sm sm:text-base font-medium ring-1 ring-neutral-200 transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
