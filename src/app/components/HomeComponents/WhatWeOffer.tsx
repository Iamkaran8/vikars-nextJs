const data = [
  {
    title: "What We Offer \n Built For Student Success. ",
    content: "For Grades 3 To 12, Across CBSE, ICSE, And IB Boards Get Your Child The Attention They Deserve — Anytime, Anywhere.",
    footer: "",
    bgColor: "#124029",
    textColor: "white",
    colSpan: "md:col-span-2"
  },
  {
    title: "AI + Human Progress Tracker",
    content: "No vague 'Your Child is Doing Well' reports. Our dashboard shows real progress with AI-powered analytics (speed, accuracy, repeat mistakes) + teacher insights. Parents get a weekly report that’s easy to understand.",
    footer: "Transparent Reports · Goal Milestones · Personalized Homework & MCQ’s",
    bgColor: "#E95D5C",
    textColor: "white"
  },
  {
    title: "Personalized One-On-One Classes",
    content: "One Student. One Expert. Maximum Results. No group noise, no distractions—just your child and a dedicated expert tutor who adapts to their learning pace, doubts, and goals. Every minute is productive.",
    footer: "Live 1:1 Tuition For Classes 3–12 · Best Online Tuition In India",
    bgColor: "#F5EAD6",
    textColor: "black"
  },
  {
    title: "Board-Specific Sylla Bus Support (CBSE · ICSE · IB · State)",
    content: "From NCERT to IB, everything is covered. Your child’s board syllabus is taught exactly as examiners expect it—no shortcuts, no outdated notes. Our tutors simplify NCERT for CBSE, deepen concepts for ICSE, and guide inquiry-style learning for IB students.",
    footer: "Full Syllabus · PCM Focus · Test Prep",
    bgColor: "#4984FC",
    textColor: "white"
  },
  {
    title: "Expert Teachers From Top Institutions",
    content: "Our tutors are not just subject experts—they’re trained in making tough topics simple. Every profile is verified, every teacher is demo-observed, and regular audits ensure quality never slips.",
    footer: "Handpicked. Verified. Experienced. Prep",
    bgColor: "#97FF5E",
    textColor: "black"
  },
  {
    title: "GPS Learning Path™ — Exclusive To VIKAR’S",
    content: "Our exclusive GPS framework maps exactly where your child stands, what’s next, and how to get there. Each week, checkpoints and mentor adjustments ensure no child is left behind.",
    footer: "Your Child’s Guided Personalised Study",
    bgColor: "#E95D5C",
    textColor: "white"
  },
  {
    title: "AI Future-Ready Skill Workshops (Ages 10–17)",
    content: "Workshops that make your child future-ready: using AI tools to score marks, creating images with AI tools, and learning digital ethics to use tech responsibly.",
    footer: "Live Interactive Workshops · Beyond Textbooks · Into Tomorrow",
    bgColor: "#5EFFFF",
    textColor: "black"

  }
]

export const WhatWeOffer = () => {


  return (
    <div className="lg:px-10 px-3">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 cont px-3 md:px-10 lg:px-28 py-20  ">
        {
          data.map((item, i) => (
            <div key={i} className={`p-6 pt-8 rounded-[22px] ${i === 0 ? "md:col-span-2" : ""}`}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}>
              <h2 className="text-28 md:text-30 font-bold whitespace-pre-line leading-tight">{item.title}</h2>
              <p className=" text-14 font-bold pt-4" style={{ opacity: i === 0 ? 1 : 0.7, fontWeight: i === 0 ? "normal" : "bold", fontSize: i == 0 ? "18px" : "14px", marginTop: i == 0 ? "25px" : "" }}>{item.content}</p>
              <p className="pt-2 text-[16px] leading-tight underline">{item.footer}</p>
            </div>

          ))}

      </div>
    </div>

  )
}
