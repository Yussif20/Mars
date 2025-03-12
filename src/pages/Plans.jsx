import { FAQ, Testimonials } from '../sections';
import { DataPlans } from '../sections/DataPlans';
import AnimatedSection from '../utils/AnimatedSection';

export const Plans = () => {
  return (
    <>
      <AnimatedSection>
        <DataPlans />
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
