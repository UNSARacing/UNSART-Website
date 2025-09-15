import './Home.css'

const Home = () => {

    const teamInfoParagraph = `The UNSA Racing Team is a formula student team situated at the University of Sarajevo.
Founded in 2024, our team consists of passionate students driven by a shared enthusiasm for motorsports and automotive innovation.
Our participation in the Formula Student competition marks a significant milestone in our journey to apply theoretical knowledge to real-world engineering challenges.
The student team is closely aligned with the academic goals of the University.
Our involvement in the competition complements classroom learning by offering students the opportunity to apply theoretical concepts in a real-world context.
Through participation in Formula Student, students enhance their problem-solving abilities, critical thinking skills, and technical expertise.`;

    const fsInfoParagraph = `The UNSA Racing Team is a formula student team situated at the University of Sarajevo.
Founded in 2024, our team consists of passionate students driven by a shared enthusiasm for motorsports and automotive innovation.
Our participation in the Formula Student competition marks a significant milestone in our journey to apply theoretical knowledge to real-world engineering challenges.
The student team is closely aligned with the academic goals of the University.
Our involvement in the competition complements classroom learning by offering students the opportunity to apply theoretical concepts in a real-world context.
Through participation in Formula Student, students enhance their problem-solving abilities, critical thinking skills, and technical expertise.`;

    return (
        <div className="homeContainer">
            <img
                className="homeBackgroundImage"
                src="../src/assets/Home/garage.svg"
                alt="Garage"
            />

            {/* KONTEJNER ZA DRAGON I CAR */}
            <div className="homeLogoGroup">
                <img 
                    className="homeDragonLogo"
                    src="../src/assets/Home/dragon.svg"
                    alt="Dragon Logo"
                />
                <img 
                    className="homeCarImage"
                    src="../src/assets/Home/car.svg"
                    alt="Car"
                />
            </div>

            <div className="homeContent">
                <h1 className="homeTitle">UNSA Racing Team</h1>
                <p className="homeSubtitle">Engineering innovation. Driving Passion.</p>
                <a href="#learn-more" className="homeButton">Meet the Team</a>
            </div>

            <div className="infoContainer">
                <img
                    className="teamBackgroundImage"
                    src="../src/assets/Home/garage.svg"
                    alt="Garage"
                />

                <div className="teamInfo"> 
                    <img 
                        className="teamPhoto"
                        src=""
                        alt="Team"
                    />
                    <div className="teamInfoText">
                        <h2 className="teamInfoTitle">THE TEAM</h2>
                        <p className="teamInfoParagraph">
                            {teamInfoParagraph}
                        </p>
                        <button>
                            About formula student
                        </button>
                    </div>
                </div>

                <div className="fsInfo">
                    <div className="fsInfoText">
                        <h2 className="fsInfoTitle">WHAT IS FORMULA STUDENT?</h2>
                        <p className="fsInfoParagraph">
                            {fsInfoParagraph}
                        </p>
                        <button>
                            Our sponsors
                        </button>
                    </div>

                    <img 
                        className="fsPhoto"
                        src=""
                        alt="Formula Student"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
