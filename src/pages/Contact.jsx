import { ContactUs, FAQ } from '../sections';
import AnimatedSection from '../utils/AnimatedSection';

export const Contact = () => {
  return (
    <>
      <AnimatedSection>
        <ContactUs />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
    </>
  );
};
