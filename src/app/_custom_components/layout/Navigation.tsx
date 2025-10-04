import Link from "next/link";

const Navigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="container px-5 sm:px-12 md:px-16 lg:px-20">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            Ecoscope
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about-us" className="hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/our-services" className="hover:text-primary transition-colors">
              Our Services
            </Link>
            <Link href="/contact-us" className="hover:text-primary transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
