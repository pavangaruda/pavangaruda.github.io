// shapes-animation.js
document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const shapes = document.querySelectorAll('.shapes > *');
    
    if(isMobile) {
        // Simpler animations for mobile
        shapes.forEach(shape => {
            shape.style.animation = `float1 ${8 + Math.random() * 4}s ease-in-out infinite both`;
        });
    } else {
        // Full random animations for desktop
        const animations = ['float1', 'float2', 'float3', 'float4'];
        const durations = [7, 8, 9, 10, 11, 12];
        
        shapes.forEach(shape => {
            const randomAnim = animations[Math.floor(Math.random() * animations.length)];
            const randomDur = durations[Math.floor(Math.random() * durations.length)];
            shape.style.animation = `${randomAnim} ${randomDur}s ease-in-out infinite both`;
        });
    }
});