import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
           
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact ></Contact>
        </div>
    );
};

export default Home;