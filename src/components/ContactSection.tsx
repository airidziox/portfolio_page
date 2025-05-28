
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
  };

  return (
    <section id="contact" className="container-section bg-secondary/30 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Let's Talk</h2>
          <p className="dark:text-gray-400 light:text-gray-700 max-w-2xl mx-auto">
            Got a project in mind? Reach out to me and let's create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Channels - Left Side */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">Contact Channels</h3>
            <div className="space-y-6">
              <a href="mailto:airidas.augulis@gmail.com" className="flex items-center gap-4 p-5 bg-secondary/40 rounded-lg hover:bg-primary/20 transition-all dark:text-white light:text-gray-800">
                <div className="text-primary">
                  <Mail className="h-6 w-6" />
                </div>
                <span>airidas.augulis@gmail.com</span>
              </a>
              
              <a href="tel:+37062400759" className="flex items-center gap-4 p-5 bg-secondary/40 rounded-lg hover:bg-primary/20 transition-all dark:text-white light:text-gray-800">
                <div className="text-primary">
                  <Phone className="h-6 w-6" />
                </div>
                <span>+370 624 00759</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/airidas-augulis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-secondary/40 rounded-lg hover:bg-primary/20 transition-all dark:text-white light:text-gray-800"
              >
                <div className="text-primary">
                  <Linkedin className="h-6 w-6" />
                </div>
                <span>Connect on LinkedIn</span>
              </a>
              
              <a 
                href="https://github.com/airidziox" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-secondary/40 rounded-lg hover:bg-primary/20 transition-all dark:text-white light:text-gray-800"
              >
                <div className="text-primary">
                  <Github className="h-6 w-6" />
                </div>
                <span>Explore on GitHub</span>
              </a>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="bg-secondary/30 p-8 rounded-lg border border-gray-800/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm dark:text-gray-300 light:text-gray-700 mb-1 block">
                  Full Name
                </label>
                <Input 
                  id="name"
                  type="text" 
                  placeholder="e.g., John Doe"
                  className="bg-secondary/40 dark:border-gray-700 light:border-gray-300 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="text-sm dark:text-gray-300 light:text-gray-700 mb-1 block">
                  Email Address
                </label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="e.g., your.email@example.com"
                  className="bg-secondary/40 dark:border-gray-700 light:border-gray-300 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="text-sm dark:text-gray-300 light:text-gray-700 mb-1 block">
                  Subject
                </label>
                <Input 
                  id="subject"
                  type="text" 
                  placeholder="What is this regarding?"
                  className="bg-secondary/40 dark:border-gray-700 light:border-gray-300 focus:border-primary"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="text-sm dark:text-gray-300 light:text-gray-700 mb-1 block">
                  Your Message
                </label>
                <Textarea 
                  id="message"
                  placeholder="Describe your project or inquiry..."
                  rows={6}
                  className="bg-secondary/40 dark:border-gray-700 light:border-gray-300 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-white py-6 flex items-center justify-center gap-2 rounded-md"
              >
                Send Message
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 2L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
