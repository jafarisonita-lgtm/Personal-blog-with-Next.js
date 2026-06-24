
import HeroSection from "./components/HeroSection";
import LatestPost from "./components/LatestPost";


export default function Home() {
  return (
    <div className="flex flex-col">
     <HeroSection/>
     <LatestPost />
   
    </div>
  );
}
