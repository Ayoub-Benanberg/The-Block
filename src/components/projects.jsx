import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectCard from './projectCard';

export default function Projects() {
    const [filter, setFilter] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);

    // Projects per page
    const itemsPerPage = 4;

    // Filter the projects based on the selected category
    const filteredProjects = projects.filter((project) => {
        if (filter === 'all') return true;
        if (filter === 'other') {
            // Check if project tags do not include "commercial" or "residential"
            return !project.tag.some((tag) =>
                ['commercial', 'residential'].includes(tag.toLowerCase())
            );
        }
        return project.tag.some((tag) => tag.toLowerCase() === filter);
    });

    // Pagination logic
    const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
    const paginatedProjects = filteredProjects.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row p-6 gap-6">

            {/* Filter Section */}
            <div className="w-full lg:w-1/3">
                <h2 className="text-3xl font-bold mb-6" id="projects">Projects</h2>
                <div className="flex flex-col gap-4 font-bold text-gray-300">
                    {['all', 'commercial', 'residential', 'other'].map((category) => (
                        <button
                            key={category}
                            className={`p-1.5 text-start ${filter === category
                                ? 'border-l-4 border-blue-800 text-blue-700'
                                : ''
                                }`}
                            onClick={() => {
                                setFilter(category);
                                setCurrentPage(0); // Reset to the first page
                            }}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Section */}
            <div className="w-full lg:w-2/3 mt-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[30%] gap-6">
                    {paginatedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex items-center justify-between mt-6">
                    <button
                        className={`p-2 w-1/4 text-white bg-slate-800 ${currentPage === 0 ? 'cursor-not-allowed' : ''
                            }`}
                        onClick={handleBack}
                        disabled={currentPage === 0}
                    >
                        ← Back
                    </button>
                    <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, index) => (
                            <span
                                key={index}
                                className={`w-3 h-3 rounded-full ${currentPage === index ? 'bg-blue-800' : 'bg-gray-300'
                                    }`}
                            ></span>
                        ))}
                    </div>
                    <button
                        className={`p-2 w-1/4 text-white bg-slate-800 ${currentPage === totalPages - 1 ? 'cursor-not-allowed' : ''
                            }`}
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                    >
                        Next →
                    </button>
                </div>
            </div>
        </div>
    );
}

