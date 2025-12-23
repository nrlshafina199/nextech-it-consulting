import HomepageContent from "./HomepageContent";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-20">
        <HomepageContent />
      </section>
    </>
  );
}