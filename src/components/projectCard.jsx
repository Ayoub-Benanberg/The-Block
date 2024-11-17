import { useState } from "react"

export default function ProjectCard({ project }) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="border overflow-hidden shadow hover:shadow-lg relative">
            <div className={`absolute inset-0 flex items-center justify-center bg-gray-100 transition-opacity duration-300 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div
                    className="h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-700 border-r-transparent"
                    aria-label="Loading">
                </div>
            </div>

            <img
                src={project.imgSrc}
                alt={project.name}
                className={`w-full h-40 object-cover transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'
                    }`}
                onLoad={() => setIsLoading(false)}
            />
            <div className="px-4 p-2 bg-blue-800 text-white">
                <h3 className="text-base font-semibold">{project.name}</h3>
                <p className="text-sm font-light">{project.adresse}</p>
            </div>
        </div>
    );
}