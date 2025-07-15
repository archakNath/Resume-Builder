import React from "react";
import useResumeStore from "../../store/useResumeStore";
import {
  Plus,
  X,
} from "lucide-react";

const EducationInfo = () => {
    const {
    education,
    addEducation,
    updateEducation,
    removeEducation,
  } = useResumeStore();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        <button
          onClick={addEducation}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
      <div className="space-y-4">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="border border-gray-200 rounded-md p-4 relative"
          >
            <button
              onClick={() => removeEducation(edu.id)}
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            >
              <X size={16} />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="School/University"
                value={edu.school}
                onChange={(e) =>
                  updateEducation(edu.id, "school", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) =>
                  updateEducation(edu.id, "degree", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Field of Study"
                value={edu.field}
                onChange={(e) =>
                  updateEducation(edu.id, "field", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="GPA (optional)"
                value={edu.gpa}
                onChange={(e) => updateEducation(edu.id, "gpa", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                placeholder="Start Date"
                value={edu.startDate}
                onChange={(e) =>
                  updateEducation(edu.id, "startDate", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="date"
                placeholder="End Date"
                value={edu.endDate}
                onChange={(e) =>
                  updateEducation(edu.id, "endDate", e.target.value)
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

export default EducationInfo;
