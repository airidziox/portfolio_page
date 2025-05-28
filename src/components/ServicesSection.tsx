
import { ArrowRight, Code, Database, Monitor } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Front-End Development",
      description: "Modern, responsive user interfaces using React, TypeScript and tailored styling solutions.",
      icon: <Monitor className="h-12 w-12 text-primary" />,
    },
    {
      title: "Back-End Development",
      description: "Robust server-side applications with Node.js, Express.js, and secure database integrations.",
      icon: <Code className="h-12 w-12 text-primary" />,
    },
    {
      title: "Database Design",
      description: "Efficient data structures and relationships using MongoDB and other solutions.",
      icon: <Database className="h-12 w-12 text-primary" />,
    },
  ];

  return (
    <section id="services" className="container-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">My Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I offer comprehensive development solutions tailored to your specific needs, 
            from responsive front-end designs to powerful back-end systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="service-card border-gray-800/50 bg-secondary/30 overflow-hidden">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
              <CardFooter>
                <a href="#contact" className="text-primary font-medium text-sm inline-flex items-center group">
                  Learn More 
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
