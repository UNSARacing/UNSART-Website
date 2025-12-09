// Utility to load markdown files
// Import all markdown files statically
import teamLaunch2024 from '../posts/team-launch-2024.md?raw';
import firstCarDesign from '../posts/first-car-design.md?raw';
import sponsorPartnership from '../posts/sponsor-partnership.md?raw';

const markdownFiles = {
  'team-launch-2024': teamLaunch2024,
  'first-car-design': firstCarDesign,
  'sponsor-partnership': sponsorPartnership,
};

export const getMarkdownContent = (slug) => {
  return markdownFiles[slug] || null;
};

