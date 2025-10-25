
'use client'

import Navbar from "@/app/components/Navbar";
import { AllBlogs } from "@/app/components/admin/uploads/AllBlogs";
import { Header } from "@/app/components/admin/uploads/Header/Header";
import { withAuth } from "@/app/components/admin/withAuth";

const UploadsPage = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[100px] md:pt-[130px]">
        <Header />
      </div>
      <div className="px-4 sm:px-6 md:px-10 py-6 md:py-8 lg:py-10 cont text-14 sm:text-16 lg:text-20">
        <AllBlogs />
      </div>
    </>
  );
};

export default withAuth(UploadsPage);
