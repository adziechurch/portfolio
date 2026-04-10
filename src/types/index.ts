export type WorkExperience = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  period: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
};

type LanguageFramework = {
  name: string;
  logo: string | null;
};

export type Language = {
  name: string;
  logo: string | null;
  frameworks: LanguageFramework[];
};
