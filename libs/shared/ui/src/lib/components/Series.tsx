import showcaseGridImg from '../images/showcase-grid.png';
import { Image } from './Image';

export const Series = () => {
  return (
    <div className="col-span-full border-t pt-5 mt-5 flex flex-col sm:flex-row sm:flex-wrap sm:gap-4">
      <div className="sm:flex-[48%] lg:mt-0 lg:flex-[23%] grayscale-[95%]">
        <Image alt="something" src={showcaseGridImg} />
      </div>
      <article className="mt-4 sm:mt-0 sm:flex-[48%] lg:mt-0 lg:flex-[23%]">
        <h4 className="font-head font-bold text-2xl">This is the React post</h4>
        <p className="md:columns-2 lg:columns-2">
          Get your fill of more CSS Grid items in this collection. There are a
          total of 32 pens to date... well, 33, if you count this one too. What
          can you expect in this collection? The hidden gems
        </p>
      </article>
      <article className="mt-4 sm:mt-0 sm:flex-[48%] lg:mt-0 lg:flex-[23%]">
        <h4 className="font-head font-bold text-2xl">This is the React post</h4>
        <p className="md:columns-2 lg:columns-2">
          Get your fill of more CSS Grid items in this collection. There are a
          total of 32 pens to date... well, 33, if you count this one too. What
          can you expect in this collection? The hidden gems
        </p>
      </article>
      <article className="mt-4 sm:mt-0 sm:flex-[48%] lg:mt-0 lg:flex-[23%]">
        <h4 className="font-head font-bold text-2xl">This is the React post</h4>
        <p className="md:columns-2 lg:columns-2">
          Get your fill of more CSS Grid items in this collection. There are a
          total of 32 pens to date... well, 33, if you count this one too. What
          can you expect in this collection? The hidden gems
        </p>
      </article>
    </div>
  );
};
