"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  { q: "What is Arito?", a: "Arito helps you discover how your brain learns best. You take a short quiz, get your brain profile, and then get a study plan that fits you." },
  { q: "Who is Arito for?", a: "Arito is for students ages 10–16 who want to study smarter. If you ever feel like regular study methods don't work for you, Arito can help." },
  { q: "How do I get started?", a: "Just take the free 2-minute brain quiz. We'll figure out your learning style and give you a personalized profile and plan." },
  { q: "Why Arito?", a: "Because everyone's brain is different. Arito shows you how YOU learn best so you can stop wasting time and focus on what actually works." },
  { q: "What if I don't like it?", a: "No worries—the quiz is free and there's no commitment. Give it a try and see if it helps." },
  { q: "Can I cancel anytime?", a: "Yes! You're in control. You can stop using Arito whenever you want." },
];

export default function Home() {
  const [MenuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col hero-notebook-grid text-text">
      {/* Header - floating bar */}
      <header
        className={`sticky top-4 z-10 mx-4 mt-4 rounded-3xl shadow-md bg-secondary backdrop-blur sm:mx-6 lg:mx-auto lg:max-w-10xl lg:w-[65%] transition-transform duration-500 ease-out ${
          "animate-slide-down"
        }`}
        style={{
          transform: "translateY(0)",
          animation: "slideDown 0.7s cubic-bezier(0.19,1,0.22,1)"
        }}
      >
      <style jsx global>{`
        @keyframes slideDown {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          65% {
            transform: translateY(8px);
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-slide-down {
          animation: slideDown 1s cubic-bezier(0.19,1,0.22,1);
        }
      `}</style>
        <div className="flex h-14 items-center justify-between px-4 sm:px-6 text-primary font-semibold ">
          <div className="flex flex-1 md:hidden" aria-hidden />
          <nav className="hidden h-14 flex-1 items-center gap-7 text-sm text-primary font-medium md:flex">
            <span>About</span>
            <span>Contact</span>
            <span>FAQ</span>
          </nav>
          <img src="/arito-logo.svg" alt="Arito" className="h-8 shrink-0 w-auto" />
          <nav className="flex flex-1 items-center justify-end gap-6 text-xl text-primary font-semibold md:justify-end">
            <button
              type="button"
              className="flex items-center justify-center text-primary md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={MenuOpen ? "Close menu" : "Open menu"}
            >
              {MenuOpen ? (
                <ion-icon name="close-outline" className="h-7 w-7 shrink-0 pointer-events-none" />
              ) : (
                <ion-icon name="menu-outline" className="h-7 w-7 shrink-0 pointer-events-none" />
              )}
            </button>

            <span className="hidden items-center gap-1.5 rounded-3xl bg-white px-3 py-1.5 text-sm text-secondary md:flex">
              Sign in
              <ion-icon name="log-in-outline"></ion-icon>
            </span>
          </nav>
        </div>  
      </header>
      
      {/* Mobile menu - visible only when menuOpen is true, only on small screens */}
      <div
        className={`fixed inset-0 z-20 md:hidden ${MenuOpen ? "block" : "hidden"}`}
        aria-hidden={!MenuOpen}
      >
        {/* Optional: dimmed overlay; click to close */}
        <button
          type="button"
          className="absolute inset-0"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
        {/* Menu panel (e.g. slide from top or right) */}
        <div className="relative mt-14 mx-4 rounded-md bg-secondary p-6 shadow-lg">
          <nav className="flex flex-col gap-4 text-primary font-medium">
            <hr className="my-1 border-primary border-0.2" />
            <span className="cursor-pointer">Benefits</span>
            <hr className="my-1 border-primary border-0.2" />
            <span className="cursor-pointer">How it works</span>
            <hr className="my-1 border-primary border-0.2" />
            <span className="cursor-pointer">FAQ</span>
            <hr className="my-1 border-primary border-0.2" />
            <span className="flex items-center font-semibold max-w-fit gap-1.5 rounded-md bg-white px-3 py-1.5 text-secondary">Sign in <ion-icon name="log-in-outline"></ion-icon></span>
          </nav>
        </div>
      </div>
      
      {/* Hero section - gradient container */}
      <section className="flex px-4 py-8 sm:px-6 lg:px-auto lg:max-w-10xl lg:mx-auto lg:w-[67%]">
        <div
          className="w-full rounded-3xl overflow-hidden animate-fade-in-down"
          style={{
            animation: "fadeInDown 0.9s cubic-bezier(0.23,1,0.32,1) 0.1s both"
          }}
        >
          <div className="flex flex-col items-center text-center px-6 pt-8 pb-10 ">
            <h1 className="text-5xl lg:text-5xl font-bold lg:tracking-wide text-secondary lg:max-w-xl leading-tight">
              Study&nbsp;Smarter,
              <br />
              Not&nbsp;Harder
            </h1>
            <p className="mt-2 max-w-xl text-1xs text-secondary/80 lg:text-md ">
              Find out how your brain learns best. Unlock your learning superpowers and a path made just for you.
            </p>
            <a
              href="#"
              className="mt-8 mr-2 inline-flex items-center justify-center rounded-3xl bg-accent px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-secondary transition-colors"
            >
              Learn your way
            </a>
          </div>
        </div>
        <style jsx global>{`
          @keyframes fadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-32px);
            }
            20% {
              opacity: 0;
              transform: translateY(-32px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>

      {/* About Arito - Problem, Benefits */}
      <section className="relative w-full bg-accent py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <span className="mb-8 inline-flex items-center gap-1 rounded-xl bg-bg px-4 py-1 text-xs font-semibold text-secondary">
            <ion-icon name="alert-circle-outline" className="mr-1"></ion-icon>
            ABOUT ARITO
          </span>
        </div>

        {/* Problem */}
        <div className="mx-auto max-w-4xl">
          <p className="text-center text-sm text-primary/80">Studying the same as everyone else?</p>
          <h2 className="mt-1 text-center text-2xl font-bold text-bg sm:text-3xl">
             We help you learn your way
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-bg/80">
            Most of us don&apos;t know how our brain learns best. So we waste time reading when we learn better by doing, or cramming when short bursts work better for us.
          </p>
        </div>

        {/* Benefits - 3 horizontal cards */}
        <div className="mx-auto mt-14 max-w-6xl mb-8">
          <p className="text-center text-sm text-primary/80">What You Get</p>
          <h2 className="mt-1 text-center text-2xl font-bold text-bg sm:text-3xl">
            Your learning journey starts here
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-2xl bg-accent/20 p-6 border border-primary flex flex-col items-center text-center">
              <span className="mb-3 inline-flex rounded-full bg-white/20 p-2 text-accent justify-center items-center">
                <ion-icon name="sparkles-outline" className="h-6 w-6 text-primary" />
              </span>
              <h3 className="text-lg font-semibold text-bg text-center">Find your learning superpower</h3>
              <p className="mt-2 text-sm text-bg text-center">See if you learn best by watching, doing, or listening</p>
            </div>
            <div className="rounded-2xl bg-accent/20 p-6 border border-primary flex flex-col items-center text-center">
              <span className="mb-3 inline-flex rounded-full bg-white/20 p-2 text-accent justify-center items-center">
                <ion-icon name="document-text-outline" className="h-6 w-6 text-primary" />
              </span>
              <h3 className="text-lg font-semibold text-bg text-center">A plan made just for you</h3>
              <p className="mt-2 text-sm text-bg text-center">Get your own brain profile and a study plan that fits how YOU learn.</p>
            </div>
            <div className="rounded-2xl bg-accent/20 p-6 border border-primary flex flex-col items-center">
              <span className="mb-3 inline-flex rounded-full bg-white/20 p-2 text-accent justify-center items-center">
                <ion-icon name="trending-up-outline" className="h-6 w-6 text-primary" />
              </span>
              <h3 className="text-lg font-semibold text-bg text-center">Study less, get more</h3>
              <p className="mt-2 text-sm text-bg text-center">Skip what doesn&apos;t work. Stick to stuff that actually helps your brain.</p>
            </div>
          </div>
        </div> 
      </section>

      {/* How it works - vertical timeline */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto mt-8 max-w-4xl">
          <p className="text-center font-bold text-sm text-secondary/60">How it works</p>
          <h2 className="mt-1 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Get your brain profile in 4 easy steps
          </h2>

          <div className="relative mt-10 space-y-6">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-8 bottom-8 w-0.5 bg-secondary/30 md:left-6" aria-hidden />

            {/* Step 1 */}
            <div className="relative flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-bg">
                1
              </div>
              <div className="relative flex-1 rounded-2xl bg-gradient-to-b from-primary/80 to-primary/20 p-6 shadow-md">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Take a 2-minute brain quiz</h3>
                  <p className="mt-2 text-sm font-bold text-secondary/60">Quick, fun questions about how you like to study and remember stuff.</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg hover:bg-hover transition-colors">
                    Start the quiz
                    <ion-icon name="arrow-forward-outline" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-bg">
                2
              </div>
              <div className="relative flex-1 rounded-2xl bg-gradient-to-b from-primary/80 to-primary/20 p-6 shadow-md">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Get your brain profile</h3>
                  <p className="mt-2 text-sm font-bold text-secondary/60">We figure out your strengths and how you focus best then turn it into your profile.</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg hover:bg-hover transition-colors">
                    Check out a sample
                    <ion-icon name="arrow-forward-outline" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-bg">
                3
              </div>
              <div className="relative flex-1 rounded-2xl bg-gradient-to-b from-primary/80 to-primary/20 p-6 shadow-md">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Practice with stuff that fits you</h3>
                  <p className="mt-2 text-sm font-bold text-secondary/60">Lessons and tools picked for how your brain works</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg hover:bg-hover transition-colors">
                    Start learning
                    <ion-icon name="arrow-forward-outline" className="h-4 w-4" />
                  </a>
                </div> 
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative flex gap-4 md:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent text-lg font-bold text-bg">  
                4
              </div>
              <div className="relative flex-1 rounded-2xl bg-gradient-to-b from-primary/80 to-primary/20 p-6 shadow-md">
                <div>
                  <h3 className="text-lg font-semibold text-secondary">Track progress and level up</h3>
                  <p className="mt-2 text-sm font-bold text-secondary/60">Your brain profile evolves as you learn and so does your study plan.</p>
                  <a href="#" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-bg hover:bg-hover transition-colors">
                    View dashboard
                    <ion-icon name="arrow-forward-outline" className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl bg-accent shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            {/* Left: text and button */}
            <div className="flex-1 px-6 py-6 md:px-8 md:py-8">
              <p className="text-xs font-medium text-bg/80">Ready to find out?</p>
              <h2 className="mt-1 text-xl font-bold leading-tight text-bg sm:text-2xl">
                Take the FREE quiz to get your
                <br />
                brain profile
              </h2>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-secondary shadow-md transition hover:bg-primary/30 hover:shadow-lg"
              >
                Start the quiz
                <ion-icon name="arrow-forward-outline" className="h-4 w-4" />
              </a>
            </div>
            {/* Right: avatar grid with frosted overlay */}
            <div className="relative flex shrink-0 items-center justify-center px-6 py-6 md:px-8 md:py-8">
              <div className="relative overflow-hidden rounded-xl bg-white/20 p-4 backdrop-blur-sm">
                <p className="mb-3 text-center text-xs font-medium text-white/90">Join thousands learning their way</p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/40 bg-white/60"
                    >
                      <ion-icon name="person" className="h-4 w-4 text-secondary/70" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <p className="text-center text-sm text-secondary/70">FAQ</p>
          <h2 className="mt-1 text-center text-2xl font-bold text-secondary sm:text-3xl">
            Everything you need to know about Arito
          </h2>
          <div className="mt-8 space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-xl border border-secondary/50 bg-gradient-to-b from-primary/80 to-primary/20 shadow-xl transition-shadow hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="flex w-full items-center justify-between px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="font-medium text-secondary">{item.q}</span>
                  <ion-icon
                    name={openFaq === i ? "chevron-up-outline" : "chevron-down-outline"}
                    className="h-5 w-5 shrink-0 text-secondary/70"
                  />
                </button>
                {openFaq === i && (
                  <div className="border-secondary/50 px-5 py-4">
                    <p className="text-sm text-secondary/80">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl overflow-hidden rounded-2xl bg-accent px-6 py-8 text-center shadow-lg sm:px-8 sm:py-10">
          <ion-icon name="happy-outline" className="mx-auto mb-3 block h-10 w-10 text-bg" />
          <h2 className="text-xl font-bold text-bg sm:text-2xl">
            Ready but not sure? Take the quiz!
          </h2>
          <p className="mt-2 text-xs font-bold text-bg/90 sm:text-sm">
            Your personal path to discovering how you learn best
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary  px-5 py-2.5 text-sm font-semibold text-secondary shadow-md transition hover:bg-primary/30 hover:shadow-lg"
          >
            Start the Quiz
            <ion-icon name="arrow-forward-outline" className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-secondary/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <img src="/arito-logo.svg" alt="Arito" className="mx-auto h-12 w-auto rounded-xl" />
          <nav className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-1">
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">Support</a>
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">Reviews</a>
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">Pricing</a>
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">About us</a>
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">Contact</a>
          </nav>
          <nav className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-1">
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">Privacy</a>
            <a href="#" className="text-sm text-secondary hover:text-accent transition-colors">Terms & Conditions</a>
          </nav>
          <p className="mx-auto mt-8 max-w-2xl text-sm text-secondary/70">
            All information and materials on this website are provided for informational and educational purposes only. Individual results may vary. No guarantees of outcomes or specific results are made or implied.
          </p>
          <hr className="mx-auto mt-8 max-w-2xl border-secondary/20" />
          <div className="mt-8 text-sm text-secondary/70">
            <p>© {new Date().getFullYear()} Arito. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
