export const BookDemo = () => {
  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-28 py-6 md:py-8 lg:py-12 cont">
      <div className="bg-mint p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12 rounded-lg lg:rounded-xl">

        {/* Left Side (Heading) */}
        <div className="w-full lg:w-2/5 text-forest font-bold text-2xl sm:text-3xl md:text-5xl lg:text-6xl leading-snug md:leading-tight text-center lg:text-left">
          Book Your <br /> Demo Class
        </div>

        {/* Right Side (Content) */}
        <div className="w-full lg:w-3/5 text-center lg:text-left">
          <p className="font-semibold text-base sm:text-lg md:text-xl">
            Still Thinking? Let’s Talk!
          </p>
          <p className="py-3 sm:py-4 md:py-5 text-sm sm:text-base md:text-lg">
            Experience Vikar’s with a Free 30-Minute Live Demo Class. <br className="hidden sm:block" />
            No obligation. No spam. Just honest teaching.
          </p>
          <button className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] px-4 py-3 bg-forest text-white rounded-md font-medium text-sm sm:text-base md:text-lg">
            <a href="#contact_us" >  Book Your Free Demo Now</a>
          </button>
        </div>
      </div>
    </div>
  )
};
