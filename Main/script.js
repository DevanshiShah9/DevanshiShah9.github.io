function adjustSidebarOnLoad() {
    const sidebar = document.querySelector('.sidebar');
    const closeIcon = document.querySelector('.close-icon');
    const screenWidth = window.innerWidth;

    if (screenWidth <= 768) {
        sidebar.style.position = 'absolute';
        sidebar.style.left = '-80px'; // Adjust based on your sidebar width
        closeIcon.style.display = 'none'; // Or any other adjustments needed
        sidebar.classList.remove('fixed');
    } else {
        sidebar.style.position = 'fixed';
        sidebar.style.left = '0';
        sidebar.style.top = '0';
        closeIcon.style.display = 'none'; // Or any other adjustments needed
        sidebar.classList.add('fixed');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const mainContent = document.querySelector('.content');
    const sidebar = document.querySelector('.sidebar');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');


    let loadedScript = null; // Global variable to keep track of the loaded script

    function loadContent(href) {
        fetch(href)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                mainContent.innerHTML = '<div class="loaded-content">' + data + '</div>';

                // Extract the script source from the fetched HTML
                const tempElement = document.createElement('div');
                tempElement.innerHTML = data;
                const scriptSrc = tempElement.querySelector('script')?.getAttribute('src');

                if (scriptSrc === '../Home/script.js') {
                    const scriptElement = document.createElement('script');
                scriptElement.src = scriptSrc;
                scriptElement.onload = function () {
                    initializeLottieAnimation(); // Call the function once the script is loaded
                };
                document.body.appendChild(scriptElement);
                } else if (scriptSrc) {
                    // Remove the previously loaded script
                    if (loadedScript) {
                        document.body.removeChild(loadedScript);
                    }

                    // Create a new script element and load the script file
                    const scriptElement = document.createElement('script');
                    scriptElement.src = scriptSrc;
                    document.body.appendChild(scriptElement);

                    // Update the loadedScript variable with the new script element
                    loadedScript = scriptElement;
                }
            })
            .catch(error => {
                console.error('There was a problem fetching the content:', error);
            });
    }

    sidebar.addEventListener('click', function (event) {
        event.preventDefault();

        const clickedLink = event.target.closest('.sidebar a');
        if (clickedLink) {
            const screenWidth = window.innerWidth;
            if (screenWidth <= 768) {
                sidebar.style.position = 'absolute';
                sidebar.style.left = '-80px'; // Adjust based on your sidebar width
                closeIcon.style.display = 'none'; // Or any other adjustments needed
                sidebar.classList.remove('fixed');
            }
            const links = this.querySelectorAll('.sidebar a');
            links.forEach(link => link.classList.remove('active'));
            clickedLink.classList.add('active');
            const linkHref = clickedLink.getAttribute('href');
            loadContent(linkHref);
        }
    });


    menuIcon.addEventListener('click', function () {
        if (sidebar.classList.contains('fixed')) {
            sidebar.style.position = 'absolute';
            sidebar.style.left = '-80px'; // Adjust based on your sidebar width
            closeIcon.style.display = 'none'; // Or any other adjustments needed
            sidebar.classList.remove('fixed');
        } else {
            sidebar.style.position = 'fixed';
            sidebar.style.left = '0';
            sidebar.style.top = '0';
            closeIcon.style.display = ''; // Or any other adjustments needed
            sidebar.classList.add('fixed');
        }
    });

    closeIcon.addEventListener('click', function () {
        sidebar.style.position = 'absolute';
        sidebar.style.left = '-80px'; // Adjust based on your sidebar width
        closeIcon.style.display = 'none'; // Or any other adjustments needed
        sidebar.classList.remove('fixed');
    });

    // Load default content on page load
    const defaultActiveLink = document.querySelector('.sidebar a.active');
    if (defaultActiveLink) {
        const defaultHref = defaultActiveLink.getAttribute('href');
        loadContent(defaultHref);
    }

    adjustSidebarOnLoad();
});


// Event listener for window resize to handle adjustments
window.addEventListener('resize', function () {
    // Adjust the sidebar whenever the window is resized
    adjustSidebarOnLoad();
});



