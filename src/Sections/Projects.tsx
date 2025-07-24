"use client";

import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import github from "../../public/github.svg";
import external from "../../public/external.svg";

//FIXME: looks like shit on mobile
export default function Projects() {
  const PROJECTS = [
    {
      title: "TEST",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tech: ["React", "AWS", "Tailwind"],
      links: [
        { href: "https://google.com", icon: github, alt: "github" },
        { href: "https://google.com", icon: external, alt: "external" },
      ],
      image: {
        src: "https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif",
        alt: "halcyon",
        width: 700,
        height: 438,
      },
    },
    {
      title: "TEST",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tech: ["React", "AWS", "Tailwind"],
      links: [
        { href: "https://google.com", icon: github, alt: "github" },
        { href: "https://google.com", icon: external, alt: "external" },
      ],
      image: {
        src: "https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif",
        alt: "halcyon",
      },
    },
    {
      title: "TEST",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
      tech: ["React", "AWS", "Tailwind"],
      links: [
        { href: "https://google.com", icon: github, alt: "github" },
        { href: "https://google.com", icon: external, alt: "external" },
      ],
      image: {
        src: "https://v4.brittanychiang.com/static/3b4d6e8f44baf7e6d7a0ed4b3e4d8d39/f47db/halcyon.avif",
        alt: "halcyon",
      },
    },
  ];

  function isOdd(number: number) {
    return number % 2 !== 0;
  }

  return (
    <section id="work" className="mx-auto">
      <SectionHeading>Some Things I've Built</SectionHeading>
      <div>
        <ul>
          {PROJECTS.map((project, idx) => (
            <li
              className="project-grid mb-[30px] md:mb-[70px] lg:mb-[100px]"
              key={idx}
            >
              <div
                className={`project-content col-span-full md:col-span-6 row-start-1 ${
                  isOdd(idx + 1)
                    ? "md:col-start-7 md:items-end"
                    : "md:col-start-1 md:items-start"
                }`}
              >
                <h3 className="featured-project">Featured Project</h3>
                <h4>
                  <a
                    href="https://google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-heading"
                  >
                    {project.title}
                  </a>
                </h4>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
                <ul className="tech-list">
                  {project.tech.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`project-links ${
                    isOdd(idx + 1)
                      ? "translate-x-[10px]"
                      : "-translate-x-[10px]"
                  }`}
                >
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src={link.icon}
                        alt={link.alt}
                        width={22}
                        height={22}
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div
                className={`project-image col-span-full md:col-span-7 row-start-1 ${
                  isOdd(idx + 1) ? "md:col-start-1" : "md:col-start-6"
                }`}
              >
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="project-image-wrapper">
                    <div className="project-image-wrapper-inner">
                      <Image
                        src={project.image.src}
                        alt={project.image.alt}
                        width={project.image?.width ?? 700}
                        height={project.image?.height ?? 438}
                      />
                    </div>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
