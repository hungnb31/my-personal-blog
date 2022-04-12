export const Header = () => {
  return (
    <header className="col-span-full mb-6 sm:mb-0">
      <h1 className="font-title text-5xl text-center font-extrabold mb-6 col-[1/-1] sm:text-6xl lg:text-7xl">
        Howard&apos;s Blog
      </h1>
      <div className="border-y-2 border-defaultColor h-fit py-1">
        <div className="border-defaultColor border-y flex items-center uppercase">
          <div className="text-base leading-5 p-2 text-center flex-1 lg:text-lg">
            Issue #1{' '}
          </div>
          <div className="text-base leading-5 p-2 text-center flex-1 lg:text-lg">
            Tuesday, 26 May, 2020
          </div>
          <div className="text-base leading-5 p-2 text-center flex-1 lg:text-lg">
            Two memes Edition
          </div>
        </div>
      </div>
    </header>
  );
};
