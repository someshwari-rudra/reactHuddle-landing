import Hero from "./components/Hero";
import Card from "./components/Card"
import { useState } from "react";
import Cardcontent from "./components/CardContent"
import Footer from "./components/Footer"

function App() {
  const [cardData,setCardData] = useState(Cardcontent)
  return (
    <>
    <Hero/>
    <Card cardData={cardData}/>
    <Footer/>
    </>
  );
}

export default App;
