import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import rmtdevImg from '@/public/rmtdev.png';
import wordanalyticsImg from '@/public/wordanalytics.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Dental Medicine Degree',
    location: 'Astrakhan, RU',
    description: 'I graduated from Astrakhan State Medical University.',
    icon: React.createElement(LuGraduationCap),
    date: '2021',
  },
  {
    title: 'Dentist',
    location: 'Ait Melloul - Centre de Santé',
    description: 'I worked as a Dentist in Centre de Santé at Ait Melloul.',
    icon: React.createElement(CgWorkAlt),
    date: '2021',
  },
  {
    title: 'Dental Laser Training',
    location: 'SDEFO - Rabat',
    description: 'I had a training program in dental laser .',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Dental Assistant',
    location: 'Agadir',
    description: 'I worked as a Dental Assistant in Agadir .',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Dentist',
    location: 'Inzegan - Centre de Santé',
    description: 'I worked as a Dentist in Centre de Santé at Inzegan.',
    icon: React.createElement(CgWorkAlt),
    date: '2022',
  },
  {
    title: 'Dentist',
    location: 'Taroudant - Centre de Santé',
    description: 'I worked as a Dentist in Centre de Santé at Taroudant.',
    icon: React.createElement(CgWorkAlt),
    date: '2023',
  },
  {
    title: 'Equivalence Internship',
    location:
      "Casablanca - Centre de traitements dentaire de l'université Mohammed VI des sciences de la santé",
    description: 'I completed my Equivalence Internship in Casablanca.',
    icon: React.createElement(LuGraduationCap),
    date: '2023',
  },
  {
    title: 'Equivalence Internship',
    location: 'Anza Al-Oulya - Centre de santé',
    description: 'I completed my Equivalence Internship in Anza Al-Oulya.',
    icon: React.createElement(LuGraduationCap),
    date: '2024',
  },
] as const;

export const projectsData = [
  {
    title: 'CorpComment',
    description:
      'I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.',
    tags: ['React', 'Next.js', 'MongoDB', 'Tailwind', 'Prisma'],
    imageUrl: corpcommentImg,
  },
  {
    title: 'rmtDev',
    description:
      'Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.',
    tags: ['React', 'TypeScript', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: rmtdevImg,
  },
  {
    title: 'Word Analytics',
    description:
      'A public web app for quick analytics on text. It shows word count, character count and social media post limits.',
    tags: ['React', 'Next.js', 'SQL', 'Tailwind', 'Framer'],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  'Provision of comprehensive dental care',
  'Diagnosis and treatment of oral diseases.',
  'Management of dental emergencies.',
  'Sociability',
  'Patience',
  'Work Under Pressure',
  'Languages Spoken: Arabic (fluent), French (fluent), English (fluent).'
] as const;
