function Breakpoint () {
    return (
        <div>
          {/*breakpoint info*/}
          <p className="absolute top-1 left-1 md:hidden">sm</p>
          <p className="absolute top-1 left-1 hidden md:block lg:hidden">md</p>
          <p className="absolute top-1 left-1 hidden lg:block xl:hidden">lg</p>
          <p className="absolute top-1 left-1 hidden xl:block 2xl:hidden">xl</p>
          <p className="absolute top-1 left-1 hidden 2xl:block">2xl</p>
        </div>
    );
}

export default Breakpoint;