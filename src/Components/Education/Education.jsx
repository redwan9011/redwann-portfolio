

const Education = () => {
    return (
        <div className="max-w-6xl mx-auto mt-16  mb-14">
            <h1 className="text-center font-serif font-bold text-2xl md:text-3xl lg:text-4xl mb-2">EDUCATION</h1>
            <p className="text-center text-xs md:text-sm lg:text-base text-slate-600 mb-2 md:px-40 lg:px-80">My education has been a journey of self-discovery and growth.  My educational details are as follows.</p>
           <div className="flex flex-col md:flex-row gap-2 lg:gap-5 justify-between text-center mt-10">

            <div className="border border-slate-500 rounded-xl px-6 lg:px-16 py-4 space-y-1 bg-white hover:shadow-2xl ">
                <h1 className="font-bold md:text-2xl">S.S.C</h1>
                <h4 className="font-semibold text-sm lg:text-md text-slate-700">OTRA HIGH SCHOOL</h4>
                <h6 className="font-semibold text-slate-800 text-sm">Otra, Barishal</h6>
                <p className="font-semibold text-slate-800">Group: Science</p>
                <p className="text-sm font-semibold">Grade: GPA 4.89</p>
            </div>
           <div className="border border-slate-500 rounded-xl px-2 lg:px-14 py-4 space-y-1 bg-white hover:shadow-2xl ">
                <h1 className="font-bold md:text-2xl">I.Sc</h1>
                <h4 className="font-semibold text-sm lg:text-md text-slate-700"> TAHERUDDIN ISLAMIA COLLEGE</h4>
                <h6 className="font-semibold text-slate-800 text-sm">Otra , Barishal</h6>
                <p className="font-semibold text-slate-800">Group: Science</p>
                <p className="text-sm font-semibold">Grade: GPA 5.00</p>
            </div>
            <div className="border border-slate-500 rounded-xl px-6 lg:px-16 py-4 space-y-1 bg-white hover:shadow-2xl ">
                <h1 className="font-bold md:text-2xl">B.A</h1>
                <h4 className="font-semibold text-sm lg:text-md text-slate-700">GOVT TOLARAM COLLEGE</h4>
                <h6 className="font-semibold text-slate-800 text-sm">Naraynganj, Dhaka</h6>
                <p className="font-semibold text-slate-800">20-21 Batch</p>
                <p className="text-sm font-semibold">Department of Bangla</p>
            </div>
           </div>
        </div>
    );
};

export default Education;