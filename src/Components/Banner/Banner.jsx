import image from '../../assets/1702274669682__3333_-removebg-preview (1).png'
import { FaLinkedin,FaGithub } from "react-icons/fa";
import pdf from '../../assets/questions (1).pdf'
const Banner = () => {
    return (
  <div className=''>
          <div className='max-w-5xl mx-auto mt-10'>
            <div className='flex  items-center'>

                <div className=' flex flex-col  gap-3 items-center   '>
                <img src={image} alt="redwan image" className='rounded-full ' />
               <div className='flex gap-3 '>
               <a className='text-3xl' href=""><FaLinkedin  /></a>
                <a  className='text-3xl' href=""> <FaGithub /></a>
               </div>
                </div>
                <div className='flex-1 text-center'>
                  <h3 className='text-slate-600 font-semibold text-lg'>  Hello, I am </h3>
                    <h1 className='font-serif font-extrabold text-blue-900 text-3xl my-2'>REDWAN ISLAM</h1>
                    <h1 className='font-semibold text-slate-600 text-2xl mb-3'>Frontend Developer</h1>
                    <p className='px-24 text-slate-500'> I am  a React enthusiast with 6 months of coding joy. I am on a mission to create awesome user interfaces that spark joy and engagement. Let us code cool stuff together!</p>
                   <div className='flex gap-5 items-center justify-center mt-5'>
                   <a href={pdf} download='redwan resume'> <button className="btn btn-outline rounded-l-3xl rounded-r-3xl">Download Resume</button></a>
                    <button className="btn  btn-neutral rounded-l-3xl rounded-r-3xl">Contact Info</button>
                   </div>
                </div>
            </div>
        </div>
  </div>
    );
};

export default Banner;