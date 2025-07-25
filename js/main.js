// main.js

// Menu functionality
const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

// Close mobile menu when clicking on nav links
document.querySelectorAll('.nav-link a').forEach(link => {
    link.addEventListener('click', () => {
        if (menuBtn.classList.contains('is-active')) {
            showMenu();
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!menuBtn.contains(e.target) && !menuList.contains(e.target) && menuBtn.classList.contains('is-active')) {
        showMenu();
    }
});

function showMenu() {
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
    
    // Update aria-expanded for accessibility
    const isExpanded = menuBtn.classList.contains('is-active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
    
    // Prevent body scroll when menu is open on mobile
    if (isExpanded) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = '';
    }
}

// Typing effect functionality
document.addEventListener('DOMContentLoaded', function() {
    async function typeEffect(parentElement, text, speed) {
        const textNode = document.createTextNode('');
        parentElement.appendChild(textNode);
        for (const char of text) {
            textNode.nodeValue += char;
            await new Promise(resolve => setTimeout(resolve, speed));
        }
    }

    async function initTyping() {
        const h1 = document.querySelector('h1');
        const declaration = document.querySelector('.declaration');
        
        // Save original content
        const originalH1 = h1.innerHTML;
        const originalDeclaration = declaration.textContent;
        
        // Clear elements
        h1.innerHTML = '';
        declaration.innerHTML = '';
        
        // Type h1 content
        h1.classList.add('typing');
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name-highlight';
        h1.appendChild(nameSpan);
        
        // Type the full name inside the highlight span
        await typeEffect(nameSpan, 'Assem ElQersh', 100);
        
        h1.classList.remove('typing');
        
        // Type declaration
        await new Promise(resolve => setTimeout(resolve, 500));
        declaration.classList.add('typing');
        await typeEffect(declaration, originalDeclaration, 50);
        declaration.classList.remove('typing');
    }

    initTyping();
});

// Function to download both CV versions with better browser compatibility
function downloadBothCVs(event) {
    event.preventDefault();
    
    // Show modal with download options
    showDownloadModal();
}

function showDownloadModal() {
    // Create modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'downloadModal';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
        padding: 2rem;
        box-sizing: border-box;
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: rgb(17, 25, 40);
        border: 1px solid rgba(255, 255, 255, 0.125);
        border-radius: 12px;
        padding: 2.5rem 2rem;
        text-align: center;
        max-width: 450px;
        width: 100%;
        min-width: 280px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
        position: relative;
        max-height: 90vh;
        overflow-y: auto;
    `;
    
    // Determine if it's mobile
    const isMobile = window.innerWidth <= 768;
    const buttonStyle = isMobile ? `
        background: linear-gradient(99.41deg, #002cc7 -39.51%, rgba(24, 185, 207, 0.9) 116.85%);
        color: rgb(208, 212, 212);
        border: none;
        padding: 1.5rem 2rem;
        border-radius: 0.8rem;
        font-family: 'Satoshi 700';
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.6rem;
        width: 100%;
        min-height: 50px;
        touch-action: manipulation;
        -webkit-tap-highlight-color: rgba(24, 185, 207, 0.2);
    ` : `
        background: linear-gradient(99.41deg, #002cc7 -39.51%, rgba(24, 185, 207, 0.9) 116.85%);
        color: rgb(208, 212, 212);
        border: none;
        padding: 1rem 2rem;
        border-radius: 0.8rem;
        font-family: 'Satoshi 700';
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1.5rem;
        min-height: 44px;
    `;
    
    modalContent.innerHTML = `
        <h3 style="color: rgb(208, 212, 212); margin-bottom: 1.5rem; font-family: 'Satoshi 700'; font-size: ${isMobile ? '2rem' : '1.8rem'};">
            Download Resume
        </h3>
        <p style="color: rgb(208, 212, 212); margin-bottom: 2.5rem; font-size: ${isMobile ? '1.6rem' : '1.4rem'}; line-height: 1.5;">
            Choose your preferred version:
        </p>
        <div style="display: flex; flex-direction: column; gap: ${isMobile ? '1.5rem' : '1rem'};">
            <button onclick="downloadSingleCV('AI')" class="download-btn" style="${buttonStyle}">
                📄 Download AI/ML Engineer Version
            </button>
            <button onclick="downloadSingleCV('SE')" class="download-btn" style="${buttonStyle}">
                💻 Download Software Engineer Version
            </button>
        </div>
        <p style="color: rgba(208, 212, 212, 0.7); margin-top: 2rem; font-size: ${isMobile ? '1.4rem' : '1.2rem'}; line-height: 1.4;">
            💡 Tip: You can click each button separately to download both versions
        </p>
        <button onclick="closeDownloadModal()" style="
            background: none;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: rgb(208, 212, 212);
            padding: ${isMobile ? '1rem 2rem' : '0.5rem 1rem'};
            border-radius: 0.5rem;
            margin-top: 2rem;
            cursor: pointer;
            font-family: 'Satoshi 400';
            font-size: ${isMobile ? '1.5rem' : '1.3rem'};
            min-height: ${isMobile ? '48px' : '40px'};
            touch-action: manipulation;
        ">
            Close
        </button>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add enhanced hover and touch effects
    const buttons = modalContent.querySelectorAll('.download-btn');
    buttons.forEach(btn => {
        // Mouse events
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
            btn.style.boxShadow = '0 5px 15px rgba(24, 185, 207, 0.3)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
            btn.style.boxShadow = 'none';
        });
        
        // Touch events for mobile
        btn.addEventListener('touchstart', () => {
            btn.style.transform = 'scale(0.98)';
            btn.style.boxShadow = '0 3px 10px rgba(24, 185, 207, 0.4)';
        });
        btn.addEventListener('touchend', () => {
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
                btn.style.boxShadow = 'none';
            }, 150);
        });
    });
    
    // Close button effects
    const closeBtn = modalContent.querySelector('button[onclick="closeDownloadModal()"]');
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
    });
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.backgroundColor = 'transparent';
    });
    
    // Enhanced close functionality
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeDownloadModal();
        }
    });
    
    // Close on escape key
    document.addEventListener('keydown', handleEscapeKey);
    
    // Focus trap for accessibility
    const focusableElements = modalContent.querySelectorAll('button');
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    firstFocusable.focus();
    
    modalContent.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            if (e.shiftKey) {
                if (document.activeElement === firstFocusable) {
                    e.preventDefault();
                    lastFocusable.focus();
                }
            } else {
                if (document.activeElement === lastFocusable) {
                    e.preventDefault();
                    firstFocusable.focus();
                }
            }
        }
    });
}

function handleEscapeKey(e) {
    if (e.key === 'Escape') {
        closeDownloadModal();
    }
}

function downloadSingleCV(version) {
    const link = document.createElement('a');
    
    if (version === 'AI') {
        link.href = 'Assem_ElQersh - CV - AI.pdf';
        link.download = 'Assem_ElQersh_CV_AI.pdf';
    } else {
        link.href = 'Assem_ElQersh - CV - SE.pdf';
        link.download = 'Assem_ElQersh_CV_SE.pdf';
    }
    
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Add download feedback for mobile
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        const feedback = document.createElement('div');
        feedback.style.cssText = `
            position: fixed;
            bottom: 2rem;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(24, 185, 207, 0.9);
            color: white;
            padding: 1rem 2rem;
            border-radius: 0.5rem;
            z-index: 10001;
            font-family: 'Satoshi 700';
            font-size: 1.4rem;
        `;
        feedback.textContent = `Downloading ${version === 'AI' ? 'AI/ML' : 'Software Engineering'} CV...`;
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 3000);
    }
    
    closeDownloadModal();
}

function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        document.body.removeChild(modal);
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscapeKey);
    }
}

// Handle window resize for responsive adjustments
window.addEventListener('resize', () => {
    // Close mobile menu if window is resized to desktop
    if (window.innerWidth >= 1280 && menuBtn.classList.contains('is-active')) {
        showMenu();
    }
    
    // Adjust modal if it's open
    const modal = document.getElementById('downloadModal');
    if (modal) {
        // Refresh modal to apply responsive styles
        closeDownloadModal();
        setTimeout(() => showDownloadModal(), 100);
    }
});

// Improve mobile touch performance
document.addEventListener('touchstart', function() {}, { passive: true });
document.addEventListener('touchmove', function() {}, { passive: true });

// Add loading states for better mobile UX
document.addEventListener('DOMContentLoaded', () => {
    // Only apply fade-in animation on desktop to avoid mobile issues
    if (window.innerWidth > 768) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.05 }); // Lower threshold for better mobile compatibility

        // Observe sections for animation
        document.querySelectorAll('section').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    } else {
        // On mobile, ensure all elements are visible immediately
        document.querySelectorAll('section').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }
    
    // Fallback: Show all elements after 2 seconds regardless
    setTimeout(() => {
        document.querySelectorAll('section').forEach(el => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        });
    }, 2000);
});