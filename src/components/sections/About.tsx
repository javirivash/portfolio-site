import Image from "next/image";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-sage">
            Introduction
          </p>
          <h2 className="font-serif text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
            About
          </h2>
        </AnimatedSection>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Text column */}
          <AnimatedSection delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-charcoal/80">
              <p>
                I&apos;m a frontend engineer with 4+ years of experience
                building scalable, accessible user interfaces. I specialize in
                React, TypeScript, and modern frontend tooling, with hands-on
                experience in design systems, structured release cycles, and
                testing practices.
              </p>
              <p>
                At DataRobot, I progressed from Associate to Frontend Engineer
                II, owning feature projects end-to-end — from planning and
                technical specs through testing and stakeholder sign-off. I
                thrive in fast-paced environments where quality and
                collaboration go hand in hand.
              </p>

              {/* Pull quote */}
              <blockquote className="border-l-2 border-deep-blue pl-6 font-serif text-xl italic text-charcoal">
                <p>
                  &ldquo;I believe great interfaces are invisible — they empower
                  users without getting in their way.&rdquo;
                </p>
                <footer className="mt-2 font-sans text-sm not-italic text-charcoal/50">
                  — Javier Rivas
                </footer>
              </blockquote>

              <p>
                My journey started in Industrial Engineering at ITESM, which
                gave me a systems-thinking mindset I bring to every line of
                code. When I&apos;m not coding, I&apos;m exploring new tools and
                approaches to make the web more accessible and performant.
              </p>
            </div>

            {/* Core expertise tags */}
            <div className="mt-8">
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-sage">
                Core Expertise
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "React Architecture",
                  "TypeScript",
                  "Design Systems",
                  "Testing",
                  "Accessibility",
                  "Performance",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-warm-gray px-3 py-1 text-xs font-medium text-charcoal/70"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Photo column */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
                <Image
                  src="/portrait.jpg"
                  alt="Javier Rivas — Frontend Engineer"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              {/* Decorative offset border */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-sm border-2 border-sage/30" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
