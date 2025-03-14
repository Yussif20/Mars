import {
  FAQ,
  Hero,
  DataPlans,
  Testimonials,
  Features,
  HowItWorks,
} from '../sections';
import AnimatedSection from '../utils/AnimatedSection';

export const Home = () => {
  return (
    <>
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <DataPlans isLong={false} hasSearch={false} />
      </AnimatedSection>
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection>
        <HowItWorks />
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
