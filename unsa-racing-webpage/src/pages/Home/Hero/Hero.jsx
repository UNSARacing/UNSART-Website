import './Hero.css'

const Hero = () => {
    return (
        <div className="homeContainer">

            <img
                className="homeBackgroundImage"
                src="../src/assets/Home/vfsaa livery image.webp"
                alt="Garage"
            />
            
            <img
                className="homeForegroundImage"
                src="../src/assets/Home/vfsaa livery image transparent.webp"
                alt="Car Foreground"
            />

            {/* <div className="heroVisual">
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
            </div> */}

            <div className="homeContent">
                <h1 className="homeTitle">UNSA RACING TEAM</h1>
                <p className="homeSubtitle">Engineering innovation. Driving Passion.</p>

                {/* BUTTON */}
                <div className="HomeButtonWrapper">
                    <button className="homeButton">Meet the Team</button>
                </div>

                {/* OVO MORA BITI POSLIJE WRAPPERA */}
                <img
                    className="hoverImage"
                    src="../src/assets/Home/hoverImage.png"
                    alt="Team"
                />
            </div>

        </div>
    );
}

export default Hero;
