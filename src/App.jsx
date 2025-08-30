import HeroCover from './components/HeroCover';
import SignUpForm from './components/SignUpForm';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col">
      <HeroCover />

      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <section id="signup" className="-mt-24 mb-16 scroll-mt-24">
          <SignUpForm />
        </section>

        <section className="mb-24">
          <Features />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
