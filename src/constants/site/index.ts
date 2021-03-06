import { Layout } from '../../components/app/layouts';
import { Wrapper } from '../../components/app/wrappers';

import heroSection from './hero.constants';
import aboutMeSection from './about-me.constants';
import skillsSection from './skills.constants';
import experienceSection from './experience.constants';
import educationSection from './education.constants';
import projectsSection from './projects.constants';
// import contactSection from './contact.constants';

type LayoutWithWrapper = Layout & Wrapper;

export interface SiteConfig {
  title: string;
  sections: LayoutWithWrapper[];
  description: string;
}

const site: SiteConfig = {
  title: 'MQ',
  description: 'Developing applications, one idea at a time',
  sections: [
    heroSection,
    aboutMeSection,
    skillsSection,
    experienceSection,
    educationSection,
    projectsSection,
    // TODO - blog section
    // {
    //   id: 'blog',
    //   layoutName: 'Blank',

    //   wrap: 'Basic',
    //   header: 'my blogs',
    //   title: 'what I have written?',
    // },
    // contactSection,
  ],
};

export default site;
