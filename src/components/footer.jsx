export default function Footer() {
    return (

        <>

            <div className="w-full p-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
                {/* Left Section */}
                <table className="table-auto w-full max-w-md text-sm border-collapse mx-auto md:mx-12">
                    <tbody>
                        <tr>
                            <td className="pb-4 text-blue-700 font-bold text-sm pr-4">ADDRESS:</td>
                            <td className="pb-4">6391 Elgin St. Celina, Delaware 10299</td>
                        </tr>
                        <tr>
                            <td className="pb-4 text-blue-700 font-bold text-sm pr-4">PHONE:</td>
                            <td className="pb-4">+212 567 8910</td>
                        </tr>
                        <tr>
                            <td className="pb-4 text-blue-700 font-bold text-sm pr-4">Email:</td>
                            <td className="pb-4">hello@theblock.com</td>
                        </tr>
                        <tr>
                            <td>
                                <div className="text-xl font-bold flex items-center">
                                    <img
                                        src="icons/block-icon.png"
                                        alt="logo"
                                        className="w-10 h-10 mr-2 absolute"
                                    />
                                    <span className="text-blue-600">The Block</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Right Section */}
                <div className="w-full md:w-auto">
                    {/* Newsletter */}
                    <span className="pb-4 text-blue-700 font-bold text-sm block">Newsletter:</span>
                    <div className="flex flex-col sm:flex-row justify-between space-y-4 sm:space-y-0 sm:space-x-8 pb-4 px-0">
                        <input
                            type="email"
                            placeholder="Your email here"
                            className="border border-gray-400 p-1 pr-14 w-full sm:w-auto "
                        />
                        <button className="px-6 p-2 bg-orange-400 rounded-sm text-white hover:bg-orange-600 w-full sm:w-auto">
                            Subscribe
                        </button>
                    </div>

                    {/* Social */}
                    <span className="pt-8 pb-4 text-blue-700 font-bold text-sm block">Social:</span>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://facebook.com/" rel="noreferrer" target="_blank">
                            <img src="/icons/facebook.png" alt="fb" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ayoub-benanberg-4b94b2295/"
                            rel="noreferrer"
                            target="_blank"
                        >
                            <img src="/icons/in.png" alt="in" />
                        </a>
                        <a href="https://x.com/home" rel="noreferrer" target="_blank">
                            <img src="/icons/x.png" alt="x" />
                        </a>
                    </div>
                </div>
            </div>
            {/* footer */}

            <div className=" bg-blue-800 p-3 mt-20">
                <span className="text-white mx-[5%] text-sm">TheBlock Company © 2024. All Rights Reserved</span>
            </div>

        </>
    );
}
