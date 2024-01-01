import image from '../../assets/1702274669682__3333_-removebg-preview (1).png'
import { FaLinkedin,FaGithub, FaFacebook } from "react-icons/fa";
import pdf from '../../assets/Resume.pdf'
const Banner = () => {
    return (
  <div className=''>
          <div className='max-w-5xl mx-auto mt-4 lg:mt-10'>
            <div className=' flex flex-col md:flex-row gap-5 items-center'>

                <div className=' flex flex-col   gap-3 items-center   '>
                <img src={image} alt="redwan image" className='rounded-full w-36 md:w-52 lg:w-full' />
               <div className='flex gap-3 '>
               <a className='text-3xl'target='_' href="https://www.facebook.com/rayhan.islam.8"><FaFacebook  /></a>
               <a className='text-3xl' target='_' href="https://www.linkedin.com/in/md-redwan-islam-2403b32a4"><FaLinkedin  /></a>
                <a  className='text-3xl' target='_' href="https://github.com/redwan9011"> <FaGithub /></a>
               </div>
                </div>
                <div className='flex-1 text-center'>
                  <h3 className='text-slate-600 font-semibold text-md md:text-lg'>  Hello, I am </h3>
                    <h1 className='font-serif font-extrabold text-blue-900 lg:text-3xl md:my-2'>REDWAN ISLAM</h1>
                    <h1 className='font-semibold text-slate-600 text-lg md:md:text-2xl mb-1 md:mb-3'>Frontend Developer</h1>
                    <p className='md:px-16 lg:px-24 text-xs md:text-base text-slate-500'> I am  a React enthusiast with 6 months of coding joy. I am on a mission to create awesome user interfaces that spark joy and engagement. Let us code cool stuff together!</p>
                   <div className='flex gap-5 items-center justify-center mt-5'>
                   <a href={pdf} download='redwan resume'> <button className="btn btn-outline rounded-l-3xl rounded-r-3xl">Download Resume</button></a>
                   
                   </div>
                </div>
            </div>
        </div>
  </div>
    );
};

export default Banner;