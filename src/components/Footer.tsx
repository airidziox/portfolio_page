
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-gray-800/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex gap-6 mt-4">
            <a 
              href="mailto:airidas.augulis@gmail.com" 
              className="p-2 rounded-full bg-secondary/40 hover:bg-primary/20 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="tel:+37062400759" 
              className="p-2 rounded-full bg-secondary/40 hover:bg-primary/20 transition-colors"
              aria-label="Phone"
            >
              <Phone className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="https://github.com/airidziox" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/40 hover:bg-primary/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5 text-primary" />
            </a>
            <a 
              href="https://linkedin.com/in/airidas-augulis" 
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-secondary/40 hover:bg-primary/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5 text-primary" />
            </a>
          </div>
          
          <div className="mt-6">
            <p className="dark:text-gray-500 light:text-gray-600 text-sm">
              © {year} Airidas Augulis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
