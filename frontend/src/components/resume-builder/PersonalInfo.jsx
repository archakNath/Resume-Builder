import React from "react";
import useResumeStore from "../../store/useResumeStore";

const PersonalInfo = () => {
  const {
    personalInfo,
    updatePersonalInfo,
  } = useResumeStore();
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Personal Information
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          value={personalInfo.fullName}
          onChange={(e) => updatePersonalInfo("fullName", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={(e) => updatePersonalInfo("email", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="tel"
          placeholder="Phone"
          value={personalInfo.phone}
          onChange={(e) => updatePersonalInfo("phone", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Location"
          value={personalInfo.location}
          onChange={(e) => updatePersonalInfo("location", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="url"
          placeholder="Website/Portfolio"
          value={personalInfo.website}
          onChange={(e) => updatePersonalInfo("website", e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Professional Summary"
          value={personalInfo.summary}
          onChange={(e) => updatePersonalInfo("summary", e.target.value)}
          rows="4"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default PersonalInfo;
