import TopNavBar from '@/components/TopNavBar'
import HeroSection from '@/components/HeroSection'
import DisciplinesSection from '@/components/DisciplinesSection'
import ProjectsSection from '@/components/ProjectsSection'
import LinkedInActivitySection from '@/components/LinkedInActivitySection'
import ToolkitSection from '@/components/ToolkitSection'
import JourneySection from '@/components/JourneySection'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/ChatWidget'

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main className="overflow-x-hidden">
        <HeroSection />
        <DisciplinesSection />
        <ProjectsSection />
        <ToolkitSection />
        <JourneySection />
        <LinkedInActivitySection />
      </main>
      <Footer />
      <ChatWidget />
    </>
  )
}
