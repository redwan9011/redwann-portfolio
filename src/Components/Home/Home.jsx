
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";


const Home = () => {

  
    return (
        <div className="px-6 md:px-8 lg:px-0">
         

            <Banner></Banner>

            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact  ></Contact>
        </div>
    );
};

export default Home;