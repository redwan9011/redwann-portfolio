


const Projects = () => {
    return (
        <div className="max-w-6xl mx-auto mt-16 ">
            <h1 className="font-bold text-4xl font-serif mb-4 text-center">Projects and Experience</h1>
            <p className="mb-10 px-44 text-center text-slate-600 font-semibold">In the dynamic realm of web development for the past six months, I have been on a continuous journey of self-discovery and growth and Passionate about continuous learning, I have  actively engaged in online courses, coding challenges, and personal projects to hone my skills. SO here is my some projects below.</p>
           <div className="grid grid-cols-3 gap-10">

           <div className="card card-compact  bg-base-100 shadow-lg hover:-translate-y-1  hover:duration-200 hover:delay-75 hover:ease-in hover:shadow-2xl">
                <figure><img src='https://i.ibb.co/WnvHjG3/fourm.png' className="h-44 w-full" alt="project image" /></figure>
                <div className="card-body ">
                    <h2 className="card-title">Project 1</h2>
                   <div className="grid grid-cols-2 gap-5">
                   <a target="_" href="https://github.com/redwan9011/forum-app-client.git" className="btn btn-outline ">Github Code</a>
                    <a target="_" href="https://forum-app-47d8b.web.app" className="btn btn-outline "> Live Demo</a>
                   </div>
                 
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-lg hover:-translate-y-1  hover:duration-200 hover:delay-75 hover:ease-in hover:shadow-2xl">
                <figure><img src='https://i.ibb.co/vVZ5h8c/brandshope.png' className="h-44 w-full" alt="project image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Project 2</h2>
                    <div className="grid grid-cols-2 gap-5">
                   <a target="_" href="https://github.com/redwan9011/redwan-brandshop-client.git" className="btn btn-outline ">Github Code</a>
                    <a target="_" href="https://redwan-brandshop.web.app/" className="btn btn-outline "> Live Demo</a>
                   </div>
                  
                </div>
            </div>
            <div className="card card-compact  bg-base-100 shadow-lg hover:-translate-y-1  hover:duration-200 hover:delay-75 hover:ease-in hover:shadow-2xl">
                <figure><img src='https://i.ibb.co/xhm5HHt/eveeeente.png' className="h-44 w-full" alt="project image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Project 3</h2>

                    <div className="grid grid-cols-2 gap-5">
                   <a target="_" href="https://github.com/redwan9011/redwan-event-management.git" className="btn btn-outline ">Github Code</a>
                    <a target="_" href="https://redwan-event-management.web.app/" className="btn btn-outline "> Live Demo</a>
                   </div>
                   
                </div>
            </div>

           </div>
        </div>
    );
};

export default Projects;