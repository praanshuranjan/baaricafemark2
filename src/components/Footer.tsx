import { Facebook, Twitter, Instagram } from 'lucide-react';
import Ornament from './Ornament';
const Footer = () => {
  return <footer className="relative footer-gradient py-12 px-4 md:px-8">
      {/* Gold gradient border at top */}
      <div className="absolute top-0 left-0 right-0 h-px gold-gradient-border" />
      
      <div className="max-w-4xl mx-auto text-center">
        {/* Decorative elements */}
        <div className="flex justify-center mb-6">
          <Ornament className="text-gold" />
        </div>

        {/* Contact Info */}
        <div className="font-serif text-gold-light space-y-2 mb-8">
          <p className="text-sm tracking-wide">hello@baari-cafe.com | 123.456.7890</p>
          <p className="text-sm tracking-wide opacity-80">Champa Gali, South Delhi</p>
          <p className="text-xs tracking-wide opacity-60 mt-2">Champa Gali Lane, 3, Westend Marg, Saiyad ul Ajaib, Saket, New Delhi, Delhi 110030</p>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-gold-light hover:text-gold transition-colors duration-300" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gold-light hover:text-gold transition-colors duration-300" aria-label="Twitter">
            <Twitter size={20} />
          </a>
          <a href="https://instagram.com/baari.cafe" target="_blank" rel="noopener noreferrer" className="text-gold-light hover:text-gold transition-colors duration-300" aria-label="Instagram">
            <Instagram size={20} />
          </a>
        </div>

        {/* Moon and Stars Icon */}
        <div className="flex justify-center items-center gap-2 text-gold/60 mb-4">
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z" />
          </svg>
          <span className="text-xs">✦</span>
          <span className="text-xs opacity-60">✧</span>
          <span className="text-xs opacity-40">✦</span>
        </div>

        {/* Disclaimer */}
        <p className="font-serif text-xs text-gold/40 tracking-wider mb-2">
          * Images are for display purposes only
        </p>

        {/* Copyright */}
        <p className="font-serif text-xs text-gold/40 tracking-wider uppercase">© 2025 BAARI CAFÉ. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>;
};
export default Footer;