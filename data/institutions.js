const INSTITUTIONS = {
  banking: [
    { id: 'BANK_01', name: 'Absa Bank Ghana Limited', slug: 'absa-bank-ghana-limited', logoPath: '/assets/institutions/absa-bank-ghana-limited/logo.png', heroPath: '/assets/institutions/absa-bank-ghana-limited/hero.webp', brand: { primary: '#c4002f', accent: '#f26b7a', dark: '#4b0012' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_02', name: 'Access Bank (Ghana) PLC', slug: 'access-bank-ghana-plc', logoPath: '/assets/institutions/access-bank-ghana-plc/logo.png', heroPath: '/assets/institutions/access-bank-ghana-plc/hero.webp', brand: { primary: '#003478', accent: '#f58220', dark: '#061a3b' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_03', name: 'Agricultural Development Bank (ADB) PLC', slug: 'agricultural-development-bank-adb-plc', logoPath: '/assets/institutions/agricultural-development-bank-adb-plc/logo.png', heroPath: '/assets/institutions/agricultural-development-bank-adb-plc/hero.webp', brand: { primary: '#00843d', accent: '#8cc63f', dark: '#04351d' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_04', name: 'Bank of Africa Ghana Limited', slug: 'bank-of-africa-ghana-limited', logoPath: '/assets/institutions/bank-of-africa-ghana-limited/logo.png', heroPath: '/assets/institutions/bank-of-africa-ghana-limited/hero.webp', brand: { primary: '#006b4f', accent: '#91c848', dark: '#00352d' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_05', name: 'CalBank PLC', slug: 'calbank-plc', logoPath: '/assets/institutions/calbank-plc/logo.png', heroPath: '/assets/institutions/calbank-plc/hero.webp', brand: { primary: '#f6a800', accent: '#ffcd45', dark: '#3d3d3f' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_06', name: 'Consolidated Bank Ghana (CBG) Limited', slug: 'consolidated-bank-ghana-cbg-limited', logoPath: '/assets/institutions/consolidated-bank-ghana-cbg-limited/logo.png', heroPath: '/assets/institutions/consolidated-bank-ghana-cbg-limited/hero.webp', brand: { primary: '#d71920', accent: '#ff6b6b', dark: '#3b0b0c' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_07', name: 'Ecobank Ghana PLC', slug: 'ecobank-ghana-plc', logoPath: '/assets/institutions/ecobank-ghana-plc/logo.png', heroPath: '/assets/institutions/ecobank-ghana-plc/hero.webp', brand: { primary: '#0050a4', accent: '#4ea3ff', dark: '#082640' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_08', name: 'FBNBank (Ghana) Limited', slug: 'fbnbank-ghana-limited', logoPath: '/assets/institutions/fbnbank-ghana-limited/logo.png', heroPath: '/assets/institutions/fbnbank-ghana-limited/hero.webp', brand: { primary: '#008f95', accent: '#f2a900', dark: '#063a3d' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_09', name: 'Fidelity Bank Ghana Limited', slug: 'fidelity-bank-ghana-limited', logoPath: '/assets/institutions/fidelity-bank-ghana-limited/logo.png', heroPath: '/assets/institutions/fidelity-bank-ghana-limited/hero.webp', brand: { primary: '#f58220', accent: '#8a8c8e', dark: '#3e342c' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_10', name: 'First Atlantic Bank Limited', slug: 'first-atlantic-bank-limited', logoPath: '/assets/institutions/first-atlantic-bank-limited/logo.png', heroPath: '/assets/institutions/first-atlantic-bank-limited/hero.webp', brand: { primary: '#6f1d77', accent: '#b03a8a', dark: '#29102f' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_11', name: 'First National Bank (Ghana) Limited', slug: 'first-national-bank-ghana-limited', logoPath: '/assets/institutions/first-national-bank-ghana-limited/logo.png', heroPath: '/assets/institutions/first-national-bank-ghana-limited/hero.webp', brand: { primary: '#007a7a', accent: '#f2a900', dark: '#063b3c' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_12', name: 'GCB Bank PLC', slug: 'gcb-bank-plc', logoPath: '/assets/institutions/gcb-bank-plc/logo.png', heroPath: '/assets/institutions/gcb-bank-plc/hero.webp', brand: { primary: '#f2a900', accent: '#111111', dark: '#2f2606' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_13', name: 'Guaranty Trust Bank (Ghana) Limited', slug: 'guaranty-trust-bank-ghana-limited', logoPath: '/assets/institutions/guaranty-trust-bank-ghana-limited/logo.png', heroPath: '/assets/institutions/guaranty-trust-bank-ghana-limited/hero.webp', brand: { primary: '#f37021', accent: '#ffffff', dark: '#3a1a06' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_14', name: 'National Investment Bank (NIB) Limited', slug: 'national-investment-bank-nib-limited', logoPath: '/assets/institutions/national-investment-bank-nib-limited/logo.png', heroPath: '/assets/institutions/national-investment-bank-nib-limited/hero.webp', brand: { primary: '#002f6c', accent: '#d6a329', dark: '#061a33' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_15', name: 'OmniBSIC Bank Ghana Limited', slug: 'omnibsic-bank-ghana-limited', logoPath: '/assets/institutions/omnibsic-bank-ghana-limited/logo.png', heroPath: '/assets/institutions/omnibsic-bank-ghana-limited/hero.webp', brand: { primary: '#004b93', accent: '#65a443', dark: '#062a4f' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_16', name: 'Prudential Bank Limited', slug: 'prudential-bank-limited', logoPath: '/assets/institutions/prudential-bank-limited/logo.png', heroPath: '/assets/institutions/prudential-bank-limited/hero.webp', brand: { primary: '#005baa', accent: '#c99700', dark: '#062a4f' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_17', name: 'Republic Bank (Ghana) PLC', slug: 'republic-bank-ghana-plc', logoPath: '/assets/institutions/republic-bank-ghana-plc/logo.png', heroPath: '/assets/institutions/republic-bank-ghana-plc/hero.webp', brand: { primary: '#0085ca', accent: '#0a4f80', dark: '#06273d' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_18', name: 'Societe Generale Ghana PLC', slug: 'societe-generale-ghana-plc', logoPath: '/assets/institutions/societe-generale-ghana-plc/logo.png', heroPath: '/assets/institutions/societe-generale-ghana-plc/hero.webp', brand: { primary: '#e30613', accent: '#111111', dark: '#340808' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_19', name: 'Stanbic Bank Ghana Limited', slug: 'stanbic-bank-ghana-limited', logoPath: '/assets/institutions/stanbic-bank-ghana-limited/logo.png', heroPath: '/assets/institutions/stanbic-bank-ghana-limited/hero.webp', brand: { primary: '#005bac', accent: '#7cb7e6', dark: '#062747' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_20', name: 'Standard Chartered Bank Ghana PLC', slug: 'standard-chartered-bank-ghana-plc', logoPath: '/assets/institutions/standard-chartered-bank-ghana-plc/logo.png', heroPath: '/assets/institutions/standard-chartered-bank-ghana-plc/hero.webp', brand: { primary: '#0072ce', accent: '#00a859', dark: '#072d4c' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_21', name: 'United Bank for Africa (UBA) Ghana Limited', slug: 'united-bank-for-africa-uba-ghana-limited', logoPath: '/assets/institutions/united-bank-for-africa-uba-ghana-limited/logo.png', heroPath: '/assets/institutions/united-bank-for-africa-uba-ghana-limited/hero.webp', brand: { primary: '#e30613', accent: '#f15a24', dark: '#3a0808' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_22', name: 'Universal Merchant Bank (UMB) Limited', slug: 'universal-merchant-bank-umb-limited', logoPath: '/assets/institutions/universal-merchant-bank-umb-limited/logo.png', heroPath: '/assets/institutions/universal-merchant-bank-umb-limited/hero.webp', brand: { primary: '#f4b400', accent: '#6d4c2f', dark: '#3b2a07' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' },
    { id: 'BANK_23', name: 'Zenith Bank (Ghana) Limited', slug: 'zenith-bank-ghana-limited', logoPath: '/assets/institutions/zenith-bank-ghana-limited/logo.png', heroPath: '/assets/institutions/zenith-bank-ghana-limited/hero.webp', brand: { primary: '#d71920', accent: '#6d6e71', dark: '#3b0b0c' }, formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBiDy-eEmFO8kZ1TrAWGOkfcR8F6BCJeDD5dMT_CBvLP331A/viewform' }
  ],

  utilities: [
    { id: 'UTIL_01', name: 'Electricity Company of Ghana (ECG)', slug: 'electricity-company-of-ghana', logoPath: '/assets/providers/utilities/electricity-company-of-ghana/logo.png', formUrl: null },
    { id: 'UTIL_02', name: 'Ghana Water Limited', slug: 'ghana-water-limited', logoPath: '/assets/providers/utilities/ghana-water-limited/logo.png', formUrl: null },
    { id: 'UTIL_03', name: 'Northern Electricity Distribution Company (NEDCo)', slug: 'nedco', logoPath: '/assets/providers/utilities/nedco/logo.png', formUrl: null },
    { id: 'UTIL_04', name: 'Public Utilities Regulatory Commission (PURC)', slug: 'purc', logoPath: '/assets/providers/utilities/purc/logo.png', formUrl: null },
    { id: 'UTIL_05', name: 'Ghana Grid Company (GRIDCo)', slug: 'gridco', logoPath: '/assets/providers/utilities/gridco/logo.png', formUrl: null },
    { id: 'UTIL_06', name: 'Volta River Authority (VRA)', slug: 'vra', logoPath: '/assets/providers/utilities/vra/logo.png', formUrl: null },
    { id: 'UTIL_07', name: 'Bui Power Authority', slug: 'bui-power-authority', logoPath: '/assets/providers/utilities/bui-power-authority/logo.png', formUrl: null },
    { id: 'UTIL_08', name: 'Community Water and Sanitation Agency (CWSA)', slug: 'cwsa', logoPath: '/assets/providers/utilities/cwsa/logo.png', formUrl: null }
  ],

  'fuel-stations': [
    { id: 'FUEL_01', name: 'GOIL PLC', slug: 'goil', logoPath: '/assets/providers/fuel-stations/goil/logo.png', formUrl: null },
    { id: 'FUEL_02', name: 'TotalEnergies Marketing Ghana', slug: 'totalenergies-ghana', logoPath: '/assets/providers/fuel-stations/totalenergies-ghana/logo.png', formUrl: null },
    { id: 'FUEL_03', name: 'Vivo Energy Ghana / Shell', slug: 'vivo-energy-shell', logoPath: '/assets/providers/fuel-stations/vivo-energy-shell/logo.png', formUrl: null },
    { id: 'FUEL_04', name: 'Puma Energy Ghana', slug: 'puma-energy-ghana', logoPath: '/assets/providers/fuel-stations/puma-energy-ghana/logo.png', formUrl: null },
    { id: 'FUEL_05', name: 'Star Oil', slug: 'star-oil', logoPath: '/assets/providers/fuel-stations/star-oil/logo.png', formUrl: null },
    { id: 'FUEL_06', name: 'Zen Petroleum', slug: 'zen-petroleum', logoPath: '/assets/providers/fuel-stations/zen-petroleum/logo.png', formUrl: null },
    { id: 'FUEL_07', name: 'Engen Ghana', slug: 'engen-ghana', logoPath: '/assets/providers/fuel-stations/engen-ghana/logo.png', formUrl: null },
    { id: 'FUEL_08', name: 'Allied Oil', slug: 'allied-oil', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_09', name: 'Petrosol Ghana', slug: 'petrosol-ghana', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_10', name: 'Frimps Oil', slug: 'frimps-oil', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_11', name: 'Top Oil', slug: 'top-oil', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_12', name: 'SO Energy Ghana', slug: 'so-energy-ghana', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_13', name: 'Tel Energy', slug: 'tel-energy', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_14', name: 'Radiance Petroleum', slug: 'radiance-petroleum', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_15', name: 'Benab Oil', slug: 'benab-oil', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_16', name: 'Pacific Oil', slug: 'pacific-oil', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_17', name: 'Glory Oil', slug: 'glory-oil', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_18', name: 'Dukes Petroleum', slug: 'dukes-petroleum', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_19', name: 'Cash Oil', slug: 'cash-oil', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'FUEL_20', name: 'Gaso Petroleum', slug: 'gaso-petroleum', logoPath: null, formUrl: null, assetStatus: 'source-blocked' }
  ],

  education: [
    { id: 'EDU_01', name: 'Ghana Education Service', slug: 'ghana-education-service', logoPath: null, formUrl: null },
    { id: 'EDU_02', name: 'University of Ghana', slug: 'university-of-ghana', logoPath: null, formUrl: null },
    { id: 'EDU_03', name: 'Kwame Nkrumah University of Science and Technology', slug: 'knust', logoPath: null, formUrl: null },
    { id: 'EDU_04', name: 'University of Cape Coast', slug: 'university-of-cape-coast', logoPath: null, formUrl: null },
    { id: 'EDU_05', name: 'University for Development Studies', slug: 'university-for-development-studies', logoPath: null, formUrl: null },
    { id: 'EDU_06', name: 'University of Education, Winneba', slug: 'university-of-education-winneba', logoPath: null, formUrl: null },
    { id: 'EDU_07', name: 'Ghana TVET Service', slug: 'ghana-tvet-service', logoPath: null, formUrl: null },
    { id: 'EDU_08', name: 'National Schools Inspectorate Authority', slug: 'national-schools-inspectorate-authority', logoPath: null, formUrl: null }
  ],

  'public-service': [
    { id: 'PUBLIC_01', name: 'District Assemblies', slug: 'district-assemblies', logoPath: null, formUrl: null },
    { id: 'PUBLIC_02', name: 'Judicial Service of Ghana', slug: 'judicial-service-of-ghana', logoPath: null, formUrl: null },
    { id: 'PUBLIC_03', name: 'Office of the Registrar of Companies', slug: 'office-of-the-registrar-of-companies', logoPath: null, formUrl: null },
    { id: 'PUBLIC_04', name: 'Ghana Police Service', slug: 'ghana-police-service', logoPath: null, formUrl: null },
    { id: 'PUBLIC_05', name: 'Ghana Revenue Authority', slug: 'ghana-revenue-authority', logoPath: null, formUrl: null },
    { id: 'PUBLIC_06', name: 'Driver and Vehicle Licensing Authority', slug: 'dvla', logoPath: null, formUrl: null },
    { id: 'PUBLIC_07', name: 'Passport Office', slug: 'passport-office', logoPath: null, formUrl: null },
    { id: 'PUBLIC_08', name: 'National Identification Authority', slug: 'national-identification-authority', logoPath: null, formUrl: null },
    { id: 'PUBLIC_09', name: 'Births and Deaths Registry', slug: 'births-and-deaths-registry', logoPath: null, formUrl: null },
    { id: 'PUBLIC_10', name: 'Lands Commission', slug: 'lands-commission', logoPath: null, formUrl: null },
    { id: 'PUBLIC_11', name: 'Ghana Immigration Service', slug: 'ghana-immigration-service', logoPath: null, formUrl: null },
    { id: 'PUBLIC_12', name: 'Social Security and National Insurance Trust', slug: 'ssnit', logoPath: null, formUrl: null },
    { id: 'PUBLIC_13', name: 'National Health Insurance Authority', slug: 'nhia', logoPath: null, formUrl: null },
    { id: 'PUBLIC_14', name: 'Ghana Education Service', slug: 'ghana-education-service', logoPath: null, formUrl: null },
    { id: 'PUBLIC_15', name: 'Ghana Health Service', slug: 'ghana-health-service', logoPath: null, formUrl: null },
    { id: 'PUBLIC_16', name: 'Food and Drugs Authority Ghana', slug: 'food-and-drugs-authority-ghana', logoPath: null, formUrl: null },
    { id: 'PUBLIC_17', name: 'Ghana Standards Authority', slug: 'ghana-standards-authority', logoPath: null, formUrl: null },
    { id: 'PUBLIC_18', name: 'Environmental Protection Agency', slug: 'environmental-protection-agency', logoPath: null, formUrl: null },
    { id: 'PUBLIC_19', name: 'Electoral Commission of Ghana', slug: 'electoral-commission-of-ghana', logoPath: null, formUrl: null },
    { id: 'PUBLIC_20', name: 'CHRAJ', slug: 'chraj', logoPath: null, formUrl: null },
    { id: 'PUBLIC_21', name: 'Ghana Ports and Harbours Authority', slug: 'ghana-ports-and-harbours-authority', logoPath: null, formUrl: null },
    { id: 'PUBLIC_22', name: 'Ghana Post', slug: 'ghana-post', logoPath: null, formUrl: null },
    { id: 'PUBLIC_23', name: 'Rent Control Department', slug: 'rent-control-department', logoPath: null, formUrl: null },
    { id: 'PUBLIC_24', name: 'National Service Authority', slug: 'national-service-authority', logoPath: null, formUrl: null }
  ],

  telecommunications: [
    { id: 'TELCO_01', name: 'MTN Ghana', slug: 'mtn-ghana', logoPath: '/assets/providers/telecommunications/mtn-ghana/logo.png', formUrl: null },
    { id: 'TELCO_02', name: 'Telecel Ghana', slug: 'telecel-ghana', logoPath: '/assets/providers/telecommunications/telecel-ghana/logo.png', formUrl: null },
    { id: 'TELCO_03', name: 'AirtelTigo Ghana', slug: 'airteltigo-ghana', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'TELCO_04', name: 'National Communications Authority', slug: 'nca', logoPath: '/assets/providers/telecommunications/nca/logo.png', formUrl: null },
    { id: 'TELCO_05', name: 'Ghana Investment Fund for Electronic Communications', slug: 'gifec', logoPath: '/assets/providers/telecommunications/gifec/logo.png', formUrl: null },
    { id: 'TELCO_06', name: 'Surfline', slug: 'surfline', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'TELCO_07', name: 'Busy Internet', slug: 'busy-internet', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'TELCO_08', name: 'Vodafone Broadband Legacy Services', slug: 'vodafone-broadband-legacy', logoPath: null, formUrl: null, assetStatus: 'source-blocked' }
  ],

  insurance: [
    { id: 'INS_01', name: 'National Insurance Commission', slug: 'nic', logoPath: '/assets/providers/insurance/nic/logo.png', formUrl: null },
    { id: 'INS_02', name: 'Enterprise Insurance', slug: 'enterprise-insurance', logoPath: '/assets/providers/insurance/enterprise-insurance/logo.png', formUrl: null },
    { id: 'INS_03', name: 'Hollard Ghana', slug: 'hollard-ghana', logoPath: '/assets/providers/insurance/hollard-ghana/logo.png', formUrl: null },
    { id: 'INS_04', name: 'SIC Insurance', slug: 'sic-insurance', logoPath: '/assets/providers/insurance/sic-insurance/logo.png', formUrl: null },
    { id: 'INS_05', name: 'Star Assurance', slug: 'star-assurance', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'INS_06', name: 'Glico General', slug: 'glico-general', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'INS_07', name: 'Vanguard Assurance', slug: 'vanguard-assurance', logoPath: '/assets/providers/insurance/vanguard-assurance/logo.png', formUrl: null },
    { id: 'INS_08', name: 'Prudential Life Ghana', slug: 'prudential-life-ghana', logoPath: null, formUrl: null, assetStatus: 'source-blocked' }
  ],

  healthcare: [
    { id: 'HEALTH_01', name: 'Ghana Health Service', slug: 'ghana-health-service', logoPath: null, formUrl: null },
    { id: 'HEALTH_02', name: 'Korle Bu Teaching Hospital', slug: 'korle-bu', logoPath: '/assets/providers/healthcare/korle-bu/logo.png', formUrl: null },
    { id: 'HEALTH_03', name: 'Komfo Anokye Teaching Hospital', slug: 'komfo-anokye', logoPath: '/assets/providers/healthcare/komfo-anokye/logo.png', formUrl: null },
    { id: 'HEALTH_04', name: '37 Military Hospital', slug: '37-military-hospital', logoPath: null, formUrl: null, assetStatus: 'source-blocked' },
    { id: 'HEALTH_05', name: 'Greater Accra Regional Hospital (Ridge)', slug: 'ridge-hospital', logoPath: '/assets/providers/healthcare/ridge-hospital/logo.png', formUrl: null },
    { id: 'HEALTH_06', name: 'National Health Insurance Authority', slug: 'nhia-healthcare', logoPath: '/assets/providers/healthcare/nhia-healthcare/logo.png', formUrl: null },
    { id: 'HEALTH_07', name: 'Food and Drugs Authority Ghana', slug: 'fda-healthcare', logoPath: '/assets/providers/healthcare/fda-healthcare/logo.png', formUrl: null },
    { id: 'HEALTH_08', name: 'Pharmacy Council Ghana', slug: 'pharmacy-council', logoPath: '/assets/providers/healthcare/pharmacy-council/logo.png', formUrl: null }
  ]
};

function getInstitutionBySector(sectorSlug) {
  return INSTITUTIONS[sectorSlug] || [];
}

function getInstitutionBySlug(sectorSlug, institutionSlug) {
  const list = getInstitutionBySector(sectorSlug);
  return list.find(inst => inst.slug === institutionSlug);
}
