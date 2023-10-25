import React from "react";

const ProjeCard = ({ project }) => {
  return (
    <>
      <div className="w-full h-auto p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl hover:scale-110 transition-all transform duration-500">
        {project.imageFile && (
          <img
            className="w-full h-60 object-cover rounded-t-md"
            src={require(`../images/${project.imageFile}`)}
            alt={project.baslik}
          />
        )}

        <div className="mt-4">
          <h1 className="text-2xl font-bold text-gray-700">{project.title}</h1>
          <p className="text-sm mt-2 text-gray-700"> {project.description}</p>
          <div className="mt-4 mb-2 flex justify-between ">
          {project.codeLink && (
              <button className="text-sm lg:text-lg block font-semibold py-2 px-2 lg:px-6 text-white hover:bg-orange-600 bg-orange-400 rounded-lg shadow hover:shadow-md transition duration-300">
                <a href={project.codeLink}>Code...</a>
              </button>
          )}
          {project.projectSite && (
              <button className="text-sm lg:text-lg block font-semibold py-2 px-2 lg:px-6 text-white hover:bg-orange-600 bg-orange-400 rounded-lg shadow hover:shadow-md transition duration-300">
                <a href={project.projectSite}>Website...</a>
              </button>
          )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjeCard;
