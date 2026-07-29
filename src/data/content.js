// ---------------------------------------------------------------------------
// All portfolio content lives here. To add a new project, publication, award,
// or role, just add a new object to the relevant array below — the page
// updates automatically, no need to touch any component files.
// ---------------------------------------------------------------------------

export const social = {
  linkedin: 'https://linkedin.com/in/your-profile',
  github: 'https://github.com/your-username',
  email: 'your.email@example.com',
};

export const hero = {
  eyebrow: 'Field notes — Nairobi, Kenya',
  coords: '· 1°17′S 36°49′E',
  name: 'Hello',
  tagline: [
    'Geospatial data scientist turning ',
    { emphasis: 'field surveys, satellite data, and health system evidence' },
    ' into decisions governments can act on — across Kenya, Malawi, and the wider Eastern & Southern Africa region.',
  ],
};

export const about = {
  paragraphs: [
    "I'm a geospatial data scientist with over five years' experience spanning field-based land surveying, decision-grade geospatial analytics, and government advisory across Eastern and Southern Africa. My work sits at the intersection of ground-truth data collection — cadastral and topographic surveys — and high-level spatial analytics that inform public-sector investment, resilience planning, and health system strengthening.",
    "I've led national-level geospatial advisory processes, including Malawi's facility prioritization for Emergency Obstetric and Newborn Care, and authored six first-author peer-reviewed papers translating spatial evidence into policy-relevant recommendations. I care about reproducibility — every analysis I produce is documented, versioned, and built to be re-run by someone else.",
    'In 2026, I was named a Geospatial World Rising Star, recognizing this work across the region.',
  ],
  facts: [
    { label: 'Based in', value: 'Nairobi, Kenya' },
    { label: 'Currently', value: 'Regional GIS Expert, UNFPA ESARO' },
    { label: 'Education', value: 'MSc Spatial Data Science, Penn State' },
    { label: 'Languages', value: 'English, Kiswahili, German (B1), French (B1)' },
    { label: 'Publications', value: '6 first-authored, peer-reviewed' },
  ],
};

export const projects = [
  {
    title: 'Malawi EmONC Facility Prioritization',
    description: 'Add a short description here — the problem, your role, the geospatial method used, and the outcome.',
    tags: ['AccessMod', 'QGIS', 'Government Advisory'],
    image: null, // e.g. '/images/project1.jpg'
    repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
  },
  {
    title: 'Flood-Impact Healthcare Accessibility Analysis',
    description: 'Add a short description here — data sources, method, and the resilience recommendation it informed.',
    tags: ['R', 'Accessibility Modeling', 'Climate Resilience'],
    image: null,
    repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
  },
  {
    title: 'Add your next project title',
    description: 'Add a short description here.',
    tags: ['Tag', 'Tag'],
    image: null,
    repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
  },
];

export const awards = [
  { year: '2026', text: 'Geospatial World Rising Star (Top 50 Globally) — Geospatial World Forum' },
  { year: '2024', text: 'Best Poster Presentation, GEOMED International Conference, Hasselt University, Belgium' },
  { year: '2021', text: 'Best Final Year Project, Dept. of Geospatial & Space Technology — Institution of Engineers of Kenya' },
  { year: '2020', text: 'First Runner-Up (Female), Hon. Dr. Musimba School of Engineering Prize Fund, University of Nairobi' },
];

export const skillGroups = [
  {
    title: 'Spatial analysis & modeling',
    items: ['AccessMod', 'ArcGIS Pro', 'QGIS', 'Google Earth Engine'],
  },
  {
    title: 'Data collection & management',
    items: ['KoboToolbox', 'Survey123', 'DHIS2', 'PostgreSQL'],
  },
  {
    title: 'Analysis & visualization',
    items: ['R · Python · Stata', 'Web maps & dashboards', 'Tableau · ArcGIS Online'],
  },
  {
    title: 'Training & capacity building',
    items: ['AccessMod Regional Trainer', 'GIS training coordinator', 'GIS Hub facilitator, U. Nairobi'],
  },
  {
    title: 'Technical writing',
    items: ['Scientific & report writing', 'Literature review & appraisal', 'Canva · PowerPoint · Prezi'],
  },
  {
    title: 'Workflow & infrastructure',
    items: ['GIS infrastructure audits', 'Reproducible analytics', 'Automation using R'],
  },
];

export const experience = [
  {
    role: 'Consultant / Regional GIS Expert',
    org: 'UNFPA — Eastern & Southern Africa Regional Office',
    meta: 'Johannesburg, South Africa (remote, based in Nairobi) · Jan 2026 – Present',
    highlights: [
      "Led regional GIS leadership on Malawi's three-phase EmONC facility prioritization process with UNFPA, WHO, UNICEF, and the Ministry of Health.",
      'Developed an 8-module GIS/AccessMod training curriculum and facilitator\'s guide for regional trainers.',
      'Led in-country GIS/AccessMod capacity-building in Malawi, strengthening national technical capability for health accessibility modeling.',
    ],
  },
  {
    role: 'GIS Research Officer',
    org: 'KEMRI-Wellcome Trust Research Programme',
    meta: 'Nairobi, Kenya · Mar 2021 – Dec 2025',
    highlights: [
      'Led geospatial analysis quantifying the impact of flood-related road disruption on healthcare accessibility in Kenya.',
      'Modeled travel time to Civil Registration Offices to identify barriers to birth registration.',
      'Led a GIS infrastructure audit — including user-needs assessment — that informed a data storage system revamp and a successful software upgrade.',
      'Authored six first-author peer-reviewed manuscripts; built reusable R workflows for team-wide use.',
    ],
  },
  {
    role: 'GIS Analyst Intern',
    org: 'Kenya Agricultural & Livestock Research Organization (KALRO), Kenya Soil Survey',
    meta: 'Jan – Dec 2020',
    highlights: [
      'Processed multi-temporal satellite imagery in Google Earth Engine, including NDVI time-series (1990–2020), for the Kenya Climate Smart Agriculture Project.',
      'Built spatial models for soil loss estimation and digital soil mapping in R.',
    ],
  },
  {
    role: 'Engineering (Land) Surveyor / GIS Intern',
    org: 'Geodev Kenya Limited',
    meta: 'May – Dec 2019',
    highlights: [
      'Supported a 136 km road reserve title survey for the Kenya National Highways Authority, coordinating field teams and client engagements.',
      'Led digitization workflows including georeferencing and boundary alignment.',
    ],
  },
  {
    role: 'Engineering (Land) Surveyor — Attachment',
    org: 'Ministry of Lands, Housing & Urban Development — Embu District Survey Office',
    meta: 'Oct 2015 – Jan 2016',
    highlights: [
      'Conducted cadastral and topographic field surveys supporting boundary verification and land administration.',
      'Reviewed cadastral mutation forms for spatial accuracy and registration compliance.',
    ],
  },
];

export const publications = [
  {
    year: '2026',
    title: 'Travel time to health facilities and perinatal outcomes: A systematic review and meta-analysis',
    venue: 'Journal of Global Health — Roder-DeWan et al., incl. Robert BN',
    url: null,
  },
  {
    year: '2026',
    title: 'Missed at Birth: National Determinants and Subnational Trends in Birth Registration Coverage in Kenya, 2014–2022',
    venue: 'BMJ Public Health, 4:e003850 — Robert BN (first author)',
    url: null,
  },
  {
    year: '2026',
    title: 'Impact analysis of flood-induced changes in geographical accessibility and coverage to healthcare in both public and private sector, Kenya',
    venue: 'International Journal of Health Geographics — Robert BN (first author)',
    url: null,
  },
  {
    year: '2025',
    title: 'Spatially varying relationships between birth registration and influencing factors in Kenya using a suite of Geographically Weighted Regressions',
    venue: 'Spatial and Spatial-temporal Epidemiology, 55:100764 — Robert BN (first author)',
    url: null,
  },
  {
    year: '2024',
    title: 'Evaluating the gap in rapid diagnostic testing: insights from subnational Kenyan routine health data',
    venue: 'BMJ Open, 14:e081241 — Robert BN (first author)',
    url: null,
  },
  {
    year: '2023',
    title: 'Spatial variation and clustering of anaemia prevalence in school-aged children in Western Kenya',
    venue: 'PLOS One, 18: e0282382 — Robert BN (first author)',
    url: null,
  },
];

export const community = [
  { text: 'GIS/AccessMod Regional Trainer, Eastern & Southern Africa Region', year: '2025–' },
  { text: 'GIS Hub Facilitator, University of Nairobi — equipping students with spatial data analysis skills', year: '2022–' },
  { text: "Co-supervised interns and Master's students", year: null },
  { text: 'Community outreach and mentorship through KenyaHelp, Rotary, and Rotaract clubs', year: null },
];
