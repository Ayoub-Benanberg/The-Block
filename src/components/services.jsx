export default function Services() {
    return (
        <div id="services" className="mt-20 bg-slate-100 text-center py-10 px-4 md:px-0">
            <span className="text-2xl font-bold">Services</span>

            <div className="flex flex-col mt-8 font-semibold">

                {/* First Row of Service Cards */}
                <div className="flex flex-wrap justify-evenly">
                    <div className="w-full sm:w-1/2 md:w-[15%] bg-white p-6 text-center mb-8">
                        <div className="flex justify-center">
                            <img src="icons/house.png" alt="construction" className="py-4" />
                        </div>
                        <hr className="py-3 mx-auto w-14 border-t-2 border-gray-300" />
                        <span className="py-3 text-blue-700">Construction</span>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-[15%] bg-blue-800 text-white p-6 text-center mb-8">
                        <div className="flex justify-center">
                            <img src="icons/Renovation.png" alt="Renovation" className="py-4" />
                        </div>
                        <hr className="py-3 mx-auto w-14 border-t-2 border-gray-300" />
                        <span className="py-3">Renovation</span>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-[15%] bg-white p-6 text-center mb-8">
                        <div className="flex justify-center">
                            <img src="icons/Consultation.png" alt="Consultation" className="py-4" />
                        </div>
                        <hr className="py-3 mx-auto w-14 border-t-2 border-gray-300" />
                        <span className="py-3 text-blue-700">Consultation</span>
                    </div>
                </div>

                {/* Second Row of Service Cards */}
                <div className="flex flex-wrap justify-evenly py-8">
                    <div className="w-full sm:w-1/2 md:w-[15%] bg-blue-800 text-white p-6 text-center md:mb-0 mb-8">
                        <div className="flex justify-center">
                            <img src="icons/Repair-Services.png" alt="Repair Services" className="py-4" />
                        </div>
                        <hr className="py-3 mx-auto w-14 border-t-2 border-gray-300" />
                        <span className="py-3">Repair Services</span>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-[15%] bg-white p-6 text-center md:mb-0 mb-8">
                        <div className="flex justify-center">
                            <img src="icons/Architecture.png" alt="Architecture" className="py-4" />
                        </div>
                        <hr className="py-3 mx-auto w-14 border-t-2 border-gray-300" />
                        <span className="py-3 text-blue-700">Architecture</span>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-[15%] bg-blue-800 text-white p-6 text-center md:mb-0 mb-8">
                        <div className="flex justify-center">
                            <img src="icons/Electric.png" alt="Electric" className="py-4" />
                        </div>
                        <hr className="py-3 mx-auto w-14 border-t-2 border-gray-300" />
                        <span className="py-3">Electric</span>
                    </div>
                </div>

            </div>
        </div>
    )
}
