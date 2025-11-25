import Hero from './Hero/Hero.jsx'
import Team from './Team/Team.jsx'
import HomeSponsors from './HomeSponsors/HomeSponsors.jsx'

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
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Team />
            </div>
            <div style={{ position: 'relative', zIndex: 3 }}>
                <HomeSponsors />
            </div>
       </>
    );
}

export default Home;
