
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-slate-500 text-white rounded">
        <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover"><Link to='/Projects'>Projects</Link></a>
          <a className="link link-hover"><Link to='/Skills'>Skills</Link></a>
          <a className="link link-hover"><Link to='/Education'>Education</Link></a>
         
          
          <a className="link link-hover"><Link to='/contact'>Contact</Link></a>
        </nav> 
        <nav>
          <div className="grid grid-flow-col gap-4">
          <a href="https://github.com/redwan9011" className="md:text-2xl"> <FaGithub /></a>
<a href="linkedin.com/in/md-redwan-islam-2403b32a4" className="md:text-2xl"> <FaLinkedin /></a>
<a href="" className="md:text-2xl"> <FaFacebook /></a>
          </div>
        </nav> 
        <aside>
          <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
        </aside>
      </footer>
    );
};

export default Footer;


