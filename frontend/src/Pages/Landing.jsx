import React from 'react';
import { ChevronRight, FileText, Target, MessageSquare, Send, Lock } from 'lucide-react';

const Landing = () => {
  const tools = [
    {
      id: 1,
      name: 'AI Resume Builder',
      icon: <FileText className="w-8 h-8" />,
      description: 'Create ATS-optimized resumes with AI',
      available: true,
      route: '/ai-resume-builder'
    },
    {
      id: 2,
      name: 'ATS Score Checker',
      icon: <Target className="w-8 h-8" />,
      description: 'Check your resume ATS compatibility',
      available: false,
      route: '/ats-checker'
    },
    {
      id: 3,
      name: 'Mock Interview',
      icon: <MessageSquare className="w-8 h-8" />,
      description: 'Practice with AI-powered interviews',
      available: false,
      route: '/mock-interview'
    },
    {
      id: 4,
      name: 'Bulk Apply',
      icon: <Send className="w-8 h-8" />,
      description: 'Apply to multiple jobs automatically',
      available: false,
      route: '/bulk-apply'
    }
  ];

  const handleToolClick = (tool) => {
    if (tool.available) {
      window.location.href = tool.route;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="relative z-10 py-6">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">🎯</div>
              <span className="text-2xl font-bold text-[#79e708]">PrepMyInterview</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="hover:text-[#79e708] transition-colors">Features</a>
              <a href="#pricing" className="hover:text-[#79e708] transition-colors">Pricing</a>
              <a href="#contact" className="hover:text-[#79e708] transition-colors">Contact</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Land Your Dream Job with{' '}
                  <span className="text-[#79e708]">AI-Powered</span> Interview Prep
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Complete suite of 4-in-1 tools to optimize your resume, ace interviews, 
                  and streamline your job application process.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => handleToolClick(tools[0])}
                  className="bg-[#79e708] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#4a9604] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  Get Started Free
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button className="border border-[#79e708] text-[#79e708] px-8 py-4 rounded-lg font-semibold hover:bg-[#79e708] hover:text-black transition-all">
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Right Grid - Tools */}
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => handleToolClick(tool)}
                  className={`
                    relative p-6 rounded-xl border transition-all duration-300 transform hover:scale-105
                    ${tool.available 
                      ? 'bg-gradient-to-br from-[#79e708]/10 to-[#79e708]/5 border-[#79e708]/30 hover:border-[#79e708] cursor-pointer hover:shadow-lg hover:shadow-[#79e708]/20' 
                      : 'bg-gray-800/50 border-gray-700 cursor-not-allowed opacity-60'
                    }
                  `}
                >
                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3">
                    {tool.available ? (
                      <div className="w-3 h-3 bg-[#79e708] rounded-full animate-pulse"></div>
                    ) : (
                      <Lock className="w-4 h-4 text-gray-500" />
                    )}
                  </div>

                  {/* Tool Icon */}
                  <div className={`mb-4 ${tool.available ? 'text-[#79e708]' : 'text-gray-500'}`}>
                    {tool.icon}
                  </div>

                  {/* Tool Info */}
                  <div className="space-y-2">
                    <h3 className={`font-semibold text-lg ${tool.available ? 'text-white' : 'text-gray-400'}`}>
                      {tool.name}
                    </h3>
                    <p className={`text-sm ${tool.available ? 'text-gray-300' : 'text-gray-500'}`}>
                      {tool.description}
                    </p>
                    
                    {/* Status Badge */}
                    <div className="mt-3">
                      {tool.available ? (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#79e708]/20 text-[#79e708] border border-[#79e708]/30">
                          Available
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700/50 text-gray-400 border border-gray-600">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl font-bold">Why Choose PrepMyInterview?</h2>
            <p className="text-xl text-gray-300">Everything you need to succeed in your job search</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#79e708]/10 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-[#79e708]" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered Optimization</h3>
              <p className="text-gray-300">Advanced AI algorithms to optimize your resume and interview performance</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#79e708]/10 rounded-full flex items-center justify-center mx-auto">
                <MessageSquare className="w-8 h-8 text-[#79e708]" />
              </div>
              <h3 className="text-xl font-semibold">Real-time Feedback</h3>
              <p className="text-gray-300">Get instant feedback on your resume and interview responses</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#79e708]/10 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-[#79e708]" />
              </div>
              <h3 className="text-xl font-semibold">Streamlined Process</h3>
              <p className="text-gray-300">Apply to multiple jobs efficiently with our automated tools</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <div className="text-2xl">🎯</div>
              <span className="text-xl font-bold text-[#79e708]">PrepMyInterview</span>
            </div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-[#79e708] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#79e708] transition-colors">Terms</a>
              <a href="#" className="hover:text-[#79e708] transition-colors">Support</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2025 PrepMyInterview. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;