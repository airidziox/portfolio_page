
import { BookOpen, BriefcaseIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./ui/hover-card";

const ResumeSection = () => {
  const experiences = [
    {
      title: "Multimedia Technology Specialist",
      company: "MB \"Jornis\"",
      period: "2022 – 2023",
      description: "Developed WordPress sites, created UI designs with Figma, and designed various branding assets including logos, banners, and icons.",
      current: false,
    },
  ];

  const education = [
    {
      title: "Professional Bachelor in Multimedia Technology",
      institution: "Kauno Kolegija",
      period: "2020 – 2023",
      description: "Focused on web development, UI/UX design, and multimedia content creation.",
      current: false,
    },
    {
      title: "Junior Front-End TypeScript Developer",
      institution: "CodeAcademy",
      period: "2022",
      description: "Intensive training in modern front-end development with TypeScript and React.",
      current: false,
    },
  ];

  const skills = [
    "React", "TypeScript", "Node.js", "MongoDB", 
    "Express", "Git", "Figma", "WordPress",
    "UI/UX Design", "Responsive Design"
  ];

  return (
    <section id="resume" className="container-section py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">My Resume</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My career path and educational background that have shaped my skills and expertise in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/20">
                <BriefcaseIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-md">Work Experience</h3>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800/50 z-0"></div>
              {experiences.map((exp, index) => (
                <div key={index} className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-0 shadow-md shadow-primary/20">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="ml-12 text-sm text-gray-500">
                      {exp.period}
                    </div>
                  </div>
                  <Card className="ml-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 bg-secondary/30 border-gray-800/50">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-xl mb-2">{exp.title}</h4>
                      <p className="text-primary mb-3">{exp.company}</p>
                      <p className="text-gray-400 text-sm">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-lg bg-primary/20">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <h3 className="heading-md">Education</h3>
            </div>

            <div className="space-y-12 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-800/50 z-0"></div>
              {education.map((edu, index) => (
                <div key={index} className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="absolute left-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border-0 shadow-md shadow-primary/20">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                    <div className="ml-12 text-sm text-gray-500">
                      {edu.period}
                    </div>
                  </div>
                  <Card className="ml-12 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 bg-secondary/30 border-gray-800/50">
                    <CardContent className="p-6">
                      <h4 className="font-bold text-xl mb-2">{edu.title}</h4>
                      <p className="text-primary mb-3">{edu.institution}</p>
                      <p className="text-gray-400 text-sm">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            {/* Skills Section */}
            <div className="mt-16 ml-12">
              <h3 className="font-bold text-xl mb-6">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <HoverCard key={index}>
                    <HoverCardTrigger asChild>
                      <span 
                        className="bg-secondary px-4 py-2 rounded-full text-sm transition-all duration-300 hover:bg-primary/20 hover:text-white cursor-pointer"
                      >
                        {skill}
                      </span>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-auto p-2 bg-secondary border-gray-700">
                      {skill}
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
