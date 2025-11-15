import './Hero.css'

const Hero = () => {
    return(
        <>
       <div className="homeContainer">
    
    <img
        className="homeBackgroundImage"
        src="../src/assets/Home/heroBg.png"
        alt="Garage"
    />

    {/* DRAGON + CAR WRAPPER */}
    <div className="heroVisual">
        <img 
            className="dragon"
            src="../src/assets/Home/dragon.svg"
            alt="Dragon"
        />

        <img 
            className="car"
            src="../src/assets/Home/car.svg"
            alt="Car"
        />
    </div>

    <div className="homeContent">
        <h1 className="homeTitle">UNSA RACING TEAM</h1>
        <p className="homeSubtitle">Engineering innovation. Driving Passion.</p>
        <br></br>
        <br></br>

        {/* jako los fix spacinga hahahaa */}
        <div className="HomeButtonWrapper">
        <button className="homeButton">Meet the Team</button>
        <img
            className="hoverImage"
            src="../src/assets/Home/hoverImage.png"
            alt="Team"
        />
        </div>
    </div>

</div>
</>
    );
}

export default Hero;