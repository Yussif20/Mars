import { FAQ, Testimonials } from '../sections';
import { DataPlans } from '../sections/DataPlans';
import AnimatedSection from '../utils/AnimatedSection';

import { countryData } from '../data/countryData';

export const Plans = () => {
  return (
    <>
      <AnimatedSection>
        <DataPlans isLong={true} hasSearch={true} data={countryData} />
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
