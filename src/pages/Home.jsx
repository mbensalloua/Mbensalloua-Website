import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import ContactForm from "../components/ContactForm";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <Skills />
      <Experience />
      <Certifications />
      <ContactForm />
    </div>
  );
}
