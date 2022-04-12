/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

import articleImage from '../images/showcase-terrarium.jpeg';
import { Image } from './Image';

export const HeadArticle: React.FC = () => {
  return (
    <article className="wrapper cursor-pointer col-span-full md:col-[1/_span_3] lg:col-[1/_span_4">
      <div className="flex text-xl font-medium">
        <Link passHref href="/">
          <a className="hover:bg-defaultColor hover:text-textWhite px-1">
            #react
          </a>
        </Link>
        <Link passHref href="/">
          <a>#next</a>
        </Link>
        <Link passHref href="/">
          <a>#graphql</a>
        </Link>
      </div>
      <h2 className="wrapper-hover:underline font-head leading-10 font-extrabold italic text-3xl mb-2 text-left lg:text-4xl lg:mb-5 lg:leading-[3rem]">
        Woman spends too much time on Codepens despite advice; no plans to stop
      </h2>
      <div className="grid-cols-2 gap-5 text-justify lg:grid">
        <div>
          <p className="mb-4 sm:mb-0 sm:columns-2 lg:columns-1 xl:columns-2">
            Sometimes, Internet users land themselves in an uncommon situation
            where an app or website can be used for both work and personal
            situations. Well, a young front-end designer was spending up to 13
            hours on the site, Codepen for work and her hobby, which
            unfortunately, is also coding. <br />
            The designer, whose work includes a <em>To-Do Terrarium</em>,
            clarified, &quot;Well, I didn&apos;t <em> have </em>to use it for
            work but it was already part of my workflow. It just made sense as
            it was more efficient.&quot; The biggest issue, she said, is that
            she would hop on Codepen for work, but would get distracted by pens
            made by others in the community for unexpectedly long periods of
            time, which then causes her to spend even more time on the site.{' '}
            <br />
            &quot;I mean, that&apos;s terrible right?&quot; she asked. Codepen,
            which brands itself as the best place to build, test, and discover
            front-end code, has declined to comment at this time.
          </p>
        </div>
        <figure className="wrapper-hover:filter-none">
          <Image src={articleImage} layout="responsive" alt="article-name" />
        </figure>
      </div>
    </article>
  );
};
