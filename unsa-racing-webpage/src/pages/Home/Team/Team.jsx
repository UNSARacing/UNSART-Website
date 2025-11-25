import './Team.css';

const Team = () => {
  return (
    <>
      <div className="team-section">

        {/* Glavni horizontalni container – Lijevi | Linija | Desni */}
        <div className="section-row">

          {/* LIJEVI DIO — slika gore + tekst dole */}
          <div className="content-left">
            <div className="team-image-container">
              <img 
                src="../src/assets/Home/team-photo.jpg"
                alt="UNSA Racing Team"
                className="team-photo"
              />
            </div>

            <div className="team-text-container">
              <h2 className="team-title">THE TEAM</h2>
              <p>
                The UNSA Racing Team is a Formula Student team situated at the University of 
                Sarajevo. Founded in 2024, our team consists of passionate students driven by 
                a shared enthusiasm for motorsports and automotive innovation.
              </p>
              <p>
                Our involvement in the competition complements classroom learning by offering 
                students the opportunity to apply theoretical concepts in a real-world environment.
              </p>
              <button className="team-cta-button">About Formula Student</button>
            </div>
          </div>

          {/* SREDINA — isprekidana vertikalna linija */}
          <div className="vertical-dashed-line"></div>

          {/* DESNI DIO — tekst gore + slika dole */}
          <div className="content-right">
            <div className="info-content">
              <h2 className="info-title">WHAT IS FORMULA STUDENT?</h2>
              <p>
                Formula Student is an international engineering competition where students 
                design, build, and race a single-seat formula-style race car.
              </p>
              <p>
                Students learn design optimization, manufacturing, project management, testing,
                and technical presentations.
              </p>
              <button className="info-cta-button">Our Sponsors</button>
            </div>

            <div className="info-image-container">
              <img 
                src="../src/assets/Home/car-photo.png"
                alt="Formula Student Car"
                className="car-photo"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Team;
