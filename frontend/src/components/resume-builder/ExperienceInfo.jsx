import React from "react";
import useResumeStore from "../../store/useResumeStore";
import {
  Plus,
  X,
} from "lucide-react";

const ExperienceInfo = () => {
  const {
    experience,
    addExperience,
    updateExperience,
    removeExperience,
  } = useResumeStore();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
        <button
          onClick={addExperience}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
      <div className="space-y-4">
        {experience.map((exp) => (
          <div
            key={exp.id}
            className="border border-gray-200 rounded-md p-4 relative"
          >
            <button
              onClick={() => removeExperience(exp.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <X size={16} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Company"
                value={exp.company}
                onChange={(e) =>
                  updateExperience(exp.id, "company", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Position"
                value={exp.position}
                onChange={(e) =>
                  updateExperience(exp.id, "position", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={exp.startDate}
                onChange={(e) =>
                  updateExperience(exp.id, "startDate", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  placeholder="End Date"
                  value={exp.endDate}
                  onChange={(e) =>
                    updateExperience(exp.id, "endDate", e.target.value)
                  }
                  disabled={exp.current}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
                />
                <label className="flex items-center gap-1 text-sm">
                  <input
                    type="checkbox"
                    checked={exp.current}
                    onChange={(e) =>
                      updateExperience(exp.id, "current", e.target.checked)
                    }
                    className="rounded"
                  />
                  Current
                </label>
              </div>
            </div>
            <textarea
              placeholder="Job Description"
              value={exp.description}
              onChange={(e) =>
                updateExperience(exp.id, "description", e.target.value)
              }
              rows="3"
              className="w-full mt-3 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceInfo;
