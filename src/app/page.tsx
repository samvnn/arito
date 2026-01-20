import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#EFEDEA]">
      {/* Navigation */}
      <nav className="bg-white px-4 md:px-8 lg:px-16 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/arino-logo.svg"
              alt="Arino Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl md:text-3xl text-[#375A50] font-semibold italic">
              arino
            </span>
          </div>
          <button className="bg-[#375A50] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2a453d] transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <p className="text-sm md:text-base text-[#375A50] font-semibold uppercase tracking-wide">
                Study Smarter, Not Harder
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#375A50] leading-tight">
                Study Smarter,
                <br />
                Not Harder
              </h1>
              <p className="text-lg md:text-xl text-[#375A50]/80 leading-relaxed">
                Arino helps students study smarter—not harder—by cutting unnecessary content, using trusted curriculum-aligned resources, and personalizing learning with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-[#375A50] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a453d] transition-colors">
                  Start Studying Smarter
                </button>
                <button className="border-2 border-[#375A50] text-[#375A50] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#375A50] hover:text-white transition-colors">
                  Watch Demo
                </button>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <div className="flex text-yellow-400">
                  {"★★★★★".split("").map((star, i) => (
                    <span key={i}>{star}</span>
                  ))}
                </div>
                <span className="text-[#375A50] font-semibold">5.0</span>
                <span className="text-[#375A50]/70">From 120+ reviews</span>
              </div>
            </div>

            {/* Right Column - Stats & Image */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#375A50]/10">
                  <div className="text-3xl md:text-4xl font-bold text-[#375A50]">10,000+</div>
                  <div className="text-sm md:text-base text-[#375A50]/70 mt-2">Active Students</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#375A50]/10">
                  <div className="text-3xl md:text-4xl font-bold text-[#375A50]">95%</div>
                  <div className="text-sm md:text-base text-[#375A50]/70 mt-2">Better Results</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#375A50]/10">
                  <div className="text-3xl md:text-4xl font-bold text-[#375A50]">50%</div>
                  <div className="text-sm md:text-base text-[#375A50]/70 mt-2">Time Saved</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#375A50]/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-2xl">📚</div>
                    <div className="text-xs text-[#375A50]/70 mt-1">Student studying</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-xl border border-[#375A50]/10 text-center">
                <div className="text-6xl mb-4">💻</div>
                <p className="text-[#375A50] font-medium">Student studying with laptop</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base text-[#375A50] font-semibold uppercase tracking-wide mb-4">
              The Problem
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#375A50] mb-6">
              Why Studying Today Is Broken
            </h2>
            <p className="text-lg md:text-xl text-[#375A50]/80 max-w-3xl mx-auto">
              Students today are drowning in content, wasting time on irrelevant materials, and studying inefficiently without knowing what works best for them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-[#EFEDEA] p-6 md:p-8 rounded-xl">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#375A50] mb-3">
                Too Much Content
              </h3>
              <p className="text-[#375A50]/80 leading-relaxed">
                Textbooks, YouTube videos, and online resources are filled with unnecessary information that's not even in the curriculum, leading to content overload.
              </p>
            </div>

            <div className="bg-[#EFEDEA] p-6 md:p-8 rounded-xl">
              <div className="text-4xl mb-4">⚠️</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#375A50] mb-3">
                Unreliable Resources
              </h3>
              <p className="text-[#375A50]/80 leading-relaxed">
                Not all YouTube videos or online notes are trustworthy or curriculum-aligned, making it hard to find quality, relevant study materials.
              </p>
            </div>

            <div className="bg-[#EFEDEA] p-6 md:p-8 rounded-xl">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#375A50] mb-3">
                Poor Time Management
              </h3>
              <p className="text-[#375A50]/80 leading-relaxed">
                Students don't know how to prioritize topics, manage their time effectively, or use study methods that work best for their learning style.
              </p>
            </div>
          </div>

          <div className="text-center bg-[#E6D2FF]/30 p-8 md:p-12 rounded-xl">
            <div className="text-5xl mb-4">😰</div>
            <p className="text-xl md:text-2xl font-semibold text-[#375A50]">
              Sound familiar? You're not alone.
            </p>
            <p className="text-lg text-[#375A50]/80 mt-2">
              Thousands of students feel overwhelmed, stressed, and unsure about how to study effectively.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-[#EFEDEA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base text-[#375A50] font-semibold uppercase tracking-wide mb-4">
              Simple Process
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#375A50] mb-6">
              How Arino Works
            </h2>
            <p className="text-lg md:text-xl text-[#375A50]/80 max-w-3xl mx-auto">
              Get started in minutes and transform the way you study with our simple, AI-powered process.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                number: "01",
                title: "Add Your Syllabus",
                description: "Upload your curriculum, subjects, and upcoming exam dates.",
              },
              {
                number: "02",
                title: "AI Builds Your Plan",
                description: "Arino creates a personalized study schedule optimized for your goals.",
              },
              {
                number: "03",
                title: "Study Smart",
                description: "Access curated, curriculum-aligned content that's relevant and trustworthy.",
              },
              {
                number: "04",
                title: "Get Better Results",
                description: "Arino learns how you study best and optimizes your learning over time.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`bg-white p-6 md:p-8 rounded-xl border border-[#375A50]/10 ${
                  index % 2 === 0 ? "md:bg-white" : "md:bg-[#EFEDEA]"
                }`}
              >
                <div className="text-5xl md:text-6xl font-bold text-[#375A50]/20 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#375A50] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#375A50]/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#375A50] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#2a453d] transition-colors">
              Try Arino Free
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base text-[#375A50] font-semibold uppercase tracking-wide mb-4">
              Core Features
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#375A50] mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-lg md:text-xl text-[#375A50]/80 max-w-3xl mx-auto">
              Arino combines the best study tools into one powerful platform designed for student success.
            </p>
          </div>

          {/* Feature 1 - Library */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#375A50]">
                Trusted Curriculum Library
              </h3>
              <p className="text-lg text-[#375A50]/80 leading-relaxed">
                Access a comprehensive library of curriculum-aligned study materials, vetted YouTube videos, and trusted resources—all in one place. No more wasting time searching for reliable content.
              </p>
              <ul className="space-y-3">
                {[
                  "100% curriculum-aligned content for all major boards",
                  "Curated YouTube videos and references from trusted sources",
                  "No irrelevant or unnecessary content—just what you need",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#375A50] font-bold text-xl mt-1">✓</span>
                    <span className="text-[#375A50]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#EFEDEA] p-12 rounded-xl text-center">
              <div className="text-7xl mb-4">📖</div>
              <p className="text-[#375A50] font-medium">Library of educational resources</p>
            </div>
          </div>

          {/* Feature 2 - AI Scheduler */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="bg-[#EFEDEA] p-12 rounded-xl text-center order-2 lg:order-1">
              <div className="text-7xl mb-4">📅</div>
              <p className="text-[#375A50] font-medium">AI Study Scheduler</p>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#375A50]">
                AI-powered study scheduler
              </h3>
              <p className="text-lg text-[#375A50]/80 leading-relaxed">
                Never wonder what to study next. Arino's AI automatically builds a personalized study plan based on your syllabus, deadlines, and available time—optimized for maximum efficiency.
              </p>
              <ul className="space-y-3">
                {[
                  "Automatically prioritizes topics based on exams and difficulty",
                  "Adapts to your progress and adjusts schedules in real-time",
                  "Optimizes study sessions for better retention and less stress",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#375A50] font-bold text-xl mt-1">✓</span>
                    <span className="text-[#375A50]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3 - Brain Profile */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#375A50]">
                Student Brain Profile
              </h3>
              <p className="text-lg text-[#375A50]/80 leading-relaxed">
                Everyone learns differently. Arino creates a personalized brain profile to understand how YOU study best, recommending the most effective methods and content formats for your learning style.
              </p>
              <ul className="space-y-3">
                {[
                  "Identifies your optimal study methods and content types",
                  "Learns from your performance to improve recommendations",
                  "Boosts retention and helps you remember more, longer",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#375A50] font-bold text-xl mt-1">✓</span>
                    <span className="text-[#375A50]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#EFEDEA] p-12 rounded-xl text-center">
              <div className="text-7xl mb-4">😊</div>
              <p className="text-[#375A50] font-medium">Happy student learning effectively</p>
            </div>
          </div>

          {/* Feature 4 - Resource Scanning */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-[#EFEDEA] p-12 rounded-xl text-center order-2 lg:order-1">
              <div className="text-7xl mb-4">📄</div>
              <p className="text-[#375A50] font-medium">Student scanning study materials</p>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#375A50]">
                Smart Resource Scanning
              </h3>
              <p className="text-lg text-[#375A50]/80 leading-relaxed">
                Upload any PDF, notes, or study material—Arino's AI scans and extracts only what's relevant to your syllabus, removing unnecessary content so you focus on what truly matters.
              </p>
              <ul className="space-y-3">
                {[
                  "Instantly scan textbooks, PDFs, and notes for relevant content",
                  "Remove fluff and focus on curriculum-aligned information",
                  "Save hours by studying only what you need for exams",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#375A50] font-bold text-xl mt-1">✓</span>
                    <span className="text-[#375A50]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-[#EFEDEA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base text-[#375A50] font-semibold uppercase tracking-wide mb-4">
              Real Results
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#375A50] mb-6">
              The Arino Advantage
            </h2>
            <p className="text-lg md:text-xl text-[#375A50]/80 max-w-3xl mx-auto">
              Transform your study routine and achieve better results with less stress and more confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                title: "Save 50% Study Time",
                description: "Cut out irrelevant content and focus only on what matters. Study smarter, not longer, and free up time for other activities.",
              },
              {
                title: "Crystal Clear Clarity",
                description: "Know exactly what to study, when to study it, and how to approach each topic. No more confusion or wasted effort.",
              },
              {
                title: "Better Retention",
                description: "Learn using methods proven to work for your brain. Retain more information and remember it when it counts—during exams.",
              },
              {
                title: "Higher Grades",
                description: "Focus on curriculum-aligned content and study efficiently. Students using Arino see an average grade improvement of 15-20%.",
              },
              {
                title: "Less Stress",
                description: "Stop feeling overwhelmed. With a clear plan and trusted resources, you'll feel confident and in control of your studies.",
              },
              {
                title: "Personalized Learning",
                description: "Get recommendations tailored to your learning style, strengths, and areas for improvement—it's like having a personal tutor.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-6 md:p-8 rounded-xl border border-[#375A50]/10 ${
                  index % 3 === 1 ? "lg:bg-[#EFEDEA]" : ""
                }`}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#375A50] mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[#375A50]/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <div className="bg-white p-8 md:p-12 rounded-xl border border-[#375A50]/10">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl text-[#375A50] italic mb-6 leading-relaxed">
                "Before Arino, I was drowning in YouTube videos and textbooks, never knowing if I was studying the right things. Now I have a clear plan, save hours every week, and my grades have improved so much!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#375A50] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  PS
                </div>
                <div>
                  <p className="font-semibold text-[#375A50]">Priya Sharma</p>
                  <p className="text-[#375A50]/70">Class 11 Student, CBSE Board</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-[#375A50] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Ready to Study Smarter, Not Harder?
              </h2>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                Join thousands of students who are saving time, reducing stress, and achieving better results with Arino's AI-powered study platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-[#375A50] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#EFEDEA] transition-colors">
                  Start Free Today
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#375A50] transition-colors">
                  Schedule a Demo
                </button>
              </div>
              <ul className="space-y-2 text-white/90">
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Free for 30 days—no credit card required</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Works with all major curriculum boards</span>
                </li>
                <li className="flex items-center gap-2">
                  <span>✓</span>
                  <span>Cancel anytime, no questions asked</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-12 rounded-xl text-center">
              <div className="text-7xl mb-4">🎓</div>
              <p className="text-white font-medium">Start Your Journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white border-t border-[#375A50]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/arino-logo.svg"
                  alt="Arino Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl text-[#375A50] font-semibold italic">arino</span>
              </div>
              <p className="text-[#375A50]/70 italic">
                Study smarter, not harder.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-[#375A50] mb-4">Product</h4>
              <ul className="space-y-2 text-[#375A50]/70">
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">For Schools</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#375A50] mb-4">Resources</h4>
              <ul className="space-y-2 text-[#375A50]/70">
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Study Tips</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-[#375A50] mb-4">Company</h4>
              <ul className="space-y-2 text-[#375A50]/70">
                <li><a href="#" className="hover:text-[#375A50] transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-[#375A50] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#375A50]/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#375A50]/70 text-sm">
                © 2026 Arino. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-[#375A50]/70 hover:text-[#375A50] transition-colors">Instagram</a>
                <a href="#" className="text-[#375A50]/70 hover:text-[#375A50] transition-colors">YouTube</a>
                <a href="#" className="text-[#375A50]/70 hover:text-[#375A50] transition-colors">Twitter</a>
                <a href="#" className="text-[#375A50]/70 hover:text-[#375A50] transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}