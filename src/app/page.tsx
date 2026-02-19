import {
  Navbar,
  Hero,
  About,
  SkillsExperience,
  Projects,
  Contact,
  Resume,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <SkillsExperience />
        <Projects />
        <Contact />
        <Resume />
      </main>
      <Footer />
    </>
  );
}
