import Image from 'next/image'
// Using direct path to public image
// import placeholder from '/placeholder.png'

const VikarsSection = () => {
    return (
        <section className="px-5 py-10 lg:py-20 cont lg:px-10 ">
            <div className="bg-cream rounded-[36px] p-6 md:p-10 text-center text-20 text-forest font-medium">

                {/* Heading */}
                <h2 className="text-28 md:text-40 font-bold mb-2">
                    More Than Just Tuition — The Vikar’s Way
                </h2>
                <p className="text-[#12402999] mb-8">
                    More Than Just Tuition — A Learning Partner <br /> For Every Child
                </p>

                {/* Center Image Placeholder */}
                <div className="w-full flex justify-center mb-8">
                    <Image src="/placeholder.png" alt="placeholder" width={400} height={300} />
                    {/* <img  src={placeholder} alt="placeholder"  /> */}
                </div>

                {/* Main Paragraph */}
                <div className='flex items-center flex-col'>
                    <p className="mb-4 w-[100%] md:w-[87%] text-16 md:text-25">
                        At <b>Vikar&apos;s Academy</b>, We Don&apos;t Just Teach Lessons — We Shape Journeys.<br/>
                        Every Child Learns Differently. Some Race Ahead, Some Pause To Explore, And Some Just Need Someone To Believe In
                        Them. That&apos;s Why We Created A Space Where <b>Learning Feels Personal, Safe, And Limitless.</b>
                    </p>

                    <p className="mb-4 w-[100%] md:w-[87%] text-16 md:text-25">
                        Here, Tutors Aren&apos;t Just Subject Experts — They Are Mentors, Motivators, And Partners In Growth. They Celebrate
                        Every &quot;Aha!&quot; Moment, Calm Every Doubt, And Slowly Build The One Thing Exams Can&apos;t Measure — Confidence.
                    </p>

                    <p className="mb-4 w-[100%] md:w-[87%] text-16 md:text-25">
                        Parents Trust Us Because We&apos;re Transparent. Every Week, You See Progress, Strengths, And The Exact Roadmap Ahead.
                        Students Love Us Because Learning Doesn&apos;t Feel Like Pressure Anymore — It Feels Like Discovery.
                    </p>
                </div>

                {/* 3C Promise */}
                <div className="my-8">
                    <p className="mb-4">We Call It The 3C Promise:</p>
                    <b>👉 Confidence To Believe In Themselves</b><br />
                    <b>👉 Clarity To Master Every Concept</b><br />
                    <b>👉 Character To Thrive Beyond Exams</b>
                </div>


                <p className='text-16 md:text-25'>
                    Because At Vikar&apos;s,<br />
                    It&apos;s Never Just About Marks. It&apos;s About Giving Your Child
                    <b>The Skills, Courage, And Joy Of Learning That Last A Lifetime.</b>
                </p>
            </div>
        </section>
    )
}

export default VikarsSection
