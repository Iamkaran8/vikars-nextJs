import Banner from "./components/HomeComponents/Banner";
import { BookDemo } from "./components/HomeComponents/BookDemo";
import { Faqs } from "./components/HomeComponents/Faqs";
import { Form } from "./components/HomeComponents/Form";
import { Program } from "./components/HomeComponents/Program-offered";
import VikarsSection from "./components/HomeComponents/VikarsSection";
import { WhatWeOffer } from "./components/HomeComponents/WhatWeOffer";
import { WorkshopSection } from "./components/HomeComponents/WorkShop";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-[100px] md:pt-[130px]  text-16 md:text-20">
        <Banner />
        <WhatWeOffer />
        <Form />
        <Program />
        <VikarsSection />
        <WorkshopSection />
        <Faqs />
        <BookDemo />
      </main>

    </>
  );
}
