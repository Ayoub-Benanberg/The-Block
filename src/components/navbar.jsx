import React, { useState } from "react";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className="bg-white p-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-bold flex items-center">
                    <img src="icons/block-icon.png" alt="logo" className="w-11 absolute" />
                    <span className="text-blue-600">The Block</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-16 font-semibold text-lg">
                    <a href="#" className="">Home</a>
                    <a href="#" className="">About Us</a>
                    <a href="#" className="">Projects</a>
                    <a href="#" className="">Services</a>
                    <a href="#" className="text-orange-400">Contact Us</a>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
                    <img src="icons/menu-icon.png" alt="menu" className="w-6"/>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} font-semibold pt-5 bg-white`}>
                <a href="#" className="block py-2">Home</a>
                <a href="#" className="block py-2">About Us</a>
                <a href="#" className="block py-2">Projects</a>
                <a href="#" className="block py-2">Services</a>
                <a href="#" className="block py-2 text-orange-400">Contact Us</a>
            </div>
        </nav>
    );
};

export default Navbar;
