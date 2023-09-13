import Director from "./componets/director/Director";
import Slider from "./componets/slider/Slider";
import Special from "./componets/special/Special";

export default async function Home() {
  
  return (
    <main className="" >
      <Slider/>
      <Special/>
      <Director/>
    </main>
  )
}
