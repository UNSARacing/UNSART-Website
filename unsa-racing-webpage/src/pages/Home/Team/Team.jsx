import teamPhoto2 from '../../../assets/Home/team-photo2.webp'
import carPhoto from '../../../assets/Home/car-photo.png'
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
                src={teamPhoto2}
                alt="UNSA Racing Team"
                className="team-photo"
              />
            </div>

            <div className="team-text-container">
              <h2 className="title">THE TEAM</h2>
              <p>
                The UNSA Racing Team is a Formula Student team situated at the University of 
                Sarajevo. Founded in 2024, our team consists of passionate students driven by 
                a shared enthusiasm for motorsports and automotive innovation.
              </p>
              <p>
                Our involvement in the competition complements classroom learning by offering 
                students the opportunity to apply theoretical concepts in a real-world environment.
              </p>
            </div>
          </div>

          {/* SREDINA — isprekidana vertikalna linija */}
          <div className="vertical-dashed-line"></div>

          {/* DESNI DIO — tekst gore + slika dole */}
          <div className="content-right">
            <div className="info-content">
              <h2 className="title">WHAT IS FORMULA STUDENT?</h2>
              <p>
                Formula Student is an international engineering competition where students 
                design, build, and race a single-seat formula-style race car.
              </p>
              <p>
                Students learn design optimization, manufacturing, project management, testing,
                and technical presentations.
              </p>
            </div>

            <div className="info-image-container">
              <img 
                src={carPhoto}
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
