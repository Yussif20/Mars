import { countryData } from '../data/countryData';
import { FAQ, Hero, DataPlans, Testimonials, Features } from '../sections';
import AnimatedSection from '../utils/AnimatedSection';

export const Home = () => {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <DataPlans isLong={false} hasSearch={false} data={countryData} />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
    </>
  );
};
