import supportImage from '../assets/support.svg';
import privacyImage from '../assets/privacy.svg';
import paymentImage from '../assets/payment.avif';
import coverageImage from '../assets/global-coverage.avif';
import install1Image from '../assets/sim-install.svg';
import install2Image from '../assets/sim-install.avif';

import { Button } from '../components';

export const Features = () => {
  return (
    <section className="py-12  max-w-5xl mx-auto">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center flex flex-col gap-x-8 max-w-2xl mx-auto">
          <p className="text-[#cb460e] font-bold uppercase tracking-wider">
            Features
          </p>
          <h2 className="text-[32px] md:text-[40px] leading-10 font-semibold tracking-tight text-gray-800">
            Why Mars eSIM?
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 place-items-center">
          {/* Column 1 (2 items) */}
          <div className="space-y-4">
            {/* Feature 1 */}
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={supportImage}
                alt="Feature 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>24/7 Support</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  Our support team is available every day across all time zones
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={install1Image}
                alt="Feature 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>You can install your eSIM</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  You have 90 days to start using your plan.But once you
                  activate it on your phone and register on a network, your
                  plan’s allocated duration begins.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2 (3 items) */}
          <div className="space-y-4">
            {/* Feature 3 */}
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={privacyImage}
                alt="Feature 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>Privacy and Transparent</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  Enhance privacy in all your daily communications with our
                  innovative solutions, ensuring your peace of mind and
                  confidentiality.
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <div className="flex flex-col gap-2">
                <h3>Get the App</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  Enhance privacy in all your daily communications with our
                  innovative solutions
                </p>
                <div className="flex mt-4 items-center justify-between flex-col md:flex-row gap-4">
                  <Button className="group" animated size="sm">
                    <p className="flex items-center justify-center gap-2">
                      <ion-icon
                        className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                        name="logo-apple"
                      ></ion-icon>
                      <span>App Store</span>
                    </p>
                  </Button>{' '}
                  <Button className="group" animated size="sm">
                    <p className="flex items-center justify-center gap-2">
                      <ion-icon
                        className="text-white text-2xl group-hover:text-black transition-colors duration-200"
                        name="logo-google-playstore"
                      ></ion-icon>
                      <span>Play Store</span>
                    </p>
                  </Button>
                </div>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={paymentImage}
                alt="payment"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>Payment Methods</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  The Mars eSim gives you a variety of payment methods
                </p>
              </div>
            </div>
          </div>
          {/* Column 3 (2 items) */}
          <div className="space-y-4">
            {/* Feature 6 */}
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={coverageImage}
                alt="Coverage"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>Global Coverage</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  Stay linked across 200+ countries and regions worldwide,
                  ensuring connectivity wherever your travels take you
                </p>
              </div>
            </div>
            {/* Feature 7 */}
            <div className="flex flex-col gap-3 items-center justify-center bg-white p-4 rounded-lg border border-gray-200">
              <img
                src={install2Image}
                alt="sim Install"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="flex flex-col gap-2">
                <h3>You can install your eSIM</h3>
                <p className="text-[#4f4f4f] text-sm leading-5">
                  You have 90 days to start using your plan.But once you
                  activate it on your phone and register on a network, your
                  plan’s allocated duration begins.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
