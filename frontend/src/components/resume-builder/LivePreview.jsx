import React from "react";
import useResumeStore from "../../store/useResumeStore";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { Mail, Phone, MapPin, Globe, Calendar, Building } from "lucide-react";

const LivePreview = () => {
  const { personalInfo, experience, education, skills, projects } =
    useResumeStore();

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Preview</h2>
        <ResumeDownloadButton />
      </div>

      <div
        id="resume-preview"
        className="bg-white max-w-2xl mx-auto"
        style={{ minHeight: "800px" }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {personalInfo.fullName || "Your Name"}
          </h1>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
            {personalInfo.email && (
              <div className="flex items-center gap-1">
                <Mail size={14} />
                {personalInfo.email}
              </div>
            )}
            {personalInfo.phone && (
              <div className="flex items-center gap-1">
                <Phone size={14} />
                {personalInfo.phone}
              </div>
            )}
            {personalInfo.location && (
              <div className="flex items-center gap-1">
                <MapPin size={14} />
                {personalInfo.location}
              </div>
            )}
            {personalInfo.website && (
              <div className="flex items-center gap-1">
                <Globe size={14} />
                {personalInfo.website}
              </div>
            )}
          </div>
        </div>

        {/* Summary */}
        {personalInfo.summary && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-2 border-b border-gray-200 pb-1">
              Professional Summary
            </h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>
        )}

        {/* Experience */}
        {experience.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div key={exp.id} className="text-sm">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-1 text-gray-600">
                        <Building size={12} />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar size={12} />
                      {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                    </div>
                  </div>
                  {exp.description && (
                    <p className="text-gray-700 mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        {education.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Education
            </h2>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="text-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {edu.degree} {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-gray-600">{edu.school}</p>
                      {edu.gpa && (
                        <p className="text-gray-500 text-xs">GPA: {edu.gpa}</p>
                      )}
                    </div>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <Calendar size={12} />
                      {edu.startDate} - {edu.endDate}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills */}
        {skills.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="flex justify-between items-center text-sm"
                >
                  <span className="text-gray-700">{skill.name}</span>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects */}
        {projects.length > 0 && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-200 pb-1">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((project) => (
                <div key={project.id} className="text-sm">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-semibold text-gray-900">
                      {project.name}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        className="text-blue-500 hover:text-blue-700 text-xs"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                  {project.description && (
                    <p className="text-gray-700 mb-2 leading-relaxed">
                      {project.description}
                    </p>
                  )}
                  {project.technologies && (
                    <p className="text-gray-500 text-xs">
                      <strong>Technologies:</strong> {project.technologies}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LivePreview;
