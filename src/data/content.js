// ---------------------------------------------------------------------------
// All portfolio content lives here. To add a new project, publication, award,
// or role, just add a new object to the relevant array below — the page
// updates automatically, no need to touch any component files.
// ---------------------------------------------------------------------------

export const social = {
  linkedin: 'https://www.linkedin.com/in/bibian-robert-msc-91211b101/',
  github: 'https://github.com/your-username',
  email: 'your.email@example.com',
  scholar: 'https://scholar.google.com/citations?user=l1pydXQAAAAJ&hl=en',
  orcid: 'https://orcid.org/0000-0002-9737-883X',
  researchgate: 'https://www.researchgate.net/profile/Bibian-Robert-2',
};

export const hero = {
  // eyebrow: 'Field notes — Nairobi, Kenya',
  // coords: '· 1°17′S 36°49′E',
  name: "Bibian N. Robert",
  tagline: [
    'Geospatial data scientist delivering ',
    { emphasis: 'actionable, cross-sector spatial evidence' },
    ' and strengthening ',
    { emphasis: 'national capacity to apply it' },
    ' across Eastern and Southern Africa.',
  ],
};

export const about = {
  paragraphs: [
    "I have 5+ years of experience spanning land and engineering surveying, GIS research, advanced geospatial analytics, data analysis and visualization, and regional capacity building and advisory across Eastern and Southern Africa. My background includes serving as a GIS Researcher at the KEMRI-Wellcome Trust Research Programme, where I authored six first-author peer-reviewed papers translating spatial evidence into policy-relevant recommendations and developed reproducible workflows.",
    "I was awarded the Geospatial World Rising Star recognition in early 2026 (Top 50 globally), and since then I have supported the United Nations Population Fund's Eastern and Southern Africa Regional Office (UNFPA ESARO) as an independent geospatial consultant. This includes leading Malawi's national-level facility prioritization for Emergency Obstetric and Newborn Care as part of a regional team of GIS experts, and designing training curricula and facilitator guides that help country and regional teams sustain this work. I continue to advance the use of geospatial technology in collaborative, multidisciplinary settings to address development challenges.",
  ],
  facts: [
    { label: 'Based in', value: 'Nairobi, Kenya' },
    { label: 'Currently', value: 'Consultant / Regional GIS Expert supporting UNFPA ESARO' },
    { label: 'Education', value: 'MSc Spatial Data Science, Penn State' },
    { label: 'Languages', value: 'English, Kiswahili, German (B1), French (B1)' },
    { label: 'Publications', value: '6 first-authored, peer-reviewed' },
  ],
};

export const projects = [
  {
    title: 'Malawi EmONC Facility Prioritization',
    theme: 'Government Advisory & Health Accessibility',
    description: "Applied AccessMod-based geographic accessibility modeling to identify priority health facilities for Emergency Obstetric and Newborn Care (EmONC) upgrades in Malawi, targeting a 2-hour travel-time threshold for pregnant women. Served as one of the GIS technical experts on a three-phase national prioritization process led jointly with UNFPA, WHO, UNICEF, and Malawi's Ministry of Health, informing government investment decisions in maternal health infrastructure.",
    tags: ['AccessMod', 'Accessibility Modelling','EmONC', 'Government Advisory'],
    image: 'images/emonc_prioritization_malawi.jpg',
    repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
  },
  {
    title: 'Flood-Impact Healthcare Accessibility Analysis',
    theme: 'Climate Change & Disaster Impact Assessment',
    description: 'Modeled pre- and post-flood travel time to 10,995 health facilities nationwide using satellite-derived flood extents (Sentinel-1 SAR, NOAA-VIIRS) and least-cost path analysis. Found that 30-minute healthcare access dropped from 94% to 73% nationally, informing recommendations to embed disaster preparedness into county-level health system planning.',
    tags: ['R', 'Accessibility Modeling', 'Climate Resilience'],
    image: 'images/flood-impact-healthcare-accessibility-analysis.jpg',
    imageUrl: 'https://link.springer.com/article/10.1186/s12942-026-00461-x/figures/4',
    repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
    articleUrl: 'https://doi.org/10.1186/s12942-026-00461-x',
  },
  {
    title: 'Spatial Determinants of Birth Registration Coverage',
    theme: 'Civil Registration & Vital Statistics',
    description: 'Analyzed 2022 Kenya Demographic and Health Survey data across 1,673 survey clusters, comparing OLS, GWR, Multiscale GWR, and Similarity GWR models to test whether birth registration determinants vary spatially. Found Multiscale GWR fit best, showing some factors like bank account ownership and unemployment have localized effects while others act uniformly, pointing to the need for context-specific registration strategies rather than one-size-fits-all interventions.',
    tags: ['R', 'GWR', 'Spatial Statistics', 'Civil Registration'],
    image: 'images/spatial-determinants-of-birth-registration-coverage.jpg',
    repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
    articleUrl: 'https://doi.org/10.1016/j.sste.2025.100764',
  },
  {
    title: 'Rapid Diagnostic Testing Gap Analysis, Kenya',
    theme: 'Health Systems & Data Quality',
    description: 'Linked DHIS2 facility-level data for 19 rapid diagnostic tests (2018-2020) across 13,373 geocoded health facilities in Kenya, then modeled supply against estimated demand to quantify unmet testing needs by county. Found reporting completeness below 40% nationally and stark geographic gaps, such as high unmet malaria-testing needs in Turkana and the western/coastal regions, pointing to the need for targeted interventions to close testing gaps and strengthen routine data reporting.',
    tags: ['R', 'DHIS2', 'Health Systems', 'Data Quality'],
    image: 'images/rapid-diagnostic-testing-gap-analysis-kenya.jpg',
    repoUrl: 'https://github.com/Bibian-Robert/Diagnostic-Study-KWTRP',
    liveUrl: '#',
    articleUrl: 'https://doi.org/10.1136/bmjopen-2023-081241',
  },
  {
    title: 'Anaemia Clustering in School-Aged Children, Western Kenya',
    theme: 'Public Health & Spatial Epidemiology',
    description: "Surveyed hemoglobin levels among 8,051 school-aged children across 82 schools in eight Western Kenya counties, then applied Moran's I, spatial scan statistics, and LISA clustering to test whether anaemia prevalence clusters geographically. Found an overall prevalence of 27.8%, with hotspot clusters reaching over 45% in some areas, informing recommendations to geographically target anaemia and malaria prevention interventions in school catchments most at risk.",
    tags: ['R', 'Spatial Epidemiology', 'Public Health', 'GIS'],
    image: 'images/anaemia-clustering-school-aged-children-western-kenya2.jpg',
    repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
    articleUrl: 'https://doi.org/10.1371/journal.pone.0282382',
  },
  {
    title: 'Sub-National Child Health Profiles, Kenya',
    theme: 'Child Health & Policy Advisory',
    description: "Synthesized evidence across peer-reviewed literature and routine data to develop sub-national child health profiles for each of Kenya's 47 counties, highlighting temporal trends and determinants of under-five mortality to inform county-level health policy and planning. Profiles are available for all 47 counties and hosted on the KEMRI-Wellcome Trust website. View the live demo below.",
    tags: ['Literature Synthesis', 'Child Health', 'Policy Brief'],
    image: 'images/child-health-profiles-kenya.jpg',
    imageUrl: 'https://inform.kemri-wellcome.org/wp-content/uploads/2021/06/Baringo_U5M_-Its-_Determinants_County_Profile.pdf',
    // repoUrl: 'https://github.com/your-username/your-repo',
    liveUrl: 'https://inform.kemri-wellcome.org/county-under-5-mortality-profiles/',
    liveLabel: 'View Profiles',
    // articleUrl: 'https://inform.kemri-wellcome.org/wp-content/uploads/2021/06/Baringo_U5M_-Its-_Determinants_County_Profile.pdf',
  },
];

export const awards = [
  { year: '2026', text: 'Geospatial World Rising Star 2026 (Top 50 Globally) by Geospatial World Forum, Amsterdam, The Netherlands', tagline: "Recognized among the geospatial industry's rising young leaders shaping its next chapter of innovation.", image: 'images/geospatial-world-rising-star-2026.jpg', url: 'https://geospatialworld.net/rising-stars/2026/' },
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
    authors: 'Roder-DeWan S, Ramadan M, Ouma P, Manu A, Okiro EA, Strobel N, Robert BN, Odipo E, Macharia PM, Danso-Appiah A, Goodman DC, Dube Q, Gupta G, Magge H, Edmond K',
    title: 'Travel time to health facilities and perinatal outcomes: A systematic review and meta-analysis',
    journal: 'Journal of Global Health',
    url: 'https://doi.org/10.7189/jogh.16.04136',
  },
  {
    year: '2026',
    authors: 'Robert BN, Macharia PM, Naser L, Chepkurui V, Kamau J, Snow RW, Li Z, Okiro EA',
    title: 'Missed at Birth: National Determinants and Subnational Trends in Birth Registration Coverage in Kenya, 2014–2022',
    journal: 'BMJ Public Health, 4:e003850',
    url: 'https://doi.org/10.1136/bmjph-2025-003850',
  },
  {
    year: '2026',
    authors: 'Robert BN, Muchiri SK, Kahoro EW, Okiro EA, Macharia PM',
    title: 'Impact analysis of flood-induced changes in geographical accessibility and coverage to healthcare in both public and private sector, Kenya',
    journal: 'International Journal of Health Geographics',
    url: 'https://doi.org/10.1186/s12942-026-00461-x',
  },
  {
    year: '2025',
    authors: 'Robert BN, Macharia PM, Naser L, Chepkurui V, Kamau J, Snow RW, Li Z, Okiro EA',
    title: 'Spatially varying relationships between birth registration and influencing factors in Kenya using a suite of Geographically Weighted Regressions',
    journal: 'Spatial and Spatial-temporal Epidemiology, 55:100764',
    url: 'https://doi.org/10.1016/j.sste.2025.100764',
  },
  {
    year: '2024',
    authors: 'Robert BN, Moturi AK, Bahati F, Macharia PM, Okiro EA',
    title: 'Evaluating the gap in rapid diagnostic testing: insights from subnational Kenyan routine health data',
    journal: 'BMJ Open, 14:e081241',
    url: 'https://doi.org/10.1136/bmjopen-2023-081241',
  },
  {
    year: '2023',
    authors: 'Moturi AK, Robert BN, Bahati F, Macharia PM, Okiro EA',
    title: 'Investigating rapid diagnostic testing in Kenya’s health system, 2018–2020: validating non-reporting in routine data using a health facility service assessment survey.',
    journal: 'BMC Health Services Research, 23:306',
    url: 'https://doi.org/10.1186/s12913-023-09296-9',
  },
  {
    year: '2023',
    authors: 'Robert BN, Cherono A, Mumo E, Mwandawiro C, Okoyo C, Gichuki PM, Blanford JL, Snow RW, Okiro EA',
    title: 'Spatial variation and clustering of anaemia prevalence in school-aged children in Western Kenya',
    journal: 'PLOS One, 18: e0282382',
    url: 'https://doi.org/10.1371/journal.pone.0282382',
  },
];

export const community = [
  { text: 'GIS/AccessMod Regional Trainer, Eastern & Southern Africa Region', year: '2025–' },
  { text: 'GIS Hub Facilitator, University of Nairobi — equipping students with spatial data analysis skills', year: '2022–' },
  { text: "Co-supervised interns and Master's students", year: null },
  { text: 'Community outreach and mentorship through KenyaHelp, Rotary, and Rotaract clubs', year: null },
];
