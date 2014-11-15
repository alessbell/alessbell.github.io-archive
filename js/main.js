particlesJS('particles-js', {
    particles: {
        color: '#fff',
        shape: 'circle', // "circle", "edge" or "triangle"
        opacity: 0.5,
        size: 2,
        size_random: true,
        nb: 200,
        line_linked: {
            enable_auto: true,
            distance: 250,
            color: '#fff',
            opacity: 0.5,
            width: 1,
            condensed_mode: {
                enable: true,
                rotateX: 600,
                rotateY: 600
            }
        },
        anim: {
            enable: true,
            speed: 2
        }
    },
    interactivity: {
        enable: false,
        mouse: {
            distance: 250
        },
        detect_on: 'canvas', // "canvas" or "window"
        mode: 'grab'
    },
    /* Retina Display Support */
    retina_detect: false
});