import './Sponsors.css';

const Sponsors = () => {
  const sponsors = [
    { 
      name: 'SolidWorks', 
      logo: '../src/assets/Sponsors/solidworks.svg',
      website: 'https://www.solidworks.com'
    },
    { 
      name: 'ANSYS', 
      logo: '../src/assets/Sponsors/ansys.png',
      website: 'https://www.ansys.com'
    },
    { 
      name: 'MATLAB', 
      logo: '../src/assets/Sponsors/matlab.png',
      website: 'https://www.mathworks.com'
    },
    { 
      name: 'Racing Arena', 
      logo: '../src/assets/Sponsors/racingarena.png',
      website: '#'
    }
  ];

  return (
    <div className="sponsors-page">
      <div className="sponsors-page-container">
        <h1 className="sponsors-page-title">Our Sponsors</h1>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <a 
              key={index} 
              href={sponsor.website}
              target={sponsor.website !== '#' ? "_blank" : undefined}
              rel={sponsor.website !== '#' ? "noopener noreferrer" : undefined}
              className="sponsor-logo"
            >
              <img src={sponsor.logo} alt={sponsor.name} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
