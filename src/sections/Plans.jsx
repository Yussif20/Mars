import { Button, CountrySelector } from '../components';

export const Plans = () => {
  return (
    <section>
      <div className="text-center flex flex-col gap-4">
        <p className="text-[#cb460e]">Data Plans</p>
        <h2 className="text-[32px] leading-10">Popular eSIM Choices</h2>
        <p className="leading-6 text-[#4f4f4f]">
          Choose the best ones and get connected throughout your trip
        </p>
      </div>
      <CountrySelector />
      <div className="flex items-center justify-center">
        <Button animated size="lg">
          <p className="flex items-center justify-center gap-2">
            View all destinations
            <span className="text-black inline-flex items-center justify-center w-6 h-6 bg-white border border-black rounded-full">
              <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
          </p>
        </Button>
      </div>
    </section>
  );
};
