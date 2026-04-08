import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../App.css';
import type { WorkExperience } from '../types';

type ExperienceCardProps = {
  experience: WorkExperience;
};

function ExperienceCard(props: ExperienceCardProps) {
  const { experience } = props;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#1d1836',
        color: '#fff',
      }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={experience.period}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div className="text-left">
        <h3 className="text-white text-2xl font-bold">{experience.title}</h3>
        <span className="text-secondary text-sm font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </span>
        <p className="text-xs">{experience.summary}</p>
      </div>

      <div className="text-left">
        <p>Responsibilities</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.responsibilities.map((responsibility, index) => (
            <li key={`experience-responsibility-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {responsibility}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-left">
        <p>Achievements</p>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={`experience-achievement-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
}

export default ExperienceCard;
