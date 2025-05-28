
import { ArrowRight, ArrowDown, Download, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in relative z-10">
            {/* Enhanced decorative elements */}
            <div className="absolute -top-10 -left-10 w-24 h-24 text-primary/30 text-5xl font-bold">{"{"}</div>
            <div className="absolute -bottom-10 right-1/4 w-24 h-24 text-primary/30 text-5xl font-bold transform rotate-12">{"}"}</div>
            <div className="absolute -left-6 top-1/3 w-4 h-4 bg-accent/40 rounded-full animate-pulse"></div>
            <div className="absolute left-1/3 -top-4 w-6 h-6 rounded-full border border-primary/30 animate-spin-slow"></div>
            
            {/* Main content */}
            <h1 className="heading-xl">
              <span className="text-primary">Hello,</span> I'm Airidas
            </h1>
            <h2 className="heading-md font-medium">
              Full-Stack Web Developer
              <br />
              Based in Lithuania
            </h2>
            <p className="text-lg text-gray-400 max-w-lg">
              I create modern, responsive websites using React, Node.js, and MongoDB.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button className="btn-primary">
                Hire Me <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="pt-6">
              <p className="text-sm text-gray-500 mb-4">Find me on</p>
              <div className="flex gap-4">
                <a href="https://github.com/airidziox" target="_blank" rel="noopener noreferrer" className="social-button hover:bg-primary/20">
                  <Github className="h-5 w-5 " />
                  <span className="text-sm">GitHub</span>
                </a>
                <a href="https://linkedin.com/in/airidas-augulis" target="_blank" rel="noopener noreferrer" className="social-button hover:bg-primary/20">
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative flex justify-center order-first md:order-last">
            {/* Enhanced background elements */}
            <div className="absolute w-80 h-80 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute w-40 h-40 bg-accent/10 rounded-full blur-lg -right-10 bottom-0"></div>
            
            {/* Enhanced decorative shapes */}
            <div className="absolute -right-10 top-10 w-16 h-16 rounded-full bg-accent/30 animate-pulse"></div>
            <div className="absolute right-1/4 -top-10 w-8 h-8 rounded-full border border-accent animate-bounce-slow"></div>
            <div className="absolute left-0 bottom-10 w-10 h-10 rounded-full bg-primary/20"></div>
            <div className="absolute left-10 top-20 w-5 h-5 bg-primary/30 rotate-45"></div>
            
            {/* Profile image */}
            <div className="relative z-10 overflow-hidden rounded-full border-4 border-primary/20 w-80 h-80">
              <img 
                src="/icon.png" 
                alt="Airidas Augulis" 
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced decorative elements in background */}
      <div className="absolute top-20 left-10 w-12 h-12 rounded-full border border-accent/50 animate-floating"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full border-2 border-primary/20 animate-floating-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 rounded-full bg-accent/30"></div>
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 rounded-full bg-primary/10"></div>
      <div className="absolute bottom-40 left-20 w-16 h-2 bg-primary/20 rounded-full rotate-45"></div>
      <div className="absolute top-40 right-20 w-10 h-10 border border-accent/30 rotate-12"></div>
      {/* Scroll indicator */}
      <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-green-500/20 blur-lg" />
          <div className="relative rounded-full bg-green-500/30 p-2">
            <ArrowDown className="h-6 w-6 text-green-500 animate-bounce-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
