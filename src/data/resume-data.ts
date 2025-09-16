export const resumeData = {
  personal: {
    name: "Yash Kapadi",
    title: "DevOps Engineer",
    location: "India",
    email: "yashkapadi74909@outlook.com",
    phone: "+917490947294",
    summary: "DevOps Engineer with prior experience as a Junior Software Developer. Passionate about automation, CI/CD, cloud infrastructure, and scalable systems."
  },
  
  experience: [
    {
      id: "1",
      company: "Webelight Solutions",
      position: "DevOps Engineer-Intern",
      location: "Ahmedabad, Gujarat, India",
      startDate: "Jun 2025",
      endDate: "",
      current: true,
      description: [
        "Designed and operated Dockerized deployments for full‑stack apps, both manual and automated via Jenkins CI/CD, delivering reliable releases to AWS.",
        "Built secure IAM automation for user/key lifecycle with Slack approvals and notifications, improving auditability and response time.",
        "Implemented CI/CD pipelines with automated build, test, quality gates, and deployment stages to standardize delivery across projects.",
        "Configured Nginx as a reverse proxy with Let’s Encrypt SSL/TLS, enabling secure HTTPS and zero‑downtime certificate renewals.",
        "Created Bash scripts to provision environments, rotate secrets, and monitor services, reducing manual toil and errors."
      ],
      technologies: ["AWS(EC2, S3, RDS,Route53,VPC,IAM)", "Docker", "Git", "Jenkins", "Linux"]
    },
    {
      id: "2",
      company: "Saltriver Infosystem",
      position: "Jr. Software Developer",
      location: "Ahmedabad, Gujarat, India",
      startDate: "Apr 2024",
      endDate: "Dec 2024",
      current: false,
      description: [
        "Developed a Selenium automation suite for HPCL web workflows, reducing manual QA effort and speeding up regressions",
        "Worked as a data analyst: collected, cleaned, and analyzed operational data to generate insights and reports",
        "Built lightweight ETL scripts in Python/SQL to transform datasets and automate recurring analyses",
        "Partnered with engineers and QA to triage defects and improve release quality"
      ],
      technologies: ["python","postgresql","excel"]
    },
    {
      id: "3",
      company: "Esurgent Private Limited",
      position: "Junior Software Developer",
      location: "India",
      startDate: "Oct 2022",
      endDate: "Mar 2024",
      current: false,
      description: [
        "Built a full hospital management website using React.js (frontend) and Java (backend)",
        "Implemented REST API integrations with Axios and created reusable UI components",
        "Collaborated on backend endpoints, authentication, and data models",
        "Wrote unit tests and assisted with QA to ensure feature quality"
      ],
      technologies: ["JavaScript", "React", "Java", "MySQL"]
    }
  ],
  
  education: [
    {
      id: "1",
      institution: "L.J. Institute of Computer Applications",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "Computer Applications",
      location: "Ahmedabad, Gujarat, India",
      startDate: "2018",
      endDate: "2022",
      current: false,
      gpa: "",
      description: [
        "Completed BCA with focus on programming and web technologies"
      ],
      achievements: []
    }
  ],
  
  skillCategories: [
    {
      name: "Frontend",
      skills: ["React","javascript","html","css","bootstrap","tailwindcss"]
    },
    {
      name: "Backend",
      skills: [ "Python", "REST APIs"]
    },
    {
      name: "Database",
      skills: ["PostgreSQL", "MongoDB", "MySQL"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS(EC2, S3, RDS,Route53,VPC,IAM)", "Kubernetes","terraform", "Jenkins", "CI/CD","NGINX","Docker","Linux","bash script"]
    },
    {
      name: "Tools",
      skills: ["Git", "Postman","docker","linux","jenkins","ci/cd","github","nagios","grafana","prometheus","infisical","sonarqube"]
    }
  ],
  
  projects: [
    // Add your GitHub projects below. Example entry format:
    // {
    //   id: "proj-1",
    //   name: "Project Name",
    //   description: "Short description of the project",
    //   technologies: ["Tech1", "Tech2"],
    //   githubUrl: "https://github.com/username/repo",
    //   liveUrl: "",
    //   features: ["Feature 1", "Feature 2"]
    // }
    {
      id: "proj-django-notes",
      name: "Django Notes App",
      description: "Notes application built with Django featuring user auth, CRUD notes, search, and tags.",
      technologies: ["Python", "Django", "SQLite", "Bootstrap"],
      githubUrl: "https://github.com/yashkapadi12/django-notes-app",
      liveUrl: "",
      imageUrl: "/globe.svg",
      features: [
        "JWT/session authentication",
        "Create, edit, delete notes",
        "Tagging and search",
        "Responsive UI"
      ]
    },
    {
      id: "proj-food-delivery",
      name: "Food Delivery App",
      description: "MERN-based food ordering platform containerized with Docker for easy local setup.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "Docker"],
      githubUrl: "https://github.com/yashkapadi12/Food-Delivery-App",
      liveUrl: "",
      imageUrl: "/window.svg",
      features: [
        "Restaurant menus & cart",
        "Checkout & order tracking",
        "Admin dashboard",
        "Dockerized development environment"
      ]
    },
    {
      id: "proj-weather",
      name: "React Weather App",
      description: "Simple weather app using OpenWeather API; Dockerized for easy local setup.",
      technologies: ["React", "Vite", "OpenWeather API", "CSS", "Docker"],
      githubUrl: "@https://github.com/yashkapadi12/reactjsAPiWeather-app",
      liveUrl: "",
      imageUrl: "/weather.svg",
      features: [
        "Search by city",
        "Current temperature & conditions",
        "Responsive design",
        "Dockerized development environment"
      ]
    }
  ]
}
