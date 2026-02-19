import AnimatedSection from "@/components/ui/AnimatedSection";

export default function Resume() {
  return (
    <section id="resume" className="py-24 px-6 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-charcoal md:text-5xl">
              Resumé
            </h2>
            <a
              href="/resume.pdf"
              download="Javier Rivas - Frontend Engineer.pdf"
              className="inline-flex items-center gap-2 rounded-full bg-deep-blue px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-deep-blue/90"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download PDF
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="mt-12">
            {/* Inline PDF viewer */}
            <div className="overflow-hidden rounded-sm border border-warm-gray bg-white shadow-sm">
              <iframe
                src="/resume.pdf"
                title="Javier Rivas — Resume"
                className="h-[800px] w-full md:h-[1000px]"
              />
            </div>
            <p className="mt-3 text-center text-xs text-sage">
              If the PDF doesn&apos;t display,{" "}
              <a
                href="/resume.pdf"
                download
                className="underline underline-offset-2 hover:text-deep-blue"
              >
                download it directly
              </a>
              .
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
