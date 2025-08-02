import Image from "next/image";
import Herosection from "./component/Herosection";
import Comprehensive from "./component/Comprehensive"
import DominateDubai from "./component/DominateDubai"
import  WhyChose from ".//component/WhyChose"
import OurComprensive from "./component/OurComprensive"

export default function Home() {
  return (
 <>
 <Herosection/>
  <DominateDubai/>
 <Comprehensive/>
 <WhyChose/>
 <OurComprensive/>
 </>
  );
}
