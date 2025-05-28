
import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Valorant-Account.com",
      description: "E-commerce gaming site built with WordPress, complete with custom design and functionality.",
      image: "/public/valorant-account.png",
      tags: ["WordPress", "E-commerce", "UI Design"],
    },
    {
      title: "Figma UI Prototyping",
      description: "Interactive prototypes and comprehensive design systems for web applications.",
      image: "/public/figmaui.png",
      tags: ["Figma", "UI/UX", "Prototyping"],
    },
    {
      title: "Logo & Asset Design",
      description: "Brand identity design including logos, promotional assets, and visual guidelines.",
      image: "/public/banners.png",
      tags: ["Branding", "Graphics", "Design"],
    },
  ];

  return (
    <section id="portfolio" className="container-section bg-secondary/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div>
            <h2 className="heading-lg mb-4">Notable Projects</h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my recent work, showcasing my skills in development, design, and implementation.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <div className="flex flex-wrap gap-3 px-4 py-3 bg-secondary rounded-xl">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">10+</p>
                <p className="text-xs text-gray-400">Projects Completed</p>
              </div>
              <div className="w-px bg-gray-700 mx-2"></div>
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">20+</p>
                <p className="text-xs text-gray-400">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-gray-800/50 bg-secondary/30 overflow-hidden card-hover">
              <div className="h-48 w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <a href="#" className="text-primary font-medium text-sm inline-flex items-center group">
                  View Project 
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

export default PortfolioSection;
