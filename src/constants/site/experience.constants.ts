import { ComponentProps } from 'react';

import layouts from '../../components/app/layouts';
import wrappers from '../../components/app/wrappers';

type DynamicLayout = ComponentProps<typeof layouts.Dynamic>;
type BasicWrapper = ComponentProps<typeof wrappers.Basic>;

type DynamicLayoutWithBasicWrapper = DynamicLayout & BasicWrapper;

const experience: DynamicLayoutWithBasicWrapper = {
  id: 'experience',
  layoutName: 'Dynamic',

  wrap: 'Basic',
  header: 'my experience',
  title: 'where I have worked?',

  components: [
    {
      componentName: 'TimelineWrapper',
      elements: [
        {
          componentName: 'TimelineElement',
          title: 'Full Stack Software Engineer',
          subtitle: 'PolyAI',
          points: [
            'Senior Full Stack Software Engineer working across the stack to develop voice agents for 5+ clients.',
            'Took the initiative to develop a VSCode Extension that enhanced the development experience by providing project specific code completion, code definitions and linting.',
            'Took the initiative to develop a code generation script for building FAQs directly from a spreadsheet. Reducing the initial build time of a project by over 90% (2 weeks to around 1 day).',
          ],
          start: new Date('2021-08-01'),
          iconColor: 'rgb(175, 225, 175)',
        },
        {
          componentName: 'TimelineElement',
          title: 'Tech Arch Delivery Analyst',
          subtitle: 'Accenture PLC',
          points: [
            'Tech stack: Angular JS, JavaScript, NodeJS, MongoDB, Test Driven Development, Jest, HTML, CSS, Java, Kubernetes, Jenkins, Nexus, SonarQube, Amazon Web Services (i.e. Lambda, EC2, Document DB, DynamoDB, CloudFormation, Cloud Development Kit)',
            'Lead developer of a cloud-native middleware solution with a plug and play architecture for creating/managing chat and voice bots. Allowing the use of products and services from different vendors.',
            'Researched, designed and implemented solution for ensuring the WebSocket API is horizontally scalable and has high availability',
            'Take decisions based on requirements, collaborating with senior solution architects and providing effort estimation ',
            'Worked with Kubernetes and CI/CD pipelines for end to end deployments',
          ],
          start: new Date('2019-07-01'),
          end: new Date('2021-08-01'),
          iconColor: 'rgb(236,84,83)',
        },
        {
          componentName: 'TimelineElement',
          title: 'Software Engineer (Part time)',
          subtitle: 'Zinc',
          points: [
            'Tech stack: Vue JS, TypeScript, MongoDB, Blockchain, HTML, CSS, CircleCI, Digital Ocean',
            'Senior backend developer of an automated referencing software',
            'Design and develop system solution using best practices and reusable architecture patterns',
            'Played a key role in architecting and developing integrations with HR tools such as Team Tailor',
          ],
          start: new Date('2018-10-01'),
          end: new Date('2019-07-01'),
          iconColor: 'rgb(44,152,240)',
        },
        {
          componentName: 'TimelineElement',
          title: 'Software Engineer',
          subtitle: 'Accenture PLC',
          points: [
            'Completed a year long industrial placement',
            'Tech stack: Docker, Micro services, SIP (Session Initiation Protocol), STT (Speech To Text), TTS (Text To Speech), JavaScript, NodeJS, MongoDB, HTML, CSS, Express',
            'Junior backend developer on a yearlong Industrial experience with a focus on development of voice bots',
          ],
          start: new Date('2017-07-01'),
          end: new Date('2018-07-01'),
          iconColor: 'rgb(249,191,63)',
        },
      ],
    },
  ],
};

export default experience;
