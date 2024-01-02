function initializeLottieAnimation() {
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottieAnimation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '../Media/coding.json'
    });
}