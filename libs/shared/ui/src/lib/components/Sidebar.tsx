/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';

const categories = [
  '#React',
  '#Animation',
  '#CSS',
  '#Next',
  '#Gatsby',
  '#Performance',
];

export const Sidebar = () => {
  return (
    <aside className="col-span-full mt-5 sm:mt-0 md:gap-5 md:border-l md:pl-3 md:mt-0 md:col-[4/_span_1] md:row-start-2 md:row-[2/_span_3] lg:pl-5 lg:col-[5/_span_1]">
      <section className="mb-3 lg:mb-5">
        <div className="italic font-bold text-xl font-head">Top categories</div>
        <div className="flex mt-2 flex-wrap content-start font-medium md:justify-between">
          {categories.map((item) => (
            <div
              key={item}
              className="hover:bg-defaultColor hover:text-textWhite transition-all cursor-pointer border border-defaultColor px-2 h-fit mb-2 mr-2"
            >
              <div>{item} </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="italic font-bold text-xl font-head">
          Most viewed posts
        </div>
        <div className="mt-1 sm:grid sm:grid-cols-2 gap-5 md:block">
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <h5 className="text-xl text-center font-semibold py-1 px-3 leading-6 border mt-3">
                Frustrated designer runs amok with Captcha ideas
              </h5>
              <p className="md:leading-6 lg:leading-7">
                From Tic Tac Toe to solving meme-based questions, this is a
                different take on how web captchas should be. &quot;I have not
                successfully picked out all photos of a truck on the first try.
                Something&apos;s gotta change,&quot; says the designer, who has
                requested to remain anonymous.
              </p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <h5 className="text-xl text-center font-semibold py-1 px-3 leading-6 border mt-3">
                Slack UI gets reverse engineered
              </h5>
              <p>
                Another valiant effort to reverse engineer a web app. However,
                the UI is repurposed to showcase Codepens instead of mock
                conversations. This is a codepen showcase inception situation.
              </p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <h5 className="text-xl text-center font-semibold py-1 px-3 leading-6 border mt-3">
                Slack UI gets reverse engineered
              </h5>
              <p>
                Another valiant effort to reverse engineer a web app. However,
                the UI is repurposed to showcase Codepens instead of mock
                conversations. This is a codepen showcase inception situation.
              </p>
            </a>
          </Link>
          <Link href="/" passHref>
            <a className="cursor-pointer">
              <h5 className="text-xl text-center font-semibold py-1 px-3 leading-6 border mt-3">
                Slack UI gets reverse engineered
              </h5>
              <p>
                Another valiant effort to reverse engineer a web app. However,
                the UI is repurposed to showcase Codepens instead of mock
                conversations. This is a codepen showcase inception situation.
              </p>
            </a>
          </Link>
        </div>
      </section>
    </aside>
  );
};
