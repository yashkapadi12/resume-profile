# Resume Profile Website

A modern, responsive resume and portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases your professional experience, education, skills, and projects in a beautiful, animated interface.

## Features

- 🎨 **Modern Design**: Clean, professional layout with smooth animations
- 📱 **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance**: Built with Next.js 15 and optimized for speed
- 🌙 **Dark Mode**: Automatic dark/light theme support
- 🎭 **Animations**: Smooth scroll animations using Framer Motion
- 🐳 **Docker Ready**: Includes Dockerfile and docker-compose.yml
- 📄 **Easy Customization**: Simple data structure for easy content updates

## Quick Start

### Development

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.


## Customization

### Personal Information

Edit `src/data/resume-data.ts` to update your personal information:

```typescript
export const resumeData = {
  personal: {
    name: "Your Name",
    title: "Your Job Title",
    location: "Your Location",
    email: "your.email@example.com",
    phone: "+1 (555) 123-4567",
    imageUrl: "/profile-image.jpg", // Add your image to public folder
    summary: "Your professional summary..."
  },
  // ... rest of your data
}
```

### Adding Your Profile Image

1. Add your profile image to the `public` folder
2. Update the `imageUrl` in `resume-data.ts`
3. The image will be automatically optimized by Next.js

### Experience Section

Add your work experience in the `experience` array:

```typescript
experience: [
  {
    id: "1",
    company: "Company Name",
    position: "Your Position",
    location: "Location",
    startDate: "Jan 2020",
    endDate: "Present",
    current: true,
    description: [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ],
    technologies: ["React", "Node.js", "TypeScript"]
  }
]
```

### Education Section

Add your education details:

```typescript
education: [
  {
    id: "1",
    institution: "University Name",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "City, Country",
    startDate: "Sep 2016",
    endDate: "May 2020",
    current: false,
    gpa: "3.8/4.0",
    description: ["Relevant coursework..."],
    achievements: ["Dean's List", "Honors"]
  }
]
```

### Skills Section

Organize your skills by category:

```typescript
skillCategories: [
  {
    name: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    name: "Backend",
    skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
  }
]
```

### Projects Section

Showcase your projects:

```typescript
projects: [
  {
    id: "1",
    name: "Project Name",
    description: "Project description...",
    technologies: ["React", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://project-demo.com",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  }
]
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically


### Other Platforms

This is a standard Next.js application and can be deployed to:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform
- Any platform that supports Node.js

## Technologies Used

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Accessible components
- **Lucide React** - Icons

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Resume sections
│   │   ├── hero.tsx        # Hero section
│   │   ├── experience.tsx  # Experience section
│   │   ├── education.tsx   # Education section
│   │   ├── skills.tsx      # Skills section
│   │   └── projects.tsx    # Projects section
│   └── ui/                 # Reusable UI components
│       ├── avatar.tsx
│       ├── separator.tsx
│       └── tabs.tsx
├── data/
│   └── resume-data.ts      # All resume data
└── lib/
    └── utils.ts            # Utility functions
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your resume, please open an issue on GitHub.