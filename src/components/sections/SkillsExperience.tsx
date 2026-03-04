import AnimatedSection from "@/components/ui/AnimatedSection";
import { skills } from "@/data/skills";
import { experience } from "@/data/experience";

export default function SkillsExperience() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            Skills &amp;
            <br />
            Experience
          </h2>
        </AnimatedSection>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2fr]">
          {/* Skills column */}
          <AnimatedSection delay={0.1}>
            <div>
              <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-sage">
                Expertise
              </p>
              <div className="space-y-8">
                {skills.map((category) => (
                  <div key={category.category}>
                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-charcoal/50">
                      {category.category}
                    </h3>
                    <ul className="space-y-1.5">
                      {category.items.map((item) => (
                        <li key={item} className="text-sm text-charcoal/80">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Experience timeline */}
          <AnimatedSection delay={0.2}>
            <div>
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <div
                    key={`${job.company}-${job.role}`}
                    className="relative border-l-2 border-deep-blue/20 pl-8"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-deep-blue" />

                    <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-lg font-semibold text-charcoal">
                        {job.company}
                      </h3>
                      <span className="text-sm text-sage">{job.period}</span>
                    </div>
                    <p className="mt-0.5 text-sm italic text-charcoal/60">
                      {job.role}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-charcoal/70">
                      {job.description}
                    </p>
                    {index < experience.length - 1 && <div className="mt-12" />}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
