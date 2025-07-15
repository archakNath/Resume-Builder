import { create } from 'zustand';

const useResumeStore = create((set) => ({
  personalInfo: {
    fullName: '',
    email: '',
    phone: '',
    location: '',
    website: '',
    summary: '',
  },
  experience: [],
  education: [],
  skills: [],
  projects: [],

  updatePersonalInfo: (field, value) =>
    set((state) => ({
      personalInfo: { ...state.personalInfo, [field]: value },
    })),

  addExperience: () =>
    set((state) => ({
      experience: [
        ...state.experience,
        {
          id: Date.now(),
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
          current: false,
        },
      ],
    })),
  updateExperience: (id, field, value) =>
    set((state) => ({
      experience: state.experience.map((exp) =>
        exp.id === id ? { ...exp, [field]: value } : exp
      ),
    })),
  removeExperience: (id) =>
    set((state) => ({
      experience: state.experience.filter((exp) => exp.id !== id),
    })),

  addEducation: () =>
    set((state) => ({
      education: [
        ...state.education,
        {
          id: Date.now(),
          school: '',
          degree: '',
          field: '',
          startDate: '',
          endDate: '',
          gpa: '',
        },
      ],
    })),
  updateEducation: (id, field, value) =>
    set((state) => ({
      education: state.education.map((edu) =>
        edu.id === id ? { ...edu, [field]: value } : edu
      ),
    })),
  removeEducation: (id) =>
    set((state) => ({
      education: state.education.filter((edu) => edu.id !== id),
    })),

  addSkill: () =>
    set((state) => ({
      skills: [
        ...state.skills,
        { id: Date.now(), name: '', level: 'Intermediate' },
      ],
    })),
  updateSkill: (id, field, value) =>
    set((state) => ({
      skills: state.skills.map((skill) =>
        skill.id === id ? { ...skill, [field]: value } : skill
      ),
    })),
  removeSkill: (id) =>
    set((state) => ({
      skills: state.skills.filter((skill) => skill.id !== id),
    })),

  addProject: () =>
    set((state) => ({
      projects: [
        ...state.projects,
        {
          id: Date.now(),
          name: '',
          description: '',
          technologies: '',
          url: '',
        },
      ],
    })),
  updateProject: (id, field, value) =>
    set((state) => ({
      projects: state.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    })),
  removeProject: (id) =>
    set((state) => ({
      projects: state.projects.filter((project) => project.id !== id),
    })),
}));

export default useResumeStore;
