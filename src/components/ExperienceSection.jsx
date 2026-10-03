import SectionHeading from './SectionHeading'
import TimelineItem from './TimelineItem'

const ExperienceSection = () => {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="July 2026 – Present"
          title="Freelance Website Designer & Developer"
          place="Freelance"
          description="Designed and built a full-stack e-commerce website, handling both front-end and back-end development."
        />
        <TimelineItem
          period="SY 2025 – 2026"
          title="Non-Academic Scholar, Cataloging Section"
          place="Cebu Institute of Technology – University, College Library"
          description="Assisted with daily cataloging operations, including organizing, encoding and maintaining accurate library records."
        />
        <TimelineItem
          period="2024 – 2025"
          title="Office Assistant"
          place="Assured Financial Planners Unit – Insular Life"
          description="Provided administrative and technical support, and designed visual aids and infographics for internal updates and social media."
        />
      </ol>
    </section>
  )
}

export default ExperienceSection
