import Customer from "./components/Customer";
import DressStyles from "./components/DressStyles";
import Hero from "./components/Hero";
import NewArrivals from "./components/NewArrival";
import Selling from "./components/Selling";
import Sponser from "./components/Sponser";

export default function Home (){
return(
<div>
   <Hero/>
  <Sponser/>
  <NewArrivals/>
  <Selling/>
  <DressStyles/>
  <Customer/>
</div>
  )
}