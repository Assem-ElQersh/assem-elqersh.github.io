// main.js

// Menu functionality
const menuBtn = document.querySelector('.hamburger');
const menuBar = document.querySelector('.menu-bar');
const menuList = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', showMenu);

function showMenu() {
    menuBtn.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuList.classList.toggle('is-active');
    
    // Update aria-expanded for accessibility
    const isExpanded = menuBtn.classList.contains('is-active');
    menuBtn.setAttribute('aria-expanded', isExpanded);
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
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
        backdrop-filter: blur(5px);
    `;
    
    // Create modal content
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: rgb(17, 25, 40);
        border: 1px solid rgba(255, 255, 255, 0.125);
        border-radius: 12px;
        padding: 2rem;
        text-align: center;
        max-width: 400px;
        width: 90%;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    `;
    
    modalContent.innerHTML = `
        <h3 style="color: rgb(208, 212, 212); margin-bottom: 1rem; font-family: 'Satoshi 700';">
            Download Resume
        </h3>
                 <p style="color: rgb(208, 212, 212); margin-bottom: 2rem; font-size: 1.4rem;">
             Choose your preferred version:
         </p>
         <div style="display: flex; flex-direction: column; gap: 1rem;">
             <button onclick="downloadSingleCV('AI')" class="download-btn" style="
                 background: linear-gradient(99.41deg, #002cc7 -39.51%, rgba(24, 185, 207, 0.9) 116.85%);
                 color: rgb(208, 212, 212);
                 border: none;
                 padding: 1rem 2rem;
                 border-radius: 0.8rem;
                 font-family: 'Satoshi 700';
                 cursor: pointer;
                 transition: transform 0.3s ease;
             ">
                 📄 Download AI/ML Engineer Version
             </button>
             <button onclick="downloadSingleCV('SE')" class="download-btn" style="
                 background: linear-gradient(99.41deg, #002cc7 -39.51%, rgba(24, 185, 207, 0.9) 116.85%);
                 color: rgb(208, 212, 212);
                 border: none;
                 padding: 1rem 2rem;
                 border-radius: 0.8rem;
                 font-family: 'Satoshi 700';
                 cursor: pointer;
                 transition: transform 0.3s ease;
             ">
                 💻 Download Software Engineer Version
             </button>
         </div>
         <p style="color: rgba(208, 212, 212, 0.7); margin-top: 1rem; font-size: 1.2rem;">
             💡 Tip: You can click each button separately to download both versions
         </p>
        <button onclick="closeDownloadModal()" style="
            background: none;
            border: 1px solid rgba(255, 255, 255, 0.3);
            color: rgb(208, 212, 212);
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
            cursor: pointer;
            font-family: 'Satoshi 400';
        ">
            Close
        </button>
    `;
    
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    // Add hover effects
    const buttons = modalContent.querySelectorAll('.download-btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });
    
    // Close modal when clicking overlay
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeDownloadModal();
        }
    });
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
    
    closeDownloadModal();
}



function closeDownloadModal() {
    const modal = document.getElementById('downloadModal');
    if (modal) {
        document.body.removeChild(modal);
    }
}