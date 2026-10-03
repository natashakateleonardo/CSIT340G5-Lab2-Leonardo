import SectionHeading from './SectionHeading'
import ContactLink from './ContactLink'

const ContactSection = () => {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink
          label="Email"
          href="mailto:natashakate.leonardo@cit.edu"
          text="natashakate.leonardo@cit.edu"
        />
        <ContactLink
          label="GitHub"
          href="https://github.com/natashakateleonardo"
          text="github.com/natashakateleonardo"
        />
        <ContactLink
          label="LinkedIn"
          href="https://www.linkedin.com/in/natasha-kate-leonardo-6405413a9/"
          text="linkedin.com/in/natasha-kate-leonardo-6405413a9"
        />
      </ul>
    </section>
  )
}

export default ContactSection
