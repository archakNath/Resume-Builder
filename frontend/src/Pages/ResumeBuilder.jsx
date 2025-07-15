import PersonalInfo from "../components/resume-builder/PersonalInfo";
import ExperienceInfo from "../components/resume-builder/ExperienceInfo";
import EducationInfo from "../components/resume-builder/EducationInfo";
import SkillsInfo from "../components/resume-builder/SkillsInfo";
import ProjectsInfo from "../components/resume-builder/ProjectsInfo";
import LivePreview from "../components/resume-builder/LivePreview";

const ResumeBuilder = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Resume Builder
          </h1>
          <p className="text-gray-600">
            Create your professional resume with live preview
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Form */}
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <div className="space-y-8">
              <PersonalInfo />
              <ExperienceInfo />
              <EducationInfo />
              <SkillsInfo />
              <ProjectsInfo />
            </div>
          </div>

          {/* Right Side - Preview */}
          <LivePreview />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
