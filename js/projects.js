// Projects Data and Management
const projects = [
    {
        id: 1,
        title: "MedFlow - AI Medical Assistance System",
        description: "Advanced healthcare AI system utilizing SISR technology for medical image enhancement and diagnostic assistance. Features intelligent workflow optimization and real-time patient data analysis.",
        image: "img/medflow.png",
        technologies: ["Python", "TensorFlow", "OpenCV", "Medical AI", "SISR"],
        github: "https://github.com/Assem-ElQersh/MedFlow",
        demo: null,
        featured: true,
        category: "AI/ML"
    },
    {
        id: 2,
        title: "Real-time Face Detection System",
        description: "Sophisticated dual-architecture face detection system with beginner and advanced implementations. Features HOG detection, 68-point facial landmarks, and DeepFace integration.",
        image: "img/real-time face detection.png",
        technologies: ["Python", "OpenCV", "DeepFace", "SQLite", "Computer Vision"],
        github: "https://github.com/Assem-ElQersh/Real-time-Face-Detection",
        demo: null,
        featured: true,
        category: "Computer Vision"
    },
    {
        id: 3,
        title: "Face Mask Detection",
        description: "Real-time COVID safety system achieving 99.2% accuracy using PyTorch and MobileNetV2. Optimized for mobile deployment with inference time under 100ms.",
        image: "img/face mask detection.png",
        technologies: ["PyTorch", "MobileNetV2", "Computer Vision", "Mobile Optimization"],
        github: "https://github.com/Assem-ElQersh/Face-Mask-Detection",
        demo: null,
        featured: true,
        category: "Computer Vision"
    },
    {
        id: 4,
        title: "Personal Assistant System",
        description: "Intelligent voice-controlled personal assistant with natural language processing capabilities, task automation, and smart scheduling features.",
        image: "img/personal assistant system.png",
        technologies: ["Python", "NLP", "Speech Recognition", "AI", "Automation"],
        github: "https://github.com/Assem-ElQersh/Personal-Assistant",
        demo: null,
        featured: true,
        category: "AI/ML"
    },
    {
        id: 5,
        title: "Object Detection Applications",
        description: "Browser-based applications using TensorFlow.js for real-time object detection. Multiple detection models including COCO-SSD and BlazeFace for various recognition tasks.",
        image: "img/object detection applications.png",
        technologies: ["TensorFlow.js", "React", "JavaScript", "Computer Vision"],
        github: "https://github.com/Assem-ElQersh/Object-Detection-App-2",
        demo: null,
        featured: true,
        category: "Web Development"
    },
    {
        id: 6,
        title: "Sign-to-Text Translation System",
        description: "Web application for translating Arabic sign language into text in real-time, bridging communication gaps between deaf and non-deaf individuals.",
        image: "img/Sign-to-Text-Translation-System.png",
        technologies: ["Python", "Deep Learning", "OpenCV", "NLP"],
        github: "https://github.com/Assem-ElQersh/Sign-to-Text-Translation-System-Using-Arabic-Sign-Language",
        demo: null,
        featured: true,
        category: "AI/ML"
    },
    {
        id: 7,
        title: "NewsLies - Fake News Detection",
        description: "Advanced Arabic fake news detection model utilizing LSTM and AraBERT. Leverages the Arabic Fake News Dataset (AFND) for intelligent news classification.",
        image: "img/news-lies.png",
        technologies: ["Python", "TensorFlow", "LSTM", "AraBERT", "NLP"],
        github: "https://github.com/Assem-ElQersh/NewsLies",
        demo: null,
        featured: false,
        category: "NLP"
    },
    {
        id: 8,
        title: "Rock-Paper-Scissors Game",
        description: "Real-time game using OpenCV and hand gesture recognition. Players compete against AI with automatic score tracking and smooth gameplay.",
        image: "img/rock-paper-scissors.png",
        technologies: ["Python", "OpenCV", "cvzone", "Hand Tracking"],
        github: "https://github.com/Assem-ElQersh/Rock-Paper-Scissors-Game",
        demo: null,
        featured: false,
        category: "Computer Vision"
    },
    {
        id: 9,
        title: "Color Identification Lab",
        description: "Computer vision application for precise color detection and identification using advanced OpenCV algorithms and machine learning techniques.",
        image: "img/color-identifier.png",
        technologies: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
        github: "https://github.com/Assem-ElQersh/Color-Identification-Lab",
        demo: null,
        featured: false,
        category: "Computer Vision"
    },
    {
        id: 10,
        title: "MIPS Processor Designs",
        description: "Comprehensive repository containing Verilog implementations of MIPS processors, including both single-cycle and multi-cycle architectures, each with full simulation testbenches and modular design components.",
        image: "img/mips processor designs.png",
        technologies: ["Verilog", "Computer Architecture", "MIPS", "HDL"],
        github: "https://github.com/Assem-ElQersh/MIPS-Processor-Designs",
        demo: null,
        featured: false,
        category: "Hardware Design"
    },
    {
        id: 11,
        title: "Train Ticketing System",
        description: "A comprehensive train ticketing system that allows administrators to manage train schedules and passengers to book tickets, supporting functionalities like adding train details, bulk uploading via CSV, and real-time availability updates.",
        image: "img/train ticketing system.jpg",
        technologies: ["HTML", "JavaScript", "PHP", "CSS", "MySQL"],
        github: "https://github.com/Assem-ElQersh/Train-Ticketing-System",
        demo: null,
        featured: false,
        category: "Web Development"
    },
    {
        id: 12,
        title: "Robotics Projects Hub",
        description: "An open-source hub for diverse robotics projects, including pathfinding algorithms, control systems, and simulations, ideal for enthusiasts, researchers, and engineers exploring practical and theoretical aspects of robotics.",
        image: "img/robotics projects hub.jpg",
        technologies: ["Python", "Robotics", "Algorithms", "Control Systems"],
        github: "https://github.com/Assem-ElQersh/RoboticsProjectsHub",
        demo: null,
        featured: false,
        category: "Robotics"
    },
    {
        id: 13,
        title: "Ishihara K-means Library",
        description: "Created medical computer vision Python package with CLI for color blindness detection. Implemented K-means clustering algorithms specifically for Ishihara test analysis, providing automated assessment for color vision deficiencies.",
        image: "img/ishihara k-means library.jpg",
        technologies: ["Python", "Medical AI", "Computer Vision", "K-means Clustering"],
        github: "https://github.com/Assem-ElQersh/Ishihara-Kmeans",
        demo: null,
        featured: false,
        category: "Medical AI"
    },
    {
        id: 14,
        title: "SIFT Feature Extraction and Matching",
        description: "Implemented advanced object detection using SIFT algorithms, homography, and RANSAC for robust feature matching. Achieved accurate object recognition and tracking in various lighting and orientation conditions.",
        image: "img/sift feature extraction and matching.jpg",
        technologies: ["Python", "OpenCV", "SIFT", "Computer Vision", "RANSAC"],
        github: "https://github.com/Assem-ElQersh/SIFT-Feature-Extraction-and-Matching",
        demo: null,
        featured: false,
        category: "Computer Vision"
    },
    {
        id: 15,
        title: "MediTrack-HMS: Hospital Management System",
        description: "Created comprehensive hospital management system in Java with GUI interface. Implemented patient records management, appointment scheduling, and billing systems with modular architecture and robust data validation.",
        image: "img/hospital management system.webp",
        technologies: ["Java", "GUI", "Database Management", "Healthcare Systems"],
        github: "https://github.com/Assem-ElQersh/MediTrack-HMS",
        demo: null,
        featured: false,
        category: "Healthcare"
    },
    {
        id: 16,
        title: "Particle Collision Simulation",
        description: "Built real-time physics engine in C using Raylib for interactive particle simulations. Implemented collision detection algorithms and physics calculations for realistic particle behavior with optimized rendering performance.",
        image: "img/particle collision simulation.jpg",
        technologies: ["C", "Raylib", "Physics Simulation", "Real-time Rendering"],
        github: "https://github.com/Assem-ElQersh/Particle-Collision-Simulation",
        demo: null,
        featured: false,
        category: "Game Development"
    }
];

// Project Management Functions
class ProjectManager {
    constructor() {
        this.projects = projects;
        this.currentFilter = 'all';
        this.currentProjects = this.projects.filter(p => p.featured);
        this.init();
    }

    init() {
        this.renderProjects();
        this.setupEventListeners();
    }

    renderProjects() {
        const projectsGrid = document.querySelector('.projects-grid');
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';

        this.currentProjects.forEach((project, index) => {
            const projectCard = this.createProjectCard(project, index);
            projectsGrid.appendChild(projectCard);
        });

        // Add intersection observer for animations
        this.observeProjectCards();
    }

    createProjectCard(project, index) {
        const card = document.createElement('div');
        card.className = 'project-card animate-on-scroll';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="project-image-container">
                <img 
                    src="${project.image}" 
                    alt="${project.title}"
                    class="project-image"
                    loading="lazy"
                    onerror="this.src='img/placeholder-project.jpg'"
                />
                <div class="project-overlay">
                    <div class="project-overlay-content">
                        ${project.demo ? `
                            <a href="${project.demo}" target="_blank" class="overlay-btn" aria-label="View live demo">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                    <polyline points="15,3 21,3 21,9"/>
                                    <line x1="10" y1="14" x2="21" y2="3"/>
                                </svg>
                            </a>
                        ` : ''}
                        <a href="${project.github}" target="_blank" class="overlay-btn" aria-label="View source code">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0C5.37 0 0 5.37 0 12C0 17.31 3.435 21.795 8.205 23.385C8.805 23.49 9.03 23.13 9.03 22.815C9.03 22.53 9.015 21.585 9.015 20.58C6 21.135 5.22 19.845 4.98 19.17C4.845 18.825 4.26 17.76 3.75 17.475C3.33 17.25 2.73 16.695 3.735 16.68C4.68 16.665 5.355 17.55 5.58 17.91C6.66 19.725 8.385 19.215 9.075 18.9C9.18 18.12 9.495 17.595 9.84 17.295C7.17 16.995 4.38 15.96 4.38 11.37C4.38 10.065 4.845 8.985 5.61 8.145C5.49 7.845 5.07 6.615 5.73 4.965C5.73 4.965 6.735 4.65 9.03 6.195C9.99 5.925 11.01 5.79 12.03 5.79C13.05 5.79 14.07 5.925 15.03 6.195C17.325 4.635 18.33 4.965 18.33 4.965C18.99 6.615 18.57 7.845 18.45 8.145C19.215 8.985 19.68 10.05 19.68 11.37C19.68 15.975 16.875 16.995 14.205 17.295C14.64 17.67 15.015 18.39 15.015 19.515C15.015 21.12 15 22.41 15 22.815C15 23.13 15.225 23.505 15.825 23.385C18.2072 22.5807 20.2772 21.0497 21.7437 19.0074C23.2101 16.965 23.9993 14.5143 24 12C24 5.37 18.63 0 12 0Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-content">
                <div class="project-category">${project.category}</div>
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.demo ? `
                        <a href="${project.demo}" target="_blank" class="project-link">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                <polyline points="15,3 21,3 21,9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                            <span>Live Demo</span>
                        </a>
                    ` : ''}
                    <a href="${project.github}" target="_blank" class="project-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22H18V16H22Z"/>
                            <path d="M16 22V18.13A3.5 3.5 0 0 0 15.07 15.4C18.5 14.99 22 13.57 22 8A5.18 5.18 0 0 0 20.65 4.04A4.65 4.65 0 0 0 20 .5S18.85.07 16 2.5A13.38 13.38 0 0 0 8 2.5C5.15.07 4 .5 4 .5A4.65 4.65 0 0 0 3.35 4.04A5.18 5.18 0 0 0 2 8C2 13.57 5.5 14.99 8.93 15.4A3.5 3.5 0 0 0 8 18.13V22"/>
                        </svg>
                        <span>View Code</span>
                    </a>
                </div>
            </div>
        `;

        return card;
    }

    filterProjects(filter) {
        this.currentFilter = filter;
        
        if (filter === 'all') {
            this.currentProjects = this.projects.filter(p => p.featured);
        } else if (filter === 'featured') {
            this.currentProjects = this.projects.filter(p => p.featured);
        } else {
            this.currentProjects = this.projects.filter(p => p.category === filter);
        }
        
        this.renderProjects();
    }

    showAllProjects() {
        this.currentProjects = this.projects;
        this.renderProjects();
        
        // Update section title
        const sectionTitle = document.querySelector('.projects .section-title');
        if (sectionTitle) {
            sectionTitle.textContent = 'All Projects';
        }
        
        const sectionSubtitle = document.querySelector('.projects .section-subtitle');
        if (sectionSubtitle) {
            sectionSubtitle.textContent = 'Complete collection of my work';
        }
    }

    observeProjectCards() {
        const cards = document.querySelectorAll('.project-card.animate-on-scroll');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => observer.observe(card));
    }

    setupEventListeners() {
        // Project filter buttons (if they exist)
        const filterButtons = document.querySelectorAll('.project-filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const filter = btn.dataset.filter;
                this.filterProjects(filter);
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // View all projects button
        const viewAllBtn = document.querySelector('.projects-cta .btn');
        if (viewAllBtn) {
            viewAllBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.showAllProjects();
                
                // Hide the view all button
                viewAllBtn.style.display = 'none';
            });
        }

        // Project card click events for mobile
        document.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project-card');
            if (projectCard && window.innerWidth <= 768) {
                projectCard.classList.toggle('active');
            }
        });
    }

    // Get project by ID
    getProject(id) {
        return this.projects.find(project => project.id === parseInt(id));
    }

    // Get featured projects
    getFeaturedProjects() {
        return this.projects.filter(project => project.featured);
    }

    // Get projects by category
    getProjectsByCategory(category) {
        return this.projects.filter(project => project.category === category);
    }

    // Search projects
    searchProjects(query) {
        const lowerQuery = query.toLowerCase();
        return this.projects.filter(project => 
            project.title.toLowerCase().includes(lowerQuery) ||
            project.description.toLowerCase().includes(lowerQuery) ||
            project.technologies.some(tech => tech.toLowerCase().includes(lowerQuery))
        );
    }
}

// Initialize project manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.projectManager = new ProjectManager();
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { projects, ProjectManager };
} 