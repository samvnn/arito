import Image from "next/image";
import Link from "next/link";
import IonIcon from "./IonIcon";

export default function Navigation() {
  return (
    <nav className="bg-white px-4 md:px-8 lg:px-16 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
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
        </Link>
        <Link 
          href="/auth/login"
          className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
