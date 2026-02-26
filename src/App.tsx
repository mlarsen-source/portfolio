import Hero from "./components/Hero";
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import MilitarySection from "./components/MilitarySection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import {
  educationEntries,
  experiences,
  militaryHistory,
  profile,
  projects,
  skillGroups,
  socialLinks,
} from "./data/portfolioData";

export default function App() {
  const profilePhoto = `${import.meta.env.BASE_URL}profile.jpg`;
  const currentYear = new Date().getFullYear();

  return (
    <div className="site">
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />

      <Hero
        profilePhoto={profilePhoto}
        name={profile.name}
        title={profile.title}
        caption={profile.caption}
        kicker={profile.kicker}
        summary={profile.summary}
        requestResumeUrl={profile.requestResumeUrl}
        socialLinks={socialLinks}
      />

      <main>
        <SkillsSection skillGroups={skillGroups} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <EducationSection educationEntries={educationEntries} />
        <MilitarySection militaryHistory={militaryHistory} />
      </main>

      <footer className="section footer">
        <p>Copyright {currentYear} Matthew Larsen</p>
      </footer>
    </div>
  );
}
