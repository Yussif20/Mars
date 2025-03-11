import { Button, PhoneSlideshow } from '../components';

export const Hero = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col text-center items-center justify-center gap-6">
        <h1 className="text-3xl md:text-5xl font-semibold leading-10 md:leading-14">
          Stay connected affordably
          <br /> wherever you roam.
        </h1>
        <p className="text-sm md:text-base text-[#4f4f4f] leading-6">
          Experience reliable connectivity at economical rates, wherever you
          travel.
        </p>
        <div className="flex items-center justify-between flex-col md:flex-row gap-4">
          <Button animated={false} size="sm">
            <p className="flex items-center justify-center gap-2">
              <ion-icon
                className="text-white text-2xl"
                name="logo-apple"
              ></ion-icon>
              <span>App Store</span>
            </p>
          </Button>{' '}
          <Button animated={false} size="sm">
            <p className="flex items-center justify-center gap-2">
              <ion-icon
                className="text-white text-2xl"
                name="logo-google-playstore"
              ></ion-icon>
              <span>Play Store</span>
            </p>
          </Button>
        </div>
      </div>
      <PhoneSlideshow />
    </section>
  );
};
