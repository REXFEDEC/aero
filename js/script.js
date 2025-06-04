// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add animation to project cards when they come into view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add a subtle parallax effect to the header
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const scrolled = window.pageYOffset;
    header.style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Add scroll-based blur effect to header elements
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    const profilePic = document.querySelector('.profile-pic');
    const headerTitle = header.querySelector('h1');
    const headerText = header.querySelector('p');
    
    const scrolled = window.pageYOffset;
    const headerHeight = header.offsetHeight;
    const blurValue = (scrolled / headerHeight) * 5; // Max 5px blur
    
    profilePic.style.filter = `blur(${blurValue}px)`;
    headerTitle.style.filter = `blur(${blurValue}px)`;
    headerText.style.filter = `blur(${blurValue}px)`;
});

// Create snowfall effect
function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    
    // Random properties for natural look
    const size = Math.random() * 4 + 2 + 'px';
    const left = Math.random() * 100 + '%';
    const opacity = Math.random() * 0.6 + 0.2;
    const duration = Math.random() * 3 + 8 + 's';
    
    snowflake.style.width = size;
    snowflake.style.height = size;
    snowflake.style.left = left;
    snowflake.style.opacity = opacity;
    snowflake.style.animationDuration = duration;
    
    document.querySelector('.snowfall').appendChild(snowflake);
    
    // Remove snowflake after animation
    setTimeout(() => {
        snowflake.remove();
    }, parseFloat(duration) * 1000);
}

// Create snowflakes at intervals
function startSnowfall() {
    setInterval(createSnowflake, 100);
}

// Start snowfall when page loads
window.addEventListener('load', startSnowfall);