import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css';
import { experiences } from '../constants';
import ExperienceCard from './ExperienceCard.tsx';

function Experience() {
  return (
    <section className="work-experience">
      <p className="section-subtext">What I have done so far</p>
      <h2 className="section-header">Work Experience</h2>
      <div className="section-content">
        <div className="mt-20 flex flex-col">
          <VerticalTimeline layout="2-columns">
            {experiences.map((experience, index) => (
              <ExperienceCard key={`experience-${index}`} experience={experience} />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    </section>
  );
}

export default Experience;
