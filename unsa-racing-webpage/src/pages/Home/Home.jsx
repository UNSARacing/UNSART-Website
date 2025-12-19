import Hero from './Hero/Hero.jsx'
import Team from './Team/Team.jsx'
import HomeSocials from './HomeSocials/HomeSocials.jsx'
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
       <>
            <div style={{ position: 'relative', zIndex: 1 }}>
                <Hero />
            </div>
            <div className="home-content-section">
                <div style={{ position: 'relative', zIndex: 2 }}>
                    <Team />
                </div>
                <div style={{ position: 'relative', zIndex: 3 }}>
                    <HomeSocials />
                </div>
            </div>
       </>
    );
}

export default Home;
