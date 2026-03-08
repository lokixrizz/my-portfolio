export const portfolioData = {
  personal: {
    name: 'LOGESHBALAN P',
    title: 'AI/ML Developer',
    subtitle: 'B.Sc Artificial Intelligence & Machine Learning',
    tagline: 'Building intelligent solutions. Embracing challenges. Growing every day.',
    about: `I am a motivated and adaptable learner with strong problem-solving skills and the ability to adjust to any environment. A quick learner who takes initiative and embraces challenges. I welcome rejection and criticism as opportunities to grow and improve. Eager to contribute meaningfully and gain practical experience while delivering quality work.`,
    location: 'Tirupur, Tamil Nadu, India',
    email: 'logeshbalan352@gmail.com',
    phone: '+91 8190935297',
    github: 'https://github.com/logeshbalan',
    linkedin: 'https://linkedin.com/in/logeshbalan',
  },

  education: [
    {
      degree: 'B.Sc Artificial Intelligence and Machine Learning',
      institution: 'Dr N.G.P Arts and Science College',
      period: '2023 – 2026',
      score: 'CGPA: 7.0 / 10',
      icon: '🎓',
      current: true,
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Saradha Matriculation Higher Secondary School',
      period: '2022 – 2023',
      score: 'Score: 84%',
      icon: '📚',
      current: false,
    },
  ],

  skills: {
    languages: [
      { name: 'Python', level: 85, icon: '🐍' },
      { name: 'C', level: 75, icon: '⚙️' },
      { name: 'SQL', level: 70, icon: '🗄️' },
    ],
    tools: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'VS Code', icon: '💻' },
      { name: 'MySQL', icon: '🗃️' },
    ],
    domains: [
      'Machine Learning',
      'Image Classification',
      'Data Science',
      'Neural Networks',
      'Data Analysis',
      'Problem Solving',
    ],
  },

  projects: [
    {
      title: 'Smart Classification of Recyclable Waste',
      description:
        'An image-based machine learning model that intelligently classifies waste as recyclable or non-recyclable, contributing to smart waste management and environmental sustainability.',
      bullets: [
        'Built ML model using Python and Scikit-learn / TensorFlow',
        'Trained on real-world waste image datasets',
        'Focused on environmental sustainability use case',
        'Implemented image processing pipeline for accurate classification',
      ],
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Machine Learning', 'Image Classification'],
      category: 'AI / ML',
      color: 'cyan',
      github: '#',
      demo: '#',
    },
  ],

  certifications: [
    {
      title: 'C Basics for Beginners',
      issuer: 'eBOX',
      icon: '⚙️',
    },
    {
      title: 'Python with AI',
      issuer: 'Nunnari Labs',
      icon: '🤖',
    },
    {
      title: 'Python for Data Science',
      issuer: 'Infosys',
      icon: '📊',
    },
  ],

  languages: [
    { name: 'Tamil', skills: 'Read / Write / Speak', level: 100 },
    { name: 'English', skills: 'Read / Write / Speak', level: 90 },
    { name: 'Kannada', skills: 'Speak', level: 60 },
  ],
}
