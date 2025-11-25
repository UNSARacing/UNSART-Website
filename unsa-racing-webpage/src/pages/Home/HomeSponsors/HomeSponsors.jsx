import './HomeSponsors.css';

const HomeSponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="sponsors-container">
        <h2 className="sponsors-title">Our Sponsors</h2>
        
        <div className="sponsors-logos">
          <img src="../src/assets/Sponsors/solidworks.svg" alt="SolidWorks" className="sponsor-logo" />
          <img src="../src/assets/Sponsors/ansys.png" alt="Ansys" className="sponsor-logo" />
          <img src="../src/assets/Sponsors/matlab.png" alt="MathWorks" className="sponsor-logo" />
          <img src="../src/assets/Sponsors/racingarena.png" alt="Racing" className="sponsor-logo" />
        </div>

        <div className="sponsors-cta">
          <p className="sponsors-text">
            To learn how to support this project click here:
          </p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSponsors;