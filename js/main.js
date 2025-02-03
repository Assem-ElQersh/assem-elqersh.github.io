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
        await typeEffect(h1, 'Assem ', 100);
        
        const nameSpan = document.createElement('span');
        nameSpan.className = 'name-highlight';
        nameSpan.textContent = 'ElQersh';
        h1.appendChild(nameSpan);
        
        await typeEffect(h1, ' ', 100);
        h1.classList.remove('typing');
        
        // Type declaration
        await new Promise(resolve => setTimeout(resolve, 500));
        declaration.classList.add('typing');
        await typeEffect(declaration, originalDeclaration, 50);
        declaration.classList.remove('typing');
    }

    initTyping();
});