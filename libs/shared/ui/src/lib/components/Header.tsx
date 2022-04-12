export const Header = () => {
  return (
    <header className="col-span-full mb-6 sm:mb-0">
      <h1 className="font-title text-5xl text-center font-extrabold mb-6 col-[1/-1]">
        Howard&apos;s Blog
      </h1>
      <div className="border-y-2 border-defaultColor h-fit py-1">
        <div className="border-defaultColor border-y flex items-center flex-1 lg:text-lg">
          <div>Issue #1 </div>
          <div>Tuesday, 26 May, 2020</div>
          <div>Two memes Edition</div>
        </div>
      </div>
    </header>
  );
};
