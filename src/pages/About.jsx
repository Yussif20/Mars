import { FAQ, Testimonials, Values } from '../sections';
import AnimatedSection from '../utils/AnimatedSection';

export const About = () => {
  return (
    <>
      <AnimatedSection>
        <Values />
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
