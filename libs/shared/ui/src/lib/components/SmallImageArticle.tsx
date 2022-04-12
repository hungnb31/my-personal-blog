import img from '../images/showcase-toggle.gif';
import { Image } from './Image';

export const SmallImageArticle = () => {
  return (
    <article className="wrapper cursor-pointer col-span-full border-t border-solid border-defaultColor mt-5 sm:flex sm:flex-row-reverse sm:pt-5 md:col-[_4/_span_1] md:mt-0 md:pt-5 md:ml-3 md:block lg:pt-0 lg:border-0 lg:col-[4/_span_1]">
      <div className="wrapper-hover:filter-none wrapper-hover:transition-all grayscale-[95%] mt-4 sm:mt-0 md:col-[_2/_span_2]">
        <Image placeholder="empty" src={img} alt="toggle image" />
      </div>
      <div className="sm:max-w-[33%] sm:mr-5 md:col-[_1/_span_1] md:row-start-1 md:max-w-full md:mr-0">
        <h4 className="text-2xl font-bold font-head mb-2">Toggles</h4>
        <p>
          Eight playful toggles to toggle on and off for your amusement. Is it
          possible to use these on your site? No. But there&apos;s a really cute
          dog one you <em>have </em>to see...
        </p>
      </div>
    </article>
  );
};
