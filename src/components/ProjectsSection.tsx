
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AsenaGame",
    description: "A full-featured game download website built with Nuxt and Tailwind CSS. Optimized for performance and SEO, with a responsive design and clean user experience.",
    image: "/images/project1.png",
    tags: ["Nuxt.js", "TailwindCSS"],
    demoUrl: "https://asenagame.com",
    // githubUrl: "#",
  },
  {
    id: 2,
    title: "Rooritm",
    description:
      "A modern music and video streaming platform with Progressive Web App (PWA) capabilities and seamless playback powered by HLS.js.",
    image: "/images/project2.png",
    tags: ["Vue.js", "TailwindCSS"],
    demoUrl: "https://rooritm.com/",
    // githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/images/project3.png",
    tags: ["Nuxt.js", "TailwindCSS"],
    demoUrl: "https://titanartshop.com/",
    // githubUrl: "#",
  },
  {
    id: 4,
    title: "Company Website",
    description:
      "A modern corporate website built with Nuxt and Tailwind CSS. Designed with a clean UI and responsive layout, ensuring a smooth user experience across all devices..",
    image: "/images/project4.png",
    tags: ["Nuxt.js", "TailwindCSS"],
    demoUrl: "https://www.asenadev.com",
    // githubUrl: "#",
  },
  {
    id: 5,
    title: "Payon",
    description:
      "An e-commerce website for industrial wooden products, featuring product showcase and responsive design. Built with modern web technologies for a smooth shopping experience.",
    image: "/images/project5.png",
    tags: ["Nuxt.js", "TailwindCSS"],
    demoUrl: "https://rc-group.ir",
    // githubUrl: "#",
  },
  {
    id: 6,
    title: "724 Insurance Module",
    description:
      "Implemented the insurance feature in the 724 web application using modern front-end technologies. Focused on responsive UI, performance optimization, and seamless integration with backend services.",
    image: "/images/project7.png",
    tags: ["Nuxt.js", "TailwindCSS", "typescript"],
    demoUrl: "https://724.agrofeel.ir/?theme=Light&phoneNumber=09172632061&channel=PWA",
    // githubUrl: "#",
  },
  {
    id: 7,
    title: "tansaz",
    description:
      "A modern website for a beauty clinic, showcasing services and treatments with a clean and responsive design.",
    image: "/images/project6.png",
    tags: ["Nuxt.js", "TailwindCSS"],
    demoUrl: "https://site-tansaz.liara.run",
    // githubUrl: "#",
  },
  {
    id: 8,
    title: "rama",
    description:
      "A responsive website for online courses, featuring course listings and an easy-to-navigate design for learners.",
    image: "/images/project8.png",
    tags: ["Nuxt.js", "TailwindCSS"],
    demoUrl: "https://rama.ac",
    // githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span key={key} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    {project.githubUrl && <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NimaRahimiJahandide"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
