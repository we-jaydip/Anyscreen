'use client';

export default function HeroAnimatedSection() {
  return (
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-10 mt-16 md:mt-24">
      <section className="flex flex-col items-center justify-center text-center py-10 relative">
        <h1
          className="text-4xl md:text-5xl font-bold mb-3 animate-fade-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          Your Competitors Are Already Online. Are You?
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl animate-fade-up"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Discover how having a website can take your business from{' '}
          <span className="text-[#00FF8B] font-semibold">local to legendary</span>.
        </p>
        <div className="mt-6 animate-bounce text-2xl text-[#00FF8B]">↓</div>

        <style jsx>{`
          @keyframes fade-up {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-up {
            animation: fade-up 0.8s ease-out both;
          }
        `}</style>
      </section>
    </div>
  );
}
