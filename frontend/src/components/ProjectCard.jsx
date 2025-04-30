import React from 'react';

const ProjectCard = ({ title, description, technologies, repoUrl, imageUrl }) => {
  return (
    <div className="bg-gray-700 p-6 rounded-lg shadow-lg transition-all hover:scale-105 transition-transform duration-300">

      {imageUrl ? (
        <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-contain rounded-xl mb-4"
      />
      
      
      ) : (
        <div className="w-full h-48 bg-gray-600 rounded-md mb-4 flex justify-center items-center">
          <span className="text-white text-lg">No Image</span>
        </div>
      )}

      <h4 className="text-xl font-semibold text-white">{title}</h4>

      <p className="mt-2 text-gray-200">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-600 text-white py-1 px-3 rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-600 text-white py-2 px-6 rounded-full hover:bg-gray-800 transition-all"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
