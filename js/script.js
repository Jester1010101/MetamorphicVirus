// Add fade-in animation to main content
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    main.classList.add('fade-in');
});

// Glitch effect for titles
function createGlitchEffect() {
    const glitchTexts = document.querySelectorAll('.glitch');
    
    glitchTexts.forEach(text => {
        setInterval(() => {
            const originalText = text.textContent;
            const glitchChars = '!@#$%^&*()_+{}:"<>?';
            
            text.style.transform = `translate(${Math.random() * 2}px, ${Math.random() * 2}px)`;
            
            setTimeout(() => {
                text.style.transform = 'translate(0, 0)';
            }, 50);
        }, 3000);
    });
}

// Initialize glitch effect
createGlitchEffect();

// Add hover effect to news cards
const newsCards = document.querySelectorAll('.news-card');
newsCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.02)';
        card.style.transition = 'transform 0.3s ease';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add particle background effect
function createParticleBackground() {
    const main = document.querySelector('main');
    for(let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
        main.appendChild(particle);
    }
}

// Initialize particle effect
createParticleBackground();

// Add typing effect to student info
const studentName = document.querySelector('.student-info h3');
if(studentName) {
    const text = studentName.textContent;
    studentName.textContent = '';
    let i = 0;
    const typeWriter = setInterval(() => {
        if(i < text.length) {
            studentName.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 100);
}

// Matrix rain effect
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.zIndex = '-1';
    canvas.style.opacity = '0.1';
    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const drops = [];
    const fontSize = 10;
    const columns = canvas.width/fontSize;

    for(let x = 0; x < columns; x++)
        drops[x] = 1;

    function draw() {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#0f3';
        ctx.font = fontSize + 'px monospace';

        for(let i = 0; i < drops.length; i++) {
            const text = matrix[Math.floor(Math.random()*matrix.length)];
            ctx.fillText(text, i*fontSize, drops[i]*fontSize);
            if(drops[i]*fontSize > canvas.height && Math.random() > 0.975)
                drops[i] = 0;
            drops[i]++;
        }
    }

    setInterval(draw, 35);
}

// Initialize effects
document.addEventListener('DOMContentLoaded', () => {
    createMatrixRain();
});

function createParticles() {
    const particlesContainer = document.querySelector('.particles-bg');
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        particlesContainer.appendChild(particle);
    }
}

function initGlitchEffect() {
    const glitchText = document.querySelector('.glitch');
    if (!glitchText) return;

    setInterval(() => {
        const glitchIntensity = Math.random() * 10;
        glitchText.style.textShadow = `
            ${Math.random() * glitchIntensity - glitchIntensity/2}px ${Math.random() * glitchIntensity - glitchIntensity/2}px 0 rgba(15, 255, 51, 0.7),
            ${Math.random() * glitchIntensity - glitchIntensity/2}px ${Math.random() * glitchIntensity - glitchIntensity/2}px 0 rgba(255, 0, 51, 0.7)
        `;
    }, 50);
}

// Enhanced glitch effect
const glitchText = document.querySelector('.glitch');
if(glitchText) {
    setInterval(() => {
        glitchText.style.textShadow = `
            ${Math.random()*4-2}px ${Math.random()*4-2}px 0 rgba(255,0,51,0.5),
            ${Math.random()*4-2}px ${Math.random()*4-2}px 0 rgba(15,255,51,0.5)
        `;
    }, 50);
}

document.addEventListener('DOMContentLoaded', () => {
    createParticleEffect();
    initializeGlitchEffects();
});

function createParticleEffect() {
    const particlesContainer = document.querySelector('.particles-bg');
    if (!particlesContainer) return;

    for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const posX = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(15, 255, 51, ${Math.random() * 0.5});
            left: ${posX}%;
            top: -10px;
            animation: fall ${duration}s linear ${delay}s infinite;
        `;

        particlesContainer.appendChild(particle);
    }
}

function initializeGlitchEffects() {
    const glitchText = document.querySelector('.glitch');
    if (!glitchText) return;

    const originalText = glitchText.textContent;
    glitchText.setAttribute('data-text', originalText);

    setInterval(() => {
        if (Math.random() > 0.95) {
            glitchText.style.setProperty('--glitch-offset', `${Math.random() * 10 - 5}px`);
            setTimeout(() => {
                glitchText.style.setProperty('--glitch-offset', '0px');
            }, 50);
        }
    }, 100);
}

// Add this to your CSS file
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    from { transform: translateY(-10vh); }
    to { transform: translateY(100vh); }
}
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => {
    initParticles();
    initGlitchEffect();
});

function initParticles() {
    const particlesContainer = document.querySelector('.particles-bg');
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const posX = Math.random() * 100;
    const duration = Math.random() * 20 + 10;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(0, 255, 102, ${Math.random() * 0.5});
        left: ${posX}%;
        animation: fall ${duration}s linear infinite;
    `;
    
    container.appendChild(particle);
}
