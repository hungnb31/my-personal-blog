import Link from 'next/link';

import floorplanImg from '../images/showcase-floorplan.jpg';
import { Image } from './Image';

export const ImageArticle = () => {
  return (
    <article className="mt-3 col-span-full border-t pt-3 sm:col-[_1/_span_4] sm:mt-0 sm:border-0 sm:pt-0 md:col-[_1/_span_2] lg:col-[_1/_span_2] lg:border-b lg:border-solid lg:border-defaultColor">
      <Link href="/" passHref>
        <div className="wrapper cursor-pointer lg:pb-2">
          <div className="grayscale-[95%] transition-all wrapper-hover:filter-none">
            <Image src={floorplanImg} alt="image" />{' '}
          </div>
          <h4 className="wrapper-hover:bg-defaultColor wrapper-hover:text-textWhite wrapper-hover:transition-all">
            Can you get inspired to make your own floor plans?
          </h4>
          <div>
            <p className="mt-2 sm:columns-2">
              Making a floor Plan with CSS Grid? Talk about using the wrong tool
              for the job. But I guess this is what happens when someone
              isn&apos;t happy with any of the floor plans found on Pinterest;
              she&apos;ll start making her own for the eventual home that she
              will never own. Nevertheless, there&apos;s a home office with a
              large window to look out of pensively during rainy days and a ton
              of &quot;white space&quot; for the cats to run around.
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};
