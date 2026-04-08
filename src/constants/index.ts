import { montu, qualie } from '../assets';
import type { WorkExperience } from '../types';

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
    summary: '',
    responsibilities: [
      'Completed virtual internship, gaining a strong foundation in MATLAB, including data analysis and processing.',
      'Acquired practical skills in image and signal processing, including segmentation, batch processing, and spectral analysis.',
      'Developed expertise in machine learning models for clustering, classification, and regression, and customized deep learning techniques for image classification.',
    ],
    achievements: [],
  },
];
