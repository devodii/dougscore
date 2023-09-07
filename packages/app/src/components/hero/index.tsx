import Searcher from "./searcher";

interface Props {
  allModel: {
    model: string;
  }[];

  allMake: {
    make: string;
  }[];

  allYear: {
    year: number;
  }[];
}

const Hero = ({ allModel, allMake, allYear }: Props) => {
  return (
    <section className="container flex flex-col gap-3 w-full  justify-center">
      <p className="text-xl font-medium uppercase text-center">Find ratings</p>
      <Searcher allModel={allModel} allMake={allMake} allYear={allYear} />
    </section>
  );
};

export default Hero;
