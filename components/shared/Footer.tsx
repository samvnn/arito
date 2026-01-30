import Image from "next/image";
import Link from "next/link";
import IonIcon from "./IonIcon";

export default function Footer() {
  return (
    <footer className="px-4 md:px-8 lg:px-16 py-12 md:py-16 bg-secondary border-t border-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/shared/arito-logo.svg"
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
                className="text-primary/70 transition-colors hover:[color:var(--social-instagram)]"
                aria-label="Instagram"
              >
                <IonIcon name="logo-instagram" style={{ fontSize: '1.5rem' }} />
              </a>
              <a 
                href="#" 
                className="text-primary/70 transition-colors hover:[color:var(--social-youtube)]"
                aria-label="YouTube"
              >
                <IonIcon name="logo-youtube" style={{ fontSize: '1.5rem' }} />
              </a>
              <a 
                href="#" 
                className="text-primary/70 transition-colors hover:[color:var(--social-twitter)]"
                aria-label="Twitter"
              >
                <IonIcon name="logo-twitter" style={{ fontSize: '1.5rem' }} />
              </a>
              <a 
                href="#" 
                className="text-primary/70 transition-colors hover:[color:var(--social-linkedin)]"
                aria-label="LinkedIn"
              >
                <IonIcon name="logo-linkedin" style={{ fontSize: '1.5rem' }} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
