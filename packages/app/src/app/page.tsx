import Hero from "@/components/hero";
import { getAllMake, getAllModel, getAllYear } from "@/lib";

export default async function Home() {
  const getModel = await getAllModel();
  const getMake = await getAllMake();
  const getYear = await getAllYear();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-8">
      <Hero allModel={getModel} allMake={getMake} allYear={getYear} />
    </main>
  );
}
