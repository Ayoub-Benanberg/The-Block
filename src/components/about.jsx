export default function AboutUs() {
    return (

        <div id="about" className="mt-20 flex flex-wrap justify-center items-center">

            <img  src="/imgs/about.png" alt="about" className="md:w-[45%] w-[80%]" />

            <div className="p-7 bg-blue-800 text-white md:w-[25%] w-[75%]">
                <span className="font-bold text-2xl block">About us</span>
                <span className="block py-3 text-sm font-light">For more than 30 years we have been delivering world-class construction and we’ve built many lasting relationships along the way. </span>
                <span className="block text-sm font-light">We’ve matured into an industry leader and trusted resource for those seeking quality, innovation and reliability when building in the U.S.</span>
                <button className="bg-white p-1.5 px-4 mt-8 text-blue-800 rounded-sm font-semibold hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105">
                    More on Our History
                </button>
            </div>
        </div>

    )
}