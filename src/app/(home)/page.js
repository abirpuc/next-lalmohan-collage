import Gallery from "./componets/Gallery/Gallery";
import NoticeBoard from "./componets/Noticeboard/NoticeBoard";
import Director from "./componets/director/Director";
import Slider from "./componets/slider/Slider";
import Special from "./componets/special/Special";
import Visitor from "./componets/visitorCounter/Visitor";

export default async function Home() {
  
  return (
    <main className="" >
      <Slider/>
      <Special/>
      <Director/>
      <NoticeBoard/>
      <Gallery/>
      <Visitor/>
    </main>
  )
}
