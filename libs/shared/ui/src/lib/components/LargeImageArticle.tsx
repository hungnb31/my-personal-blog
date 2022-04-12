import menuImg from '../images/showcase-menu.jpeg';
import { Image } from './Image';

export const LargeImageArticle: React.FC = () => {
  return (
    <article className="wrapper">
      <div>
        <h4 className="text-2xl font-head font-bold mt-3 mb-2 lg:mt-0">
          Let&apos;s adopt, don&apos;t shop.
        </h4>
        <p className="md:columns-2 lg:columns-1 lg:col-[_1/_span_1]">
          Explore a style guide and various page layouts for a pet adoption site
          in the <em>Style Guide</em> collection. Inspired by the{' '}
          <em>Atomic Design</em> principle, this 8-pen collection includes a 404
          page concept, an admin dashboard and what a Twitter user calls a
          &apos;media card zen garden&apos;. Each pen comes with five (yes,
          five) color themes, including the precious dark mode.
        </p>
      </div>
      <figure className="wrapper-hover:filter-none grayscale-[95%] transition-all lg:col-[_2/_span_2] image-wrapper">
        <Image src={menuImg} objectFit="cover" alt="menu image" />
      </figure>
    </article>
  );
};
