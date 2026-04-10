import {
  bloomtools,
  cakephp,
  cartoncloud,
  funding,
  java,
  montu,
  nestjs,
  nodejs,
  php,
  qualie,
  reactjs,
  spring,
  symfony,
  typescript,
  zend,
} from '../assets';
import type { Language, WorkExperience } from '../types';

export const experiences: WorkExperience[] = [
  {
    title: 'Senior Software Engineer',
    company_name: 'Montu',
    icon: montu,
    iconBg: '#161329',
    period: 'June 2023 - April 2026',
    summary:
      'Working in B2B space handling order management and distribution to thousands of pharmacies across Australia.',
    responsibilities: [
      'Working with NodeJS (NestJS) Typescript services backed by PostgreSQL in a Turbo monorepo, serving a React frontend and integrating with third-party systems',
      'Creating and maintaining order management system and coordinating with supporting WMS and logistics systems',
      'Managing AWS infrastructure using AWS CDK',
    ],
    achievements: [
      'Creating and maintaining order management system that processed over $100 million in orders annually',
      'Re-designing legacy JS platform for ordering products into greenfield Typescript services integrated with multiple third-parties including Shopify, Xero, Shippit, and Cin7',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Qualie',
    icon: qualie,
    iconBg: '#161329',
    period: 'July 2022 - June 2023',
    summary: 'Worked with a platform focused on market research using both qualitative and quantitative data.',
    responsibilities: [
      'Working with a Java monolith, Java microservices and NodeJS servers to service a React/Typescript frontend.\n',
      'Adding or enhancing features to the survey participant user experience',
    ],
    achievements: [
      'Implementing IaC for AWS infrastructure using AWS CDK',
      'Creating video streaming conversion functionality',
    ],
  },
  {
    title: 'Fullstack Developer',
    company_name: 'Funding.com.au',
    icon: funding,
    iconBg: '#161329',
    period: 'October 2021 - June 2022',
    summary:
      'Enhanced existing platform focusing on simplifying the process of applying for short-term mortgages or other bridging finance.',
    responsibilities: ['Maintaining and enhancing Symfony PHP API serving a React frontend.'],
    achievements: [
      'Added Equifax ID check integrations to speed up application process',
      'Created new Broker portal',
      'Streamlined property valuation process',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'CartonCloud',
    icon: cartoncloud,
    iconBg: '#161329',
    period: 'June 2016 - October 2021',
    summary:
      'Enhancing existing custom Warehouse Management System (WMS) and Transport Management System (TMS) platform.',
    responsibilities: [
      'Creating systems to parse and ingest incoming data',
      'Automatically determine delivery runs and rates for consignments based on contents and destination',
    ],
    achievements: [
      'Increased speed of parsing functionality by approximately 500% by optimising algorithms and adding additional DB indexing to increase entity lookup',
    ],
  },
  {
    title: 'Programmer',
    company_name: 'Bloomtools',
    icon: bloomtools,
    iconBg: '#161329',
    period: 'February 2012 - June 2016',
    summary: 'Maintaining and updating code for an enterprise-class custom CMS application',
    responsibilities: [
      'Creating custom solutions for clients based on provided requirements',
      'Liaising with other team members to deliver a project on time to specified requirements',
    ],
    achievements: [],
  },
];

export const languages: Language[] = [
  {
    name: 'TypeScript',
    logo: typescript,
    frameworks: [
      {
        name: 'NestJS',
        logo: nestjs,
      },
      {
        name: 'NodeJS',
        logo: nodejs,
      },
      {
        name: 'ReactJS',
        logo: reactjs,
      },
    ],
  },
  {
    name: 'PHP',
    logo: php,
    frameworks: [
      {
        name: 'Zend',
        logo: zend,
      },
      {
        name: 'CakePHP',
        logo: cakephp,
      },
      {
        name: 'Symfony',
        logo: symfony,
      },
    ],
  },
  {
    name: 'Java',
    logo: java,
    frameworks: [
      {
        name: 'Spring',
        logo: spring,
      },
    ],
  },
];
