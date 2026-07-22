const BCXI_CONFIG = {
  siteTitle: 'Ghana CX | Customer Experience Index',
  siteDescription: 'Measuring customer experience across the services that shape daily life in Ghana',

  sectors: [
    {
      id: 'banking',
      name: 'BCXI - Banking',
      slug: 'banks',
      status: 'active',
      description: 'Review the banking institutions you use',
      icon: 'BK',
      theme: { primary: '#0b1f3a', accent: '#1677ff', highlight: '#d6a329' },
      heroImage: '/assets/web/sectors/ghana-cx-sector-banking-800.webp',
      ctaLabel: 'Explore Banking',
      respondentInstructions: 'Choose the bank you use, review the experience instructions, then continue to the approved BCXI Banking assessment.',
      defaultFormUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform'
    },
    {
      id: 'utilities',
      name: 'Utilities',
      slug: 'utilities',
      status: 'coming-soon',
      description: 'Power, water, sanitation and utility regulation',
      icon: 'UT',
      theme: { primary: '#0f766e', accent: '#06b6d4', highlight: '#0b1f3a' },
      heroImage: '/assets/web/sectors/ghana-cx-sector-utilities-800.webp',
      ctaLabel: 'Explore Utilities',
      respondentInstructions: 'The Utilities assessment will open after its exact respondent form URL has been verified.',
      defaultFormUrl: null
    },
    {
      id: 'fuel-stations',
      name: 'Fuel Stations',
      slug: 'fuel-stations',
      status: 'coming-soon',
      description: 'Petrol, diesel and lubricant retail networks',
      icon: 'FS',
      theme: { primary: '#d97706', accent: '#f97316', highlight: '#0b1f3a' },
      heroImage: '/assets/sectors/fuel-stations/hero.png',
      ctaLabel: 'Explore Fuel Stations',
      respondentInstructions: 'The Fuel Stations assessment will open after its exact respondent form URL has been verified.',
      defaultFormUrl: null
    },
    {
      id: 'education',
      name: 'Education',
      slug: 'education',
      status: 'coming-soon',
      description: 'Learner, parent and education-service experiences',
      icon: 'ED',
      theme: { primary: '#047857', accent: '#0f9f9a', highlight: '#d6a329' },
      heroImage: '/assets/web/sectors/ghana-cx-sector-education-800.webp',
      ctaLabel: 'Explore Education',
      respondentInstructions: 'The Education assessment will open after its exact respondent form URL has been verified.',
      defaultFormUrl: null
    },
    {
      id: 'public-service',
      name: 'Public and Civil Services',
      slug: 'public-service',
      status: 'coming-soon',
      description: 'Citizen and business experiences with public institutions',
      icon: 'PS',
      theme: { primary: '#155e9a', accent: '#1e78b5', highlight: '#d6a329' },
      heroImage: '/assets/web/dimensions/ghana-cx-sector-public-service-800.webp',
      ctaLabel: 'Explore Public Services',
      respondentInstructions: 'The Public and Civil Services assessment will open after its exact respondent form URL has been verified.',
      defaultFormUrl: null
    },
    {
      id: 'telecommunications',
      name: 'Telecommunications',
      slug: 'telecommunications',
      status: 'coming-soon',
      description: 'Mobile and internet service providers',
      icon: 'TC',
      theme: { primary: '#0891b2', accent: '#1677ff', highlight: '#0b1f3a' },
      heroImage: '/assets/web/sectors/ghana-cx-sector-telecommunications-800.webp',
      ctaLabel: 'Explore Telecommunications',
      respondentInstructions: 'The Telecommunications assessment will open after its exact respondent form URL has been verified.',
      defaultFormUrl: null
    },
    {
      id: 'insurance',
      name: 'Insurance',
      slug: 'insurance',
      status: 'coming-soon',
      description: 'Insurance companies and providers',
      icon: 'IN',
      theme: { primary: '#153b7a', accent: '#6d4aff', highlight: '#d6a329' },
      heroImage: null,
      ctaLabel: 'Explore Insurance',
      respondentInstructions: 'The Insurance assessment will open after its exact respondent form URL has been verified.',
      defaultFormUrl: null
    },
    {
      id: 'healthcare',
      name: 'Healthcare',
      slug: 'healthcare',
      status: 'coming-soon',
      description: 'Hospitals, clinics and health services',
      icon: 'HC',
      theme: { primary: '#176b9c', accent: '#0f9f9a', highlight: '#ffffff' },
      heroImage: '/assets/web/sectors/ghana-cx-sector-healthcare-800.webp',
      ctaLabel: 'Explore Healthcare',
      respondentInstructions: 'The Healthcare assessment will open after its exact respondent form URL has been verified.',
      defaultFormUrl: null
    }
  ],

  cxDimensions: [
    { name: 'Access & Convenience', slug: 'access-convenience' },
    { name: 'Digital Experience', slug: 'digital-experience' },
    { name: 'Physical Service Experience', slug: 'physical-service' },
    { name: 'Customer Service', slug: 'customer-service' },
    { name: 'Speed & Efficiency', slug: 'speed-efficiency' },
    { name: 'Product / Service Value', slug: 'product-value' },
    { name: 'Trust & Security', slug: 'trust-security' },
    { name: 'Transparency', slug: 'transparency' },
    { name: 'Problem Resolution', slug: 'problem-resolution' },
    { name: 'Overall Experience', slug: 'overall-experience' }
  ]
};
