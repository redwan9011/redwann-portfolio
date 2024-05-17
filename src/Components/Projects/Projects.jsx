


const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto mt-10 mb-5 ">
            <h1 className="font-bold text-xl md:text-4xl font-serif mb-4 text-center">Projects and Experience</h1>
            <p className="mb-10 text-xs md:text-sm lg:text-base lg:px-44 text-center text-slate-600 font-semibold">In the dynamic realm of web development for the past 10 months, I have been on a continuous journey of self-discovery and growth and Passionate about continuous learning, I have  actively engaged in online courses, coding challenges, and personal projects to hone my skills. SO here is my some projects below.</p>
           <div className="grid md:grid-cols-3 gap-10">

           <div className="card card-compact  bg-base-100 shadow-lg hover:-translate-y-1  hover:duration-200 hover:delay-75 hover:ease-in hover:shadow-2xl">
                <figure><img src='https://i.ibb.co/30H9h2v/Capture.png' className="md:h-36 lg:h-44 w-full" alt="project image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Project 1</h2>
                    <div className="grid lg:grid-cols-2 gap-2 lg:gap-5">
                   <a target="_" href="https://github.com/alpha9011/easyRecruit-client.git" className="btn btn-outline ">Github Code</a>
                    <a target="_" href="https://brilliant-crisp-888e1f.netlify.app/" className="btn btn-outline "> Live Demo</a>
                   </div>
                  
                </div>
            </div>

           <div className="card card-compact  bg-base-100 shadow-lg hover:-translate-y-1  hover:duration-200 hover:delay-75 hover:ease-in hover:shadow-2xl">
                <figure><img src='https://i.ibb.co/WnvHjG3/fourm.png' className="md:h-36 lg:h-44 w-full" alt="project image" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Project 2</h2>
                   <div className="grid lg:grid-cols-2 gap-2 lg:gap-5">
                   <a target="_" href="https://github.com/redwan9011/forum-app-client.git" className="btn btn-outline ">Github Code</a>
                    <a target="_" href="https://forum-app-47d8b.web.app" className="btn btn-outline "> Live Demo</a>
                   </div>
                 
                </div>
            </div>

            <div className="card card-compact  bg-base-100 shadow-lg hover:-translate-y-1  hover:duration-200 hover:delay-75 hover:ease-in hover:shadow-2xl">
                <figure><img src='https://i.ibb.co/84tNw8s/Capturrrre.png' className="md:h-36 lg:h-44  w-full" alt="project image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Project 3</h2>

                    <div className="grid lg:grid-cols-2 gap-2 lg:gap-5">
                   <a target="_" href="https://github.com/redwan9011/student-assignment-client.git" className="btn btn-outline ">Github Code</a>
                    <a target="_" href="https://frabjous-tanuki-7553ea.netlify.app" className="btn btn-outline "> Live Demo</a>
                   </div>
                   
                </div>
            </div>
      

           </div>
        </div>
    );
};

export default Projects;