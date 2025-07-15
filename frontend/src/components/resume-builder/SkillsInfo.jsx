import React from "react";
import useResumeStore from "../../store/useResumeStore";
import {
  Plus,
  X,
  Building,
} from "lucide-react";

const SkillsInfo = () => {
  const {
    skills,
    addSkill,
    updateSkill,
    removeSkill,
  } = useResumeStore();
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900">Skills</h2>
        <button
          onClick={addSkill}
          className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          <Plus size={16} />
          Add
        </button>
      </div>
      <div className="space-y-3">
        {skills.map((skill) => (
          <div key={skill.id} className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Skill name"
              value={skill.name}
              onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={skill.level}
              onChange={(e) => updateSkill(skill.id, "level", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <button
              onClick={() => removeSkill(skill.id)}
              className="text-red-500 hover:text-red-700"
            >
              <X size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsInfo;
