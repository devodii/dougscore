import Searcher from "./searcher";

const Hero = () => {
  return (
    <section className="container flex flex-col gap-3 w-full  justify-center">
      <p className="text-xl font-medium uppercase text-center">Find ratings</p>
      <Searcher />
    </section>
  );
};

export default Hero;
