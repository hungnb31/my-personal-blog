import img from '../images/showcase-hogwarts.svg';
import { Image } from './Image';

export const Social = () => {
  return (
    <section className="wrapper text-center p-1 border-defaultColor border-2 border-solid mt-3 cursor-pointer sm:col-span-full md:col-[3/_span_1] md:mt-0">
      <div className="overflow-hidden border border-solid border-defaultColor sm:flex md:flex-col md:h-full md:justify-between">
        <div className="text-textWhite font-manrope font-black text-2xl py-5 px-2 bg-defaultColor uppercase transition-all sm:w-1/3 md:w-full wrapper-hover:bg-opacity-0 wrapper-hover:text-defaultColor wrapper-hover:transition-all">
          50% Off Hogwarts Express tickets
        </div>
        <div className="hidden sm:block sm:max-h-40 md:rotate-90 md:h-[250%] md:scale-[200%] md:-ml-5 lg:ml-0">
          <Image
            src={img}
            width={100}
            height={100}
            placeholder="empty"
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};
