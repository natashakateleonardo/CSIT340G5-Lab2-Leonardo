import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'

const ProjectsSection = () => {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="InkSlot"
          description="A tattoo shop booking platform where guests browse artists and book without signing up, and artists and admins manage bookings and schedules."
          tech="Spring Boot · React · Kotlin"
          link="https://github.com/natashakateleonardo/IT342_InkSlot_G4_Leonardo"
        />
        <ProjectCard
          year="2025"
          title="Safe Haven"
          description="A safe housing finder that connects tenants and landlords through verified listings, search filters and a mutual rating system."
          tech="Django · MySQL · JavaScript"
          link="https://github.com/Pochyy/CSIT327-G2-Safe-Housing-Management-System"
        />
        <ProjectCard
          year="2026"
          title="GIT it!"
          description="A Git learning platform that teaches problem-solving through a simulated terminal and a live repository visualization."
          tech="React · Django · Vite"
          link="https://github.com/joanaxyz/2526-sem2-it332-34_GITit"
        />
        <ProjectCard
          year="2026"
          title="Show Rundown"
          description="A radio scheduling and prep tool built for Monster BT105.9 in Cebu, so producers can plan an on-air hour quickly."
          tech="JavaScript · Supabase · CSS"
          link="https://github.com/natashakateleonardo"
        />
      </div>
    </section>
  )
}

export default ProjectsSection
