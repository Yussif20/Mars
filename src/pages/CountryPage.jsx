import { CountryDetails, FAQ, Testimonials } from '../sections';
import { CountryFAQ } from '../sections/CountryFAQ';
import AnimatedSection from '../utils/AnimatedSection';

export const CountryPage = () => {
  return (
    <>
      <AnimatedSection>
        <CountryDetails />
        <CountryFAQ />
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
