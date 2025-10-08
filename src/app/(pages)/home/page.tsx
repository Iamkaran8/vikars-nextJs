'use client'

import { Banner } from "@/app/components/HomeComponents/Banner";
import { BookDemo } from "@/app/components/HomeComponents/BookDemo";
import { Faqs } from "@/app/components/HomeComponents/Faqs";
import { Form } from "@/app/components/HomeComponents/Form";
import { Program } from "@/app/components/HomeComponents/Program-offered";
import VikarsSection from "@/app/components/HomeComponents/VikarsSection";
import { WhatWeOffer } from "@/app/components/HomeComponents/WhatWeOffer";
import { WorkshopSection } from "@/app/components/HomeComponents/WorkShop";

export default function Home() {
  return (
    <>
      <Banner />
      <WhatWeOffer />
      <Form />
      <Program />
      <VikarsSection />
      <WorkshopSection />
      <Faqs />
      <BookDemo />
    </>
  );
}
