interface ISubMenu {
  label: string;
  path: string;
}

interface IFooterLinks {
  header: string;
  subMenu: ISubMenu[];
};

export const footerLinks: IFooterLinks[] = [
  {
    header: 'Events',
    subMenu: [
      {
        label: 'Community Events',
        path: '',
      },
      {
        label: 'Annual Events',
        path: '',
      },
    ],
  },
  {
    header: 'What’s on?',
    subMenu: [
      {
        label: 'Articles',
        path: '',
      },
      {
        label: 'Press Release',
        path: '',
      },
      {
        label: 'Thailand Game Changer (EN)',
        path: '',
      },
      {
        label: 'Tech Take Tech Podcaset (TH)',
        path: '',
      },
    ],
  },
  {
    header: 'Programs',
    subMenu: [
      {
        label: 'House Digital Academy',
        path: '',
      },
      {
        label: 'Startup Booster',
        path: '',
      },
      {
        label: 'Startup in Residence',
        path: '',
      },
      {
        label: 'Startup Garage',
        path: '',
      },
      {
        label: 'TDPKxKFIN',
        path: '',
      },
      {
        label: 'TDPKxPIM',
        path: '',
      },
      {
        label: 'TDG Sandbox',
        path: '',
      },
    ],
  },
  {
    header: 'Services',
    subMenu: [
      {
        label: 'VC Clinice',
        path: '',
      },
      {
        label: 'One Stop service for startups',
        path: '',
      },
      {
        label: 'Event Organizing Service',
        path: '',
      },
    ],
  },
  {
    header: 'Spaces',
    subMenu: [
      {
        label: 'Event Space',
        path: '',
      },
      {
        label: 'Meeting Room',
        path: '',
      },
      {
        label: 'Co-working Space',
        path: '',
      },
      {
        label: 'Open Lab',
        path: '',
      },
      {
        label: 'Open Space',
        path: '',
      },
      {
        label: 'Office Space',
        path: '',
      },
      {
        label: 'Book a Tour',
        path: '',
      },
    ],
  },
  {
    header: 'About',
    subMenu: [
      {
        label: 'About TDPK',
        path: '',
      },
      {
        label: 'Become our Partner',
        path: '',
      },
      {
        label: 'Directory',
        path: '',
      },
      {
        label: 'How to get there?',
        path: '',
      },
      {
        label: 'Retail Space',
        path: '',
      },
      {
        label: 'Contact us',
        path: '',
      },
      {
        label: 'Career',
        path: '',
      },
      {
        label: 'Internship',
        path: '',
      },
    ],
  },
];