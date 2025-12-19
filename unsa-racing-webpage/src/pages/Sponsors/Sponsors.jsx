import './Sponsors.css';

import sponsorLinks from '../../assets/Sponsors/sponsor-links.json';

const images = import.meta.glob('../../assets/Sponsors/*.webp', { eager: true });

const Sponsors = () => {
  const sponsorLogos = Object.entries(images).map(([path, module]) => {
    // Extract filename without extension (e.g., "solidworks")
    const filename = path.split('/').pop().replace('.webp', '');
    
    return {
      path: module.default,
      name: filename.replace(/-/g, ' '),
      link: sponsorLinks[filename] || '#'
    };
  });

  return (
    <div className="sps-page">
      <div className="sps-container">
        <h1 className="sps-title">Our Sponsors</h1>
        <div className="sps-grid">
          {sponsorLogos.map((sponsor, index) => (
            <a 
              key={index} 
              href={sponsor.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sps-item"
            >
              <img src={sponsor.path} alt={sponsor.name} className="sps-img" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
