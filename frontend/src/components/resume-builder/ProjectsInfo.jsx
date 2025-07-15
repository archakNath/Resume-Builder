import React from "react";
import useResumeStore from "../../store/useResumeStore";
import {
  Plus,
  X,
} from "lucide-react";

const ProjectsInfo = () => {
    const {
    projects,
    addProject,
    updateProject,
    removeProject,
  } = useResumeStore();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
        <button
          onClick={addProject}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="border border-gray-200 rounded-md p-4 relative"
          >
            <button
              onClick={() => removeProject(project.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <X size={16} />
            </button>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Project Name"
                value={project.name}
                onChange={(e) =>
                  updateProject(project.id, "name", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Project Description"
                value={project.description}
                onChange={(e) =>
                  updateProject(project.id, "description", e.target.value)
                }
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Technologies Used"
                value={project.technologies}
                onChange={(e) =>
                  updateProject(project.id, "technologies", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="url"
                placeholder="Project URL (optional)"
                value={project.url}
                onChange={(e) =>
                  updateProject(project.id, "url", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsInfo;
