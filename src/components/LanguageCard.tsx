import '../App.css';
import type { Language } from '../types';

export type LanguageCardProps = {
  language: Language;
};

function LanguageCard(props: LanguageCardProps) {
  const { language } = props;

  return (
    <div className="language-card">
      <div className="language-card-front">
        <div className="language-card-front-content">
          <img
            src={language.logo ? language.logo : ''}
            width="50"
            height="50"
            className="language-card-front-logo mb-5"
            alt={language.name}
          />
          <p>{language.name}</p>
        </div>
      </div>
      <div className="language-card-back">
        {language.frameworks.map((framework, index) => (
          <div key={`language-framework-${index}`}>
            <img
              src={framework.logo ? framework.logo : ''}
              width="50"
              height="50"
              className="language-card-back-logo"
              alt={framework.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LanguageCard;
