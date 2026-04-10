import '../App.css';
import { languages } from '../constants';
import { LanguageCard } from './index.ts';

function About() {
  return (
    <section id="about" className="section">
      <p className="section-subtext">Introduction</p>
      <h2 className="section-header">Overview</h2>
      <div className="section-content">
        I'm a Software Engineer that's been playing the game for over fourteen years. I'm always looking for something
        new to learn and find it is best applied and enjoyed as part of a team working towards a common goal of
        delivering the best outcomes for stakeholders.
        <br />
        <br />I have a solid background and varied experience in the online technologies space and have worked on
        several SaaS applications that serve different customer using a variety of different technologies, frameworks,
        and languages.
      </div>
      <div className="mt-5 flex flex-row flex-wrap gap-10">
        {languages.map((language, index) => (
          <LanguageCard key={`language-${index}`} language={language} />
        ))}
      </div>
    </section>
  );
}

export default About;
