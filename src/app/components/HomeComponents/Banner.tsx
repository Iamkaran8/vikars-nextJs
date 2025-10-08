import Image from 'next/image'
// Using direct paths to public images
// import bannerImg from '/home-banner.png'
// import bannerImg1 from '/home-textIcon.png'



export const Banner = () => {
  return (
    <div className='cont lg:px-10 px-3'>
      <div className="bg-cream flex flex-col lg:flex-row lg:pl-24 rounded-[15px] lg:rounded-[35px] items-end overflow-hidden">

        {/* text-container */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center items-center md:items-start px-3 md:px-10 pt-10 md:pt-24 lg:pb-24">

          {/* trusted description */}
          <p className="text-center md:text-left lg:text-nowrap leading-relaxed">
            Trusted by
            <span className="inline-flex items-center mx-2 align-middle">
              {/* <img className="w-12 h-auto" src={bannerImg1} alt="Trusted logo" /> */}
              <Image src="/home-textIcon.png" alt="Trusted logo" height={48} width={48} />
            </span>
            <b>5000+ parents and students</b> across India | 95% Student Retention Rate
          </p>

          {/* one to one */}
          <h1 className="mt-4 text-center md:text-left text-coral text-28 md:text-36 lg:text-38 font-extrabold pt-2 lg:text-nowrap leading-tight">One-on-One Personalized Classes</h1>

          {/* heading */}
          <h2 className='text-center md:text-left text-32 md:text-48 lg:text-64 font-bold md:text-nowrap leading-tight py-3'>With Expert Tutors<br />That Guarantee Results!</h2>

          {/* description */}
          <p className='text-center md:text-left text-nowrap hidden md:block'>One child. One expert. 100% focus. Personalized 1-on-1 tuition<br/> that builds clarity, confidence, and results parents can trust.</p>
          <p className='text-center md:text-left md:hidden'>One child. One expert. 100% focus. Personalized 1-on-1 tuition  that builds clarity, confidence, and results parents can trust.</p>

          {/* call to action */}
          <button className='w-[40%] px-4 py-2 bg-forest text-white rounded-md mt-3 md:mt-14 z-10'> <a href="#contact_us" > Book & Call</a></button>

        </div>
        {/* image-container */}
        <div className='w-full lg:w-[60%] -mt-8 md:-mt-36 lg:mt-0'>
          {/* <img src={bannerImg} alt=" banner" /> */}
          <Image src="/home-banner.png" alt=" banner" width={600} height={400} />
        </div>
      </div>
    </div>
  )
}
export default Banner
