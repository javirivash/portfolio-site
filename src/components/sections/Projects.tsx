"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { projects } from "@/data/projects";

export default function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleProject = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            Selected
            <br />
            Work
          </h2>
          <p className="mt-4 max-w-lg text-base text-charcoal/60">
            A curated collection of projects spanning enterprise platforms,
            personal tools, and creative explorations.
          </p>
        </AnimatedSection>

        <div className="mt-16 space-y-6">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} delay={index * 0.1}>
              <div className="rounded-sm border border-warm-gray bg-cream transition-colors hover:border-sage/50">
                {/* Card header — always visible */}
                <button
                  onClick={() => toggleProject(project.id)}
                  className="flex w-full items-start justify-between gap-4 p-6 text-left lg:p-8"
                  aria-expanded={expandedId === project.id}
                >
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-semibold text-charcoal">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-charcoal/60">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-warm-gray px-3 py-1 font-mono text-xs text-charcoal/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span
                    className={`mt-2 text-sage transition-transform ${expandedId === project.id ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>

                {/* Expanded case study */}
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="border-t border-warm-gray px-6 py-8 lg:px-8">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                          <div>
                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-sage">
                              Context
                            </h4>
                            <p className="text-sm leading-relaxed text-charcoal/70">
                              {project.context}
                            </p>
                          </div>
                          <div>
                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-sage">
                              Approach
                            </h4>
                            <p className="text-sm leading-relaxed text-charcoal/70">
                              {project.approach}
                            </p>
                          </div>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                          <div>
                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-sage">
                              Outcome
                            </h4>
                            <p className="text-sm leading-relaxed text-charcoal/70">
                              {project.outcome}
                            </p>
                          </div>
                          <div>
                            <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-sage">
                              Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.stack.map((tech) => (
                                <span
                                  key={tech}
                                  className="rounded-full bg-deep-blue/10 px-3 py-1 font-mono text-xs text-deep-blue"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>

                            {/* Links */}
                            <div className="mt-6 flex gap-4">
                              {project.liveUrl && (
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium text-deep-blue underline underline-offset-4 hover:text-deep-blue/80"
                                >
                                  View Live Site
                                </a>
                              )}
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm font-medium text-deep-blue underline underline-offset-4 hover:text-deep-blue/80"
                                >
                                  View Code on GitHub
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
