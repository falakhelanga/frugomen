import CreateItenarySection from "@/components/itinerary/CreateItinerarySection";
import WorldMap from "@/components/world-map/WorldMap";
import getCountries from "@/utils/getCountries";

export default async function Home() {
  const countries = await getCountries();
  return (
    <main className="flex h-full overflow-auto">
      <section className="md:flex-[0.3]">
        <CreateItenarySection countries={countries} />
      </section>
      <section className="md:flex-[0.7] md:flex hidden">
        <WorldMap />
      </section>
    </main>
  );
}
