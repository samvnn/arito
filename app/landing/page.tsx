'use client'

import Image from "next/image";
import Link from "next/link";
import { createElement } from "react";

// IonIcon component wrapper for TypeScript compatibility
function IonIcon({ name, ...props }: { name: string; [key: string]: any }) {
  return createElement("ion-icon" as any, { name, ...props });
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white px-4 md:px-8 lg:px-16 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/shared/arito-logo.svg"
              alt="Arito Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl md:text-3xl text-primary font-semibold italic">
              arito
            </span>
          </div>
          <Link 
            href="/auth/login"
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary px-4 py-2 text-sm font-medium">
                <IonIcon name="sparkles-outline" />
                <span>AI-Powered Study Platform</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Study Smarter,
                <br />
                <span className="italic">Not Harder</span>
              </h1>
              <p className="text-lg md:text-xl text-primary/80 leading-relaxed">
                Arito helps students study smarter—not harder—by cutting unnecessary content, using trusted curriculum-aligned resources, and personalizing learning with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/auth/signup"
                  className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors flex items-center gap-2"
                >
                  Start Studying Smarter
                  <span>→</span>
                </Link>
                <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors">
                  Watch Demo
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 pt-4">
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">10,000+</div>
                  <div className="text-sm md:text-base text-primary/70 mt-1">Active Students</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">95%</div>
                  <div className="text-sm md:text-base text-primary/70 mt-1">Better Results</div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary">50%</div>
                  <div className="text-sm md:text-base text-primary/70 mt-1">Time Saved</div>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              <Image
                src="/landing/student-studying-laptop.jpg"
                alt="Student studying with laptop"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide mb-4">
              <IonIcon name="alert-circle-outline" />
              <span>The Problem</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Why Studying Today Is Broken
            </h2>
            <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto">
              Students today are drowning in content, wasting time on irrelevant materials, and studying inefficiently without knowing what works best for them.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10 text-center">
              <div className="text-4xl mb-4 flex justify-center">
                <IonIcon name="albums-outline" style={{ fontSize: '3rem', color: 'var(--foreground)' }} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                Too Much Content
              </h3>
              <p className="text-primary/80 leading-relaxed">
                Textbooks, YouTube videos, and online resources are filled with unnecessary information that's not even in the curriculum, leading to content overload.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10 text-center">
              <div className="text-4xl mb-4 flex justify-center">
                <IonIcon name="trending-down-outline" style={{ fontSize: '3rem', color: 'var(--foreground)' }} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                Unreliable Resources
              </h3>
              <p className="text-primary/80 leading-relaxed">
                Not all YouTube videos or online notes are trustworthy or curriculum-aligned, making it hard to find quality, relevant study materials.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-primary/10 text-center">
              <div className="text-4xl mb-4 flex justify-center">
                <IonIcon name="trending-down-outline" style={{ fontSize: '3rem', color: 'var(--foreground)' }} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                Poor Time Management
              </h3>
              <p className="text-primary/80 leading-relaxed">
                Students don't know how to prioritize topics, manage their time effectively, or use study methods that work best for their learning style.
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-xl h-64 md:h-80">
            <Image
              src="/landing/books.jpg"
              alt="Books"
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center p-8 md:p-12">
              <div className="text-left">
                <p className="text-xl md:text-2xl font-semibold text-white">
                  Sound familiar? You're not alone.
                </p>
                <p className="text-lg text-white/90 mt-2">
                  Thousands of students feel overwhelmed, stressed, and unsure about how to study effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 bg-white border border-primary/20 text-primary px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wide mb-4">
              <IonIcon name="flash-outline" />
              <span>Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              How Arito Works
            </h2>
            <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto">
              Get started in minutes and transform the way you study with our simple, AI-powered process.
            </p>
          </div>

          <div className="relative">
            {/* Grid with icons and details aligned */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 relative">
              {/* Horizontal connecting line */}
              <div className="absolute top-8 md:top-10 left-0 right-0 h-0.5 bg-primary/20 hidden md:block z-0"></div>
              
              {[
                {
                  icon: "cloud-upload-outline",
                  number: "01",
                  title: "Add Your Syllabus",
                  description: "Upload your curriculum, subjects, and upcoming exam dates.",
                },
                {
                  icon: "book-outline",
                  number: "02",
                  title: "AI Builds Your Plan",
                  description: "Arito creates a personalized study schedule optimized for your goals.",
                },
                {
                  icon: "checkmark-circle-outline",
                  number: "03",
                  title: "Study Smart",
                  description: "Access curated, curriculum-aligned content that's relevant and trustworthy.",
                },
                {
                  icon: "trending-up-outline",
                  number: "04",
                  title: "Get Better Results",
                  description: "Arito learns how you study best and optimizes your learning over time.",
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center relative z-10"
                >
                  {/* Icon container */}
                  <div className="bg-primary rounded-lg w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mb-4">
                    <IonIcon 
                      name={step.icon} 
                      style={{ fontSize: '2rem', color: 'white' }} 
                      className="text-white"
                    />
                  </div>
                  {/* Number */}
                  <div className="text-5xl md:text-6xl font-bold text-primary/20 mb-4">
                    {step.number}
                  </div>
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p className="text-primary/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/auth/signup"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors"
            >
              <IonIcon name="flash-outline" />
              <span>Try Arito Free</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wide mb-4">
              Core Features
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              Everything You Need to Excel
            </h2>
            <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto">
              Arito combines the best study tools into one powerful platform designed for student success.
            </p>
          </div>

          {/* Feature 1 - Library */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <IonIcon name="library-outline" style={{ fontSize: '2.5rem', color: 'var(--foreground)' }} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                Trusted Curriculum Library
              </h3>
              <p className="text-lg text-primary/80 leading-relaxed">
                Access a comprehensive library of curriculum-aligned study materials, vetted YouTube videos, and trusted resources—all in one place. No more wasting time searching for reliable content.
              </p>
              <ul className="space-y-3">
                {[
                  "100% curriculum-aligned content for all major boards",
                  "Curated YouTube videos and references from trusted sources",
                  "No irrelevant or unnecessary content—just what you need",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">✓</span>
                    <span className="text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-xl overflow-hidden">
              <Image
                src="/landing/library-of-resources.jpg"
                alt="Library of educational resources"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Feature 2 - AI Scheduler */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="bg-background rounded-xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/landing/study-scheduler.jpg"
                alt="AI Study Scheduler"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-2">
                <IonIcon name="calendar-outline" style={{ fontSize: '2.5rem', color: 'var(--foreground)' }} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                AI-powered study scheduler
              </h3>
              <p className="text-lg text-primary/80 leading-relaxed">
                Never wonder what to study next. Arito's AI automatically builds a personalized study plan based on your syllabus, deadlines, and available time—optimized for maximum efficiency.
              </p>
              <ul className="space-y-3">
                {[
                  "Automatically prioritizes topics based on exams and difficulty",
                  "Adapts to your progress and adjusts schedules in real-time",
                  "Optimizes study sessions for better retention and less stress",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">✓</span>
                    <span className="text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature 3 - Brain Profile */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-2">
                <IonIcon name="person-outline" style={{ fontSize: '2.5rem', color: 'var(--foreground)' }} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                Student Brain Profile
              </h3>
              <p className="text-lg text-primary/80 leading-relaxed">
                Everyone learns differently. Arito creates a personalized brain profile to understand how YOU study best, recommending the most effective methods and content formats for your learning style.
              </p>
              <ul className="space-y-3">
                {[
                  "Identifies your optimal study methods and content types",
                  "Learns from your performance to improve recommendations",
                  "Boosts retention and helps you remember more, longer",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">✓</span>
                    <span className="text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-xl overflow-hidden h-[400px]">
              <Image
                src="/landing/brain-profile.jpg"
                alt="Happy student learning effectively"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Feature 4 - Resource Scanning */}
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="bg-background rounded-xl overflow-hidden order-2 lg:order-1 h-[400px]">
              <Image
                src="/landing/resource-scanning.jpg"
                alt="Student scanning study materials"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-2">
                <IonIcon name="scan-outline" style={{ fontSize: '2.5rem', color: 'var(--foreground)' }} />
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary">
                Smart Resource Scanning
              </h3>
              <p className="text-lg text-primary/80 leading-relaxed">
                Upload any PDF, notes, or study material—Arito's AI scans and extracts only what's relevant to your syllabus, removing unnecessary content so you focus on what truly matters.
              </p>
              <ul className="space-y-3">
                {[
                  "Instantly scan textbooks, PDFs, and notes for relevant content",
                  "Remove fluff and focus on curriculum-aligned information",
                  "Save hours by studying only what you need for exams",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-primary font-bold text-xl mt-1">✓</span>
                    <span className="text-primary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm md:text-base text-primary font-semibold uppercase tracking-wide mb-4">
              Real Results
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              The Arito Advantage
            </h2>
            <p className="text-lg md:text-xl text-primary/80 max-w-3xl mx-auto">
              Transform your study routine and achieve better results with less stress and more confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {[
              {
                icon: "time-outline",
                title: "Save 50% Study Time",
                description: "Cut out irrelevant content and focus only on what matters. Study smarter, not longer, and free up time for other activities.",
              },
              {
                icon: "calendar-outline",
                title: "Crystal Clear Clarity",
                description: "Know exactly what to study, when to study it, and how to approach each topic. No more confusion or wasted effort.",
              },
              {
                icon: "trending-up-outline",
                title: "Better Retention",
                description: "Learn using methods proven to work for your brain. Retain more information and remember it when it counts—during exams.",
              },
              {
                icon: "checkmark-circle-outline",
                title: "Higher Grades",
                description: "Focus on curriculum-aligned content and study efficiently. Students using Arito see an average grade improvement of 15-20%.",
              },
              {
                icon: "flash-outline",
                title: "Less Stress",
                description: "Stop feeling overwhelmed. With a clear plan and trusted resources, you'll feel confident and in control of your studies.",
              },
              {
                icon: "sparkles-outline",
                title: "Personalized Learning",
                description: "Get recommendations tailored to your learning style, strengths, and areas for improvement—it's like having a personal tutor.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className={`bg-white p-6 md:p-8 rounded-xl border border-primary/10 ${
                  index % 3 === 1 ? "lg:bg-background" : ""
                }`}
              >
                <div className="bg-primary rounded-lg w-12 h-12 md:w-14 md:h-14 flex items-center justify-center mb-4">
                  <IonIcon 
                    name={benefit.icon} 
                    style={{ fontSize: '1.75rem', color: 'white' }} 
                  />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3">
                  {benefit.title}
                </h3>
                <p className="text-primary/80 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 md:px-8 lg:px-16 py-12 md:py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Ready to Study Smarter, Not Harder?
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
              Join thousands of students who are saving time, reducing stress, and achieving better results with Arito's AI-powered study platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/auth/signup"
                className="bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-background transition-colors"
              >
                Start Free Today
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-colors">
                Schedule a Demo
              </button>
            </div>
            <ul className="space-y-2 text-white/90">
              <li className="flex items-center justify-center gap-2">
                <span>✓</span>
                <span>Free for 30 days—no credit card required</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span>✓</span>
                <span>Works with all major curriculum boards</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span>✓</span>
                <span>Cancel anytime, no questions asked</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-white border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/arito-logo.svg"
                  alt="Arito Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10"
                />
                <span className="text-2xl text-primary font-semibold italic">arito</span>
              </div>
              <p className="text-primary/70 italic">
                Study smarter, not harder.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Product</h4>
              <ul className="space-y-2 text-primary/70">
                <li><a href="#" className="hover:text-primary transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">For Schools</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Resources</h4>
              <ul className="space-y-2 text-primary/70">
                <li><a href="#" className="hover:text-primary transition-colors">Study Tips</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-primary mb-4">Company</h4>
              <ul className="space-y-2 text-primary/70">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-primary/70 text-sm">
                © 2026 Arito. All rights reserved.
              </p>
              <div className="flex gap-6">
                <a 
                  href="#" 
                  className="text-primary/70 transition-colors hover:[color:#E4405F]"
                  aria-label="Instagram"
                >
                  <IonIcon name="logo-instagram" style={{ fontSize: '1.5rem' }} />
                </a>
                <a 
                  href="#" 
                  className="text-primary/70 transition-colors hover:[color:#FF0000]"
                  aria-label="YouTube"
                >
                  <IonIcon name="logo-youtube" style={{ fontSize: '1.5rem' }} />
                </a>
                <a 
                  href="#" 
                  className="text-primary/70 transition-colors hover:[color:#1DA1F2]"
                  aria-label="Twitter"
                >
                  <IonIcon name="logo-twitter" style={{ fontSize: '1.5rem' }} />
                </a>
                <a 
                  href="#" 
                  className="text-primary/70 transition-colors hover:[color:#0077B5]"
                  aria-label="LinkedIn"
                >
                  <IonIcon name="logo-linkedin" style={{ fontSize: '1.5rem' }} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
