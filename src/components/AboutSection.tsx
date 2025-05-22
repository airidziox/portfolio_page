
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const strengths = [
    "Quick learner with passion for coding",
    "Team player with excellent communication",
    "Motivated to grow and learn new technologies",
    "Problem solver with attention to detail"
  ];

  return (
    <section id="about" className="container-section bg-secondary/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-primary/20 absolute -top-8 -left-8 w-64 h-64 rounded-full blur-3xl opacity-30"></div>
            <div className="relative overflow-hidden rounded-2xl w-full md:w-4/5 aspect-square bg-primary/10">
              <img 
                src="/placeholder.svg" 
                alt="Airidas Augulis"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-6 left-6 bg-secondary/80 backdrop-blur-sm rounded-xl px-4 py-2">
                <p className="text-lg font-bold mb-0">350+</p>
                <p className="text-xs text-gray-400">Notable Projects</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="heading-lg">
              I'm Airidas, a developer with a background in multimedia
            </h2>
            <p className="text-gray-400 dark:text-gray-400 light:text-gray-700">
              I've always been fascinated by the intersection of design and technology, 
              and my career has been dedicated to finding the perfect balance between the two.
            </p>

            <div className="space-y-4">
              <h3 className="font-bold text-xl">Education</h3>
              <div className="space-y-2">
                <p className="font-medium">Kauno Kolegija</p>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Professional Bachelor in Multimedia Technology (2020–2023)</p>
              </div>
              <div className="space-y-2">
                <p className="font-medium">CodeAcademy</p>
                <p className="text-gray-400 dark:text-gray-400 light:text-gray-600 text-sm">Certificate: Junior Front-End TypeScript Developer</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold text-xl">Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((strength, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="dark:text-gray-300 light:text-gray-800 text-sm">
                      {strength}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <button className="btn-primary">Hire Me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
