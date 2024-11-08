export default function Hero() {
    return (
        <div className="relative w-full h-[70vh] bg-slate-400">
            {/* Hero Image */}
            <img
                src="imgs/skyscraper3.jpg"
                alt="hero"
                className="w-full h-[75vh] object-cover object-center overflow-x-hidden absolute"
            />

            {/* Centered Text */}
            <div className="relative md:w-1/2 w-full h-[70vh] flex items-center justify-center">
                <span className="md:w-[60%] w-full text-center md:text-start md:text-5xl text-3xl font-bold pb-6 md:leading-11">
                    Building things is our mission.
                </span>
            </div>

            {/* testimony */}
            <div className="absolute bottom-0 right-[50%] translate-x-1/2 md:right-0 md:translate-x-0 h-[28%] bg-[#3559C7] w-[60%] md:w-[23%] text-white flex flex-col justify-between">
                {/* Content */}
                <div className="w-full flex flex-col text-center md:px-10 px-4 pt-4">
                    <span className="font-semibold">Feature Projects</span>
                    <span className="py-3 font-light">The National University Of Architecture</span>
                </div>

                {/* Button Container */}
                <div className="w-full flex bg-slate-800">
                    <button className="w-1/2 border-r py-2"> ← Back</button>
                    <button className="w-1/2 md:py-0 py-2">Next → </button>
                </div>
            </div>


        </div>
    );
}
