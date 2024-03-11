function initializeScript() {

const skillsData = [
    { name: 'Data Science', percentage: 95, color: '#60993E' },
    { name: 'Machine Learning', percentage: 95, color: '#60993E' },
    { name: 'Software Development', percentage: 95, color: '#60993E' },
    { name: 'Data Analytics', percentage: 95, color: '#60993E' },
    { name: 'Data Engineering', percentage: 90, color: '#60993E' },
    { name: 'Product Management', percentage: 90, color: '#60993E' },
    { name: 'Computer Vision', percentage: 85, color: '#60993E' },
    { name: 'Natural Language Processing', percentage: 85, color: '#60993E' }
];


const toolsData = [
    { name: 'Python', category: 'Programming Languages', percentage: 95, color: '#60993E' },
    { name: 'JavaScript', category: 'Programming Languages', percentage: 95, color: '#60993E' },
    { name: 'SQL', category: 'Programming Languages', percentage: 95, color: '#60993E' },
    { name: 'R', category: 'Programming Languages', percentage: 85, color: '#60993E' },
    { name: 'Java', category: 'Programming Languages', percentage: 85, color: '#60993E' },
    { name: 'HTML', category: 'Programming Languages', percentage: 85, color: '#60993E' },
    { name: 'CSS', category: 'Programming Languages', percentage: 85, color: '#60993E' },
    { name: 'C++', category: 'Programming Languages', percentage: 80, color: '#60993E' },
    

    { name: 'NumPy, Pandas, Seaborn, Matplotlib, Plotly', category: 'Data Science/ Machine Learning Libraries', percentage: 95, color: '#60993E' },
    { name: 'Scikit-Learn', category: 'Data Science/ Machine Learning Libraries', percentage: 95, color: '#60993E' },
    { name: 'Tensorflow', category: 'Data Science/ Machine Learning Libraries', percentage: 95, color: '#60993E' },
    { name: 'PyTorch', category: 'Data Science/ Machine Learning Libraries', percentage: 95, color: '#60993E' },
    { name: 'Keras', category: 'Data Science/ Machine Learning Libraries', percentage: 85, color: '#60993E' },
    { name: 'NLTK', category: 'Data Science/ Machine Learning Libraries', percentage: 85, color: '#60993E' },
    { name: 'Hugging Face', category: 'Data Science/ Machine Learning Libraries', percentage: 80, color: '#60993E' },
    { name: 'Beautiful Soup', category: 'Data Science/ Machine Learning Libraries', percentage: 80, color: '#60993E' },
    { name: 'OpenCV', category: 'Data Science/ Machine Learning Libraries', percentage: 80, color: '#60993E' },
    { name: 'PySpark', category: 'Data Science/ Machine Learning Libraries', percentage: 80, color: '#60993E' },

    { name: 'pgAdmin', category: 'Database Tools', percentage: 95, color: '#60993E' },
    { name: 'PostgreSQL', category: 'Database Tools', percentage: 95, color: '#60993E' },
    { name: 'GraphQL', category: 'Database Tools', percentage: 90, color: '#60993E' },
    { name: 'MySQL', category: 'Database Tools', percentage: 90, color: '#60993E' },
    
    { name: 'Jupyter Notebooks', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'GitHub', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'Django/ Django REST', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'Node.js', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'React', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'Looker Studio', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'BigQuery', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'Microsoft 365', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'Google Cloud Platform (GCP)', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'Tableau', category: 'Development Tools & Platforms', percentage: 95, color: '#60993E' },
    { name: 'Amazon Web Services (AWS)', category: 'Development Tools & Platforms', percentage: 90, color: '#60993E' },  
    { name: 'Jira', category: 'Development Tools & Platforms', percentage: 85, color: '#60993E' },
    { name: 'Unity', category: 'Development Tools & Platforms', percentage: 85, color: '#60993E' }, 
];


const displaySkills = (data, selector) => {
    const skillsContent = document.querySelector(selector);
    skillsContent.innerHTML = ''; // Clear existing content

    data.forEach(skill => {
        const skillDiv = document.createElement('div');
        skillDiv.classList.add('mb-7');

        const innerContent = `
            <div class="flex justify-between py-1">
                <span class="text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">${skill.name}</span>
                <span class="text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">${skill.percentage}%</span>
            </div>
            <svg class="rc-progress-line" viewBox="0 0 100 1" preserveAspectRatio="none">
                <path class="rc-progress-line-trail" d="M 0.5,0.5 L 99.5,0.5" stroke-linecap="round" stroke="#D9D9D9" stroke-width="1" fill-opacity="0"></path>
                <path class="rc-progress-line-path" d="M 0.5,0.5 L 99.5,0.5" stroke-linecap="round" stroke="${skill.color}" stroke-width="1" fill-opacity="0" style="stroke-dasharray: ${skill.percentage * 0.992}px, 100px; stroke-dashoffset: 0px; transition: stroke-dashoffset 0.3s ease 0s, stroke-dasharray 0.3s ease 0s, stroke 0.3s linear 0s, 0.06s;"></path>
            </svg>
        `;

        skillDiv.innerHTML = innerContent;
        skillsContent.appendChild(skillDiv);
    });
};




const skillsButton = document.querySelector('.skills-button');
const toolsButton = document.querySelector('.tools-button');

skillsButton.addEventListener('click', () => {
    displaySkills(skillsData, '.skills-content');
    skillsButton.classList.add('active');
    toolsButton.classList.remove('active');

    const toolsContent = document.querySelector('.tools-content');
    toolsContent.style.display = 'none'; // Show tools content

    const skillsContent = document.querySelector('.skills-content');
    skillsContent.style.display = 'block'; // Hide skills content
});

toolsButton.addEventListener('click', () => {
    toolsButton.classList.add('active');
    skillsButton.classList.remove('active');

    const skillsContent = document.querySelector('.skills-content');
    skillsContent.style.display = 'none'; // Hide skills content

    const toolsContent = document.querySelector('.tools-content');
    toolsContent.style.display = 'flex'; // Show tools content

    const programmingSkills = toolsData.filter(skill => skill.category === "Programming Languages");
    displaySkills(programmingSkills, '.selected-content');

    dropdown.value = "Programming Languages";
});

// Initially display skills content
displaySkills(skillsData, '.skills-content');
skillsButton.classList.add('active');

// Dropdown functionality
const dropdown = document.getElementById('skills-dropdown');
dropdown.addEventListener('change', () => {
    const selectedOption = dropdown.value;
    if (toolsButton.classList.contains('active')) {
        const filteredSkills = toolsData.filter(skill => skill.category === selectedOption);
        displaySkills(filteredSkills, '.selected-content');
    }
});


}


initializeScript();