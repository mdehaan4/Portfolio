import './portfolio.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

// Project data interface
interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  detailedDescription?: string;
  businessInfo?: {
    name: string;
    description: string;
    website?: string;
  };
}

// Sample project data - replace with your actual projects
const projects: Project[] = [
  {
    id: 1,
    title: "The Distractions Band Management System",
    description: "A comprehensive band and event management platform facilitating seamless communication between administrators, musicians, and clients for booking and managing live music events. Features role-based access, automated notifications, and payment integration.",
    detailedDescription: "The Distractions Band Management System is a web application designed to streamline the entire process of managing live music events - from initial booking to final performance. The platform serves three main user types: Clients (book events), Musicians (receive gig offers, manage invoices), and Administrators (manage everything). Features include automated invoice generation, calendar integration, instrument-based matching, push/email/SMS notifications, and comprehensive reporting.",
    technologies: ["Next.js", "React", "TypeScript", "tRPC", "PostgreSQL", "Prisma", "NextAuth.js", "SendGrid", "PayPal", "Tailwind CSS"],
    imageUrl: "/images/Distractions44.png",
    liveUrl: "https://account.thedistractionsband.co.uk/",
    features: ["Role-based Access Control", "Automated Notifications (Email/SMS/Push)", "PayPal Payment Integration", "Real-time Gig Management", "Invoice Generation & Tracking", "Calendar Integration (iCal)"],
    businessInfo: {
      name: "The Distractions Band Ltd",
      description: "A professional live music entertainment company providing high-quality musical performances for weddings, corporate events, and private parties. The band specializes in creating memorable experiences with a diverse repertoire spanning multiple genres and decades.",
      website: "https://thedistractionsband.co.uk"
    }
  },
  {
    id: 2,
    title: "Derby Yamaha Music School Management System",
    description: "A comprehensive web-based management system for Derby Yamaha Music School built with Next.js 14 and TypeScript. Features class management, pupil tracking, teacher administration, attendance systems, and payment management for streamlined music education administration.",
    detailedDescription: "Built with Next.js 14 and modern web technologies, this system manages all aspects of music education including class scheduling, student enrollment, teacher management, attendance tracking, payment processing, and progress monitoring. The system includes role-based access for admins, teachers, and clients, with real-time updates via tRPC and comprehensive reporting features.",
    technologies: ["Next.js 14", "TypeScript", "PostgreSQL", "Drizzle ORM", "NextAuth.js", "tRPC", "Tailwind CSS", "Bun", "TanStack Query"],
    imageUrl: "/images/YMS3.png",
    liveUrl: "https://www.derbyyms.co.uk/",
    features: ["Role-based Access Control", "Student & Teacher Management", "Class Scheduling & Attendance", "Payment Tracking", "Real-time Updates via tRPC", "Responsive Mobile Interface"],
    businessInfo: {
      name: "Derby Yamaha Music School",
      description: "A leading music education institution offering comprehensive music lessons and courses for students of all ages and skill levels. The school provides expert instruction in various instruments and music theory, fostering musical development and creativity in the Derby community.",
      website: "https://www.derbyyms.co.uk"
    }
  },
  {
    id: 3,
    title: "DJ Electronics - E-commerce Platform",
    description: "A full-featured e-commerce site for DJ equipment with responsive Bootstrap UI, secure authentication (local & Google), product browsing by category and brand, cart management, checkout with Stripe payments, and comprehensive testing.",
    detailedDescription: "DJ Electronics is a full-featured e-commerce platform specifically designed for DJ equipment sales. The application features user authentication (local and Google OAuth), product browsing by category and brand (DJ Controllers, Booths, Lights, Speakers), detailed product pages with specifications and user reviews, shopping cart management, secure Stripe payment integration, and comprehensive testing with Jest, Vitest, and Cypress.",
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "Bootstrap", "Stripe", "Passport.js", "Jest", "Vitest", "Cypress"],
    imageUrl: "/images/DJE11.png",
    liveUrl: "https://djelectronics.netlify.app",
    githubUrl: "https://github.com/mdehaan4/DJ-Electronics",
    features: ["Google OAuth Authentication", "Product Filtering & Search", "Stripe Payment Integration", "Review System", "Cart Management", "Comprehensive Testing Suite"]
  },
  {
    id: 4,
    title: "Jammin - Spotify Playlist Creator",
    description: "A modern React + TypeScript + Vite app for searching Spotify, building playlists, and saving them to your Spotify account. Features Spotify authentication with PKCE flow and comprehensive Cypress testing.",
    detailedDescription: "Jammin is a modern web application that integrates with the Spotify API to provide users with an enhanced playlist creation experience. Built with React, TypeScript, and Vite, the app implements Spotify's PKCE authentication flow for secure access. Users can search for tracks, build custom playlists with an intuitive interface, and save their creations directly to their Spotify account. The application includes comprehensive end-to-end testing with Cypress.",
    technologies: ["React", "TypeScript", "Vite", "Spotify API", "CSS Modules", "Cypress"],
    imageUrl: "/images/Jamminsongs22.png",
    liveUrl: "https://jamminsongs.netlify.app/",
    githubUrl: "https://github.com/mdehaan4/Jammin",
    features: ["Spotify PKCE Authentication", "Music Search & Discovery", "Custom Playlist Creation", "Save to Spotify Account", "Responsive UI", "End-to-End Testing"]
  }
];

// DOM manipulation functions
class Portfolio {
  constructor() {
    this.init();
  }

  init() {
    this.renderProjects();
    this.setupNavigation();
    this.setupContactForm();
    this.setupScrollAnimations();
  }

  renderProjects() {
    const projectsContainer = document.getElementById('projects-container');
    if (!projectsContainer) return;

    // Create mapping of project IDs to their HTML files
    const projectPages: Record<number, string> = {
      1: 'distractions-project.html',
      2: 'yamaha-project.html', 
      3: 'dj-electronics-project.html',
      4: 'jammin-project.html'
    };

    projectsContainer.innerHTML = projects.map(project => `
      <div class="col-lg-6 mb-4">
        <div class="card h-100 shadow-sm project-card">
          <a href="${projectPages[project.id]}" class="text-decoration-none">
            <img src="${project.imageUrl}" 
                 class="card-img-top project-image" 
                 alt="${project.title}">
          </a>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text">${project.description}</p>
            <div class="mb-3">
              <h6>Key Features:</h6>
              <ul class="list-unstyled">
                ${project.features.map(feature => `
                  <li><i class="bi bi-check-circle text-success me-2"></i>${feature}</li>
                `).join('')}
              </ul>
            </div>
            <div class="mb-3">
              <h6>Technologies:</h6>
              <div class="d-flex flex-wrap gap-1">
                ${project.technologies.map(tech => `
                  <span class="badge bg-secondary">${tech}</span>
                `).join('')}
              </div>
            </div>
            <div class="mt-auto">
              <div class="d-flex gap-2">
                <a href="${projectPages[project.id]}" class="btn btn-info btn-sm">
                  <i class="bi bi-info-circle me-1"></i>View Details
                </a>
                ${project.liveUrl ? `<a href="${project.liveUrl}" class="btn btn-primary btn-sm" target="_blank">Live Demo</a>` : ''}
                ${project.githubUrl ? `<a href="${project.githubUrl}" class="btn btn-outline-primary btn-sm" target="_blank">GitHub</a>` : ''}
              </div>
            </div>
          </div>
        </div>
      </div>
    `).join('');
  }

  setupNavigation() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        const target = document.querySelector(href);
        if (target) {
          (target as HTMLElement).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Active navigation highlighting
    window.addEventListener('scroll', () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

      let current = '';
      sections.forEach(section => {
  const sectionTop = (section as HTMLElement).offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
          link.classList.add('active');
        }
      });
    });
  }

  setupContactForm() {
    const contactForm = document.getElementById('contact-form') as HTMLFormElement;
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const message = (document.getElementById('message') as HTMLTextAreaElement).value;

      // Log the submission (replace with API call when backend is available)
      console.log('Contact form submitted:', { name, email, message });

      // Show a personalized success message
      const displayName = name ? name.split(' ')[0] : 'there';
      this.showNotification(`Thank you, ${displayName}! I'll get back to you soon.`, 'success');
      contactForm.reset();
    });
  }

  setupScrollAnimations() {
    // Add fade-in animation for project cards
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    // Observe project cards when they're rendered
    setTimeout(() => {
      document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
      });
    }, 100);
  }

  showNotification(message: string, type: 'success' | 'error' = 'success') {
    const notification = document.createElement('div');
    notification.className = `alert alert-${type === 'success' ? 'success' : 'danger'} position-fixed top-0 end-0 m-3`;
    notification.style.zIndex = '9999';
    notification.textContent = message;

    document.body.appendChild(notification);

    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

}

// Initialize the portfolio when DOM is loaded
let portfolio: Portfolio;

document.addEventListener('DOMContentLoaded', () => {
  portfolio = new Portfolio();
  (window as any).portfolio = portfolio; // Make it globally accessible
});

console.log('Portfolio website loaded successfully!');
