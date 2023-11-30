import {
  AboutUs,
  Cooker,
  Footer,
  FreshVegetables,
  HappyClient,
  Hero,
  Navbar,
  Special,
  Subscribe,
  WhyChoose,
} from "../../components/pages";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChoose />
      <AboutUs />
      <FreshVegetables />
      <Cooker />
      <Special />
      <HappyClient />
      <Subscribe />
      <Footer />
    </div>
  );
};
