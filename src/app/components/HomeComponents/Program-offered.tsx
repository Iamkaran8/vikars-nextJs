const data = [
  {
    title: "CBSE",
    titleText: "Central Board of Secondary Education",
    content: "Programs Designed for Every Student-s Success Whether your child follows CBSE, ICSE, IB, State Board, or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results",
    point:
      ["Complete NCERT-aligned coverage for Grades 3-12",
        "Strong focus on concept clarity & exam patterns",
        "Regular tests, progress reports, and parent feedback",],
    footerText: "Trusted by 2,000+ CBSE parents who saw real results within 3 months",
    backgroundColor: "#EAF1DF",
    headerBackgroundColor: "#00A065",
    headerTextColor: "white",
  },
  {
    title: "ICSE",
    titleText: "Indian Certificate of Secondary Education",
    content: "",
    point:
      ["Grammar-rich English, Science, and Math focus",
        "Daily writing practice & creative learning approach",
        "Tutor feedback every week",],
    footerText: "90% of ICSE parents reported improved writing & problem-solving skills",
    backgroundColor: "#E7EDFB",
    headerBackgroundColor: "#4984FC",
    headerTextColor: "white",
  },
  {
    title: "IB",
    titleText: "International Baccalaureate - PYP, MYP & DP",
    content: "Programs Designed for Every Student's Success Whether your child follows CBSE, ICSE, IB, State Board, or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results",
    point:
      ["Complete NCERT-aligned coverage for Grades 3-12",
        "Strong focus on concept clarity & exam patterns",
        "Regular tests, progress reports, and parent feedback",],
    footerText: "Trusted by 2,000+ CBSE parents who saw real results within 3 months",
    backgroundColor: "#F9EFE6",
    headerBackgroundColor: "#E95D5C",
    headerTextColor: "white",

  },
  {
    title: "State Boards",
    titleText: "All States",
    content: "",
    point:
      ["State-specific coaching tailored to each regional syllabus (Grades 3-12)",
        "Teaching in regional languages + English medium for clarity",
        "Answer-writing strategies & exam prep techniques that score high marks",],
    footerText: "Over 1,500 State Board students improved exam scores by 80% on average",
    backgroundColor: "#E7EDFB",
    headerBackgroundColor: "#4984FC",
    headerTextColor: "white",

  },
  {
    title: "NEET",
    titleText: "NEET Foundation & Preparation (Grades 9-12)",
    content: "",
    point:
      ["Step-by-step mastery of Physics, Chemistry & Biology fundamentals",
        "Structured Foundation → Advanced NEET program with doubt-clearing",
        "Weekly mock tests, AIR-level questions & strategy sessions",],
    footerText: "80% of our NEET foundation students qualify for top coaching institutes",
    backgroundColor: "#E3FFD4",
    headerBackgroundColor: "#97FF5E",
    headerTextColor: "black",
  },
]

export const Program = () => {
  return (
    <div className="cont px-3 md:px-10 lg:px-28 py-10 ">
      <h1 className="text-forest text-32 font-bold text-center"> Program Offered</h1>
      <p className="text-center py-8">Programs Designed for Every Student’s Success
        Whether your child follows CBSE, ICSE, IB, State Board, <br />or is preparing for NEET — our expert tutors ensure clarity, confidence, and top results.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 ">
        {data.map((item, i) => (
          <div className="p-10 rounded-[20px] flex flex-col justify-between" style={{ backgroundColor: item.backgroundColor }} key={i}>
            <div>
              <div className="flex justify-between">
                <h1 key={i} style={{ backgroundColor: item.headerBackgroundColor, color: item.headerTextColor }} className="w-max px-6  text-center rounded p-1 font-bold text-18 ">{item.title}</h1>
                <div className="h-[30px] w-[30px] bg-white border-[1px] border-[#00000033] rounded-[7px]"></div>
              </div>
              <h2 className="py-4 text-forest font-bold text-16">{item.titleText}</h2>
              <p className="pb-2 text-text text-14">{item.content}</p>
              {item.point.map((point, index) => <li key={index} className="text-text text-14 ml-[25px]">{point}</li>)}
            </div>
            <div>
              <h3 className="pt-4 text-forest font-medium text-14">{item.footerText}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
