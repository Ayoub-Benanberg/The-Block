export default function Reputation() {
    return (
        <div className="w-full px-4 md:px-8 font-bold pt-16">
            <h1 className="text-gray-900 text-3xl text-center">Our reputation</h1>
            <div className="grid grid-cols-1 md:flex md:justify-around my-10 gap-6 md:gap-0">
                <div className="border-2 border-gray-300 w-full md:w-1/5 p-4 text-center md:text-left">
                    <img src="/icons/Vector.png" alt="vector" className="w-7 mx-auto md:mx-0" />
                    <span className="font-bold text-xl text-gray-700 block py-3">Best Services</span>
                    <span className="block text-gray-400 font-normal text-sm pb-2">Nullam senectus porttitor in eget. Eget rutrum leo interdum.</span>
                </div>

                <div className="border-2 border-gray-300 w-full md:w-1/5 p-4 text-center md:text-left">
                    <img src="/icons/Vector.png" alt="vector" className="w-7 mx-auto md:mx-0" />
                    <span className="font-bold text-xl text-gray-700 block py-3">Best Teams</span>
                    <span className="block text-gray-400 font-normal text-sm pb-2">Cursus semper tellus volutpat aliquet lacus.</span>
                </div>

                <div className="border-2 border-gray-300 w-full md:w-1/5 p-4 text-center md:text-left">
                    <img src="/icons/Vector2.png" alt="vector" className="w-7 mx-auto md:mx-0" />
                    <span className="font-bold text-xl text-gray-700 block py-3">Best Designs</span>
                    <span className="block text-gray-400 font-normal text-sm pb-2">Ultricies at ipsum nunc, tristique nam lectus.</span>
                </div>
            </div>
        </div>
    );
}
