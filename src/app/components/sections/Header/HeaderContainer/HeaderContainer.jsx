const HeaderContainer = ({ children }) => (
  <div className="relative">
    <header
      className={`w-full lg:px-10 xl:px-10 ml-auto mr-auto fixed z-50 border-solid transition-all content-center h-28 ${textColor} ${
        activeScroll ? `bg-[#030315] py-8` : `bg-transparent py-8`
      }`}
    >
      <div className="flex items-center justify-center h-full">
        <Nav />
      </div>
    </header>
    {children}
  </div>
);

export default HeaderContainer;
