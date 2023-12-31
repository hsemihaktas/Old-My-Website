import React, { useState, useEffect } from "react";
import ProjeCard from "./projeCard";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // JSON dosyasını fetch edin
    fetch("/projects.json") // JSON dosyanızın yolu
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("JSON verileri alınamadı:", error));
  }, []);

  return (
    <>
      <div className="w-full lg:w-full h-auto lg:h-auto lg:flex lg:flex-wrap lg:justify-center lg:items-center p-20 gap-5 bg-[#363636]">
        <div className="w-full">
          <h1 className="text-4xl font-semibold mb-4 text-center text-white">
            Project List
          </h1>
        </div>
        <div className="w-full lg:w-2/3 flex flex-wrap justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <ProjeCard key={index} project={project} />
              ))}
            </div>
          </div>
      </div>
    </>
  );
};

export default Project;
