Reveal.initialize({
    // Display controls in the bottom right corner
    controls: false,

    // Display a presentation progress bar
    progress: false,

    // Display the page number of the current slide
    slideNumber: false,

    // Push each slide change to the browser history
    history: false,

    // Enable keyboard shortcuts for navigation
    keyboard: true,

    // Enable the slide overview mode
    overview: true,

    // Vertical centering of slides
    center: true,

    // Enables touch navigation on devices with touch input
    touch: true,

    // Loop the presentation
    loop: true,

    // Change the presentation direction to be RTL
    rtl: false,

    // Turns fragments on and off globally
    fragments: true,

    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,

    // Number of milliseconds between automatically proceeding to the
    // next slide, disabled when set to 0, this value can be overwritten
    // by using a data-autoslide attribute on your slides
    autoSlide: 10000,

    // Stop auto-sliding after user input
    autoSlideStoppable: false,

    // Enable slide navigation via mouse wheel
    mouseWheel: false,

    // Hides the address bar on mobile devices
    hideAddressBar: true,

    // Opens links in an iframe preview overlay
    previewLinks: false,

    // Transition style
    transition: 'default', // default/cube/page/concave/zoom/linear/fade/none

    // Transition speed
    transitionSpeed: 'default', // default/fast/slow

    // Transition style for full page slide backgrounds
    backgroundTransition: 'default', // default/none/slide/concave/convex/zoom

    // Number of slides away from the current that are visible
    viewDistance: 3,

    width: 900,
    height: 600,
    // Factor of the display size that should remain empty around the content
    margin: 0.1,

    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 8.0,

    parallaxBackgroundImage: 'openfest.png',
    parallaxBackgroundSize: '1920px 1080px'
});

Reveal.addEventListener('update-safe', function() {
    refreshEvent();
});
