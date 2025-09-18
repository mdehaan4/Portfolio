# Software Engineer Portfolio

A modern, responsive portfolio website built with TypeScript and Bootstrap to showcase software engineering projects and skills.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern Tech Stack**: Built with TypeScript, Vite, and Bootstrap
- **Interactive UI**: Smooth scrolling, animations, and hover effects
- **Project Showcase**: Dynamic project cards with details and links
- **Contact Form**: Working contact form with validation
- **Dark Mode Support**: Automatic dark/light mode based on system preferences
- **SEO Optimized**: Semantic HTML and proper meta tags

## 🛠️ Tech Stack

- **Frontend**: TypeScript, HTML5, CSS3
- **Framework**: Bootstrap 5
- **Build Tool**: Vite
- **Icons**: Bootstrap Icons
- **Development**: VS Code with TypeScript support

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── main.ts          # Main TypeScript file with application logic
│   ├── portfolio.css    # Custom CSS styles
│   └── style.css        # Original Vite styles (kept for reference)
├── index.html           # Main HTML file
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── README.md           # Project documentation
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository or download the files
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization

### Adding Your Projects

Edit the `projects` array in `src/main.ts` to add your own projects:

```typescript
const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Project description here",
    technologies: ["React", "Node.js", "MongoDB"],
    imageUrl: "path/to/your/image.jpg",
    liveUrl: "https://your-live-demo.com",
    githubUrl: "https://github.com/yourusername/project",
    features: ["Feature 1", "Feature 2", "Feature 3"]
  },
  // Add more projects...
];
```

### Updating Personal Information

1. **Navigation Brand**: Update the name in `index.html` navbar
2. **Hero Section**: Modify the title and description in the hero section
3. **About Section**: Edit the about text and skills lists
4. **Contact Information**: Update email, LinkedIn, and GitHub links

### Styling

- **Colors**: Modify CSS custom properties in `src/portfolio.css`
- **Fonts**: Update font families in the CSS `:root` section
- **Layout**: Adjust Bootstrap classes in `index.html`

## 🎨 Design Features

- **Hero Section**: Eye-catching gradient background with call-to-action buttons
- **Project Cards**: Hover effects with smooth transitions
- **Navigation**: Fixed header with smooth scroll navigation
- **Animations**: Fade-in effects for project cards using Intersection Observer
- **Form Handling**: Client-side form validation with success notifications

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you find bugs or have suggestions for improvements, please open an issue.

## 📧 Contact

Replace the contact information in the contact section with your own:

- Email: your.email@example.com
- LinkedIn: linkedin.com/in/yourprofile
- GitHub: github.com/yourusername

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by [Your Name]**