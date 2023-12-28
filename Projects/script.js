// Function to generate category elements
function generateCategoryElements(categories) {
    return categories.map(category => {
        const span = document.createElement('span');
        span.classList.add('category');
        span.textContent = category.name;
        span.style.color = category.color;
        span.style.borderColor = category.color;
        return span;
    });
}

function openPopup(index) {
    const popup = document.getElementById('popup');
    const popupHeading = popup.querySelector('.popup-heading');
    const popupTechStack = popup.querySelector('.popup-tech-stack');
    const popupWebsiteUrl = popup.querySelector('.popup-website-url');
    const popupDescription = popup.querySelector('.popup-description');
    const popupFeatures = popup.querySelector('.popup-features');
    const popupModels = popup.querySelector('.popup-models');
    const popupCategories = popup.querySelector('.categories');

    const popupData = [
        {
            heading: 'Credit Card and Bitcoin Fraud Management System',
            techStack: 'Python, Numpy, Pandas, Matplotlib, Seaborn, Scikit-Learn, Jupyter Notebook',
            models: 'Support Vector Machines, K- Nearest Neighbors, Artificial Neural Networks, Isolation Forest, Local Outlier Factor, K-Means Clustering',
            websiteUrl: [{ Name: 'Github-Link', URL: 'https://github.com/DevanshiShah9/Credit-Card-and-BitCoin-Fraud-Management-System/' }],
            description: 'This was my final year undergraduate project where my peers and I collaborated to create a Fraud Management System. The aim was to tackle the existing credit card fraud concern as well as to resolve the emerging BitCoin frauds issue.',
            features: [
                'Usage of data manipulation - random resampling, feature selection, data visualization, and analysis',
                'Utilization of supervised and unsupervised ML algorithms',
                'Optimized F1 metric of 91% (ANN) for credit card dataset and 57% (SVM) for bitcoin dataset'
            ],
            categories: [
                { name: 'Data Science', color: '#096B72' },
                { name: 'Machine Learning', color: '#785589' },
            ]
        },
        {
            heading: 'Reverse Dictionary - Natural Language Processing',
            techStack: 'Python, Numpy, Pandas, Jupyter Notebook, PyTorch, NLTK, Hugging Face',
            models: 'DistilBERT+LSTM, BERT+LSTM, Transformer based models: BART, Pegasus',
            websiteUrl: [{ Name: 'Github-Link', URL: 'https://github.com/mtaulet/ReverseDictionary/' }, { Name: 'Final-Report', URL: 'https://drive.google.com/file/d/1STA-bbHhxwqQ3tV1x0bpXkXJgIXvXi-u/view?usp=sharing' }],
            description: 'My peers and I collaborated to give our perspective on the tip-of-tongue problem as our final project for USC CSCI 544: Applied NLP course. We developed a reverse dictionary where a vague definition input yields a list of matching words as output.',
            features: [
                'Utilized transformer-based Large Language Models (LLMs) to retrieve a word corresponding to an imprecise description',
                'Worked with data manipulatio techniques such as synonym-antonym substituition, typographical errors introduction',
                'Enhanced existing Top-K accuracies by up to 25%'
            ],
            categories: [
                { name: 'Natural Language Processing - LLMs', color: '#AC7B7D' },
            ]
        },
        {
            heading: 'Endless Runner Game Development with Analytics Integration',
            techStack: 'Python, Numpy, Pandas, Unity, C#',
            websiteUrl: [{ Name: 'Github-Link', URL: 'https://github.com/Xeler8or/Cylindro-Chess' }, { Name: 'Game', URL: 'https://play.unity.com/mg/other/cylindro-human' }],
            description: 'My peers and I collaborated to develop an Endless Runner Game during our USC CSCI 526: Advanced Mobile Devices and Game Consoles course. I contributed as a Development Engineer and a Product Manager to the team.',
            features: [
                'Developed an innovative game within 14 weeks',
                'Integrated the game with unique features, obstacles, and risk and reward strategies',
                'As a product manager tracked essential data analytics to improvise the gaming experience'
            ],
            categories: [
                { name: 'Software Development - Game Development', color: '#60AFFF' },
                { name: 'Product Management', color: '#F5AC72' },
            ]
        },
        {
            heading: 'Airline Delay Prediction',
            techStack: 'Python, Numpy, Pandas, Scikit-Learn, Jupyter Notebook, PandasUDF, PySpark',
            models: 'Logistic Regression, Random Forest, Support Vector Machines',
            websiteUrl: [{ Name: 'Github-Link', URL: 'https://github.com/DevanshiShah9/Airline-Delay-Prediction/' }],
            description: 'I implemented this project to gauge a better understanding of parallelization for Big Data using PySpark.',
            features: [
                'Usage of Big Data Analytics to assess airline delays for 4 US States',
                'Utilization of Recall, Precision, AUC-ROC scores as state-wise metrics',
                'Reduced 50% computation time for 1M rows using PySpark and Predictive Modelling'
            ],

            categories: [
                { name: 'Data Science - Big Data', color: '#096B72' },
                { name: 'Machine Learning', color: '#785589' },
            ]
        }, 
        {
            heading: 'Face Mask Detection for COVID 19',
            techStack: 'Python, Numpy, Pandas, OpenCV, Keras, Tensorflow, Scikit-Learn, imutils, Jupyter Notebook',
            models: 'MobileNetV2',
            websiteUrl: [{ Name: 'Github-Link', URL: 'https://github.com/DevanshiShah9/Face-Mask-Detection-for-COVID-19/' }],
            description: 'I implemented this project during COVID 19 to gauge a better understanding of Computer Vision while focussing on its utilization, contributing a practical solution while exploring new technologies.',
            features: [
                'Built a Deep Learning MobileNetV2 model with OpenCV and Keras predicting \'mask\' and \'no mask\' categories with 99% accuracy',
                'Performed model testing utilizing imutils VideoStream displaying accurate mask placement percentage by analyzing live video'
            ],
            categories: [
                { name: 'Computer Vision', color: '#87B38D' },
                { name: 'Deep Learning', color: '#785589' },
            ]
        },

        {
            heading: 'Music Recommendation System using Spotify Web API',
            techStack: 'Python, Numpy, Pandas, Matplotlib, Plotly Scikit-Learn, Jupyter Notebook, Spotipy, Tkinter',
            models: 'K-Means Clustering',
            websiteUrl: [{ Name: 'Github-Link', URL: 'https://github.com/DevanshiShah9/Suggestion-and-Mood-based-Music-Recommendation-System-using-Spotify-Web-API/' }],
            description: 'I embarked on this project to delve into the realm of recommendation systems. I developed a music recommendation system that suggests songs based on the user’s mood and search suggestion.',
            features: [
                'Devised K-means clustering model and trained it on a Spotify dataset of 160k songs',
                'Programmed a user interface with Tkinter GUI toolkit to get a list of similar song predictions based on mood or song search'
            ],
            categories: [
                { name: 'Data Science', color: '#096B72' },
                { name: 'Machine Learning', color: '#785589' },
            ]
        },
        {
            heading: 'Anti Money Laundering (AML) (In Progress)',
            techStack: 'Python, Numpy, Pandas, Matplotlib, Seaborn, Scikit-Learn, Jupyter Notebook, Tableau Dashboards, Node.js, React.js, GraphQL',
            models: 'Randome Forest, Logistic Regression',
            websiteUrl: [{ Name: 'Github-Link', URL: 'https://github.com/DevanshiShah9/AML-Project-In-Progress/' }],
            description: 'I undertook this project to dive deeper into the Financial sector and implement ML models for Fraud Detection and Account Risk Assessment.',
            features: [
                'Leveraged supervised ML models to detect patterns associated with fraudulent transactions, with a particular focus on identifying SAR cycles',
                'Employ unsupervised ML to predict the likelihood of an account being fraudulent based on these detected transactions',
                'Create a dashboard using Tableau to visualize the data and its insights',
                'Create an interactive GUI to interact with the data, dashboards and models'
            ],
            categories: [
                { name: 'Data Science', color: '#096B72' },
                { name: 'Machine Learning', color: '#785589' },
            ]
        },
    ];

    const data = popupData[index];

    popupHeading.textContent = data.heading || '';
    popupTechStack.textContent = '';
    popupDescription.textContent = '';
    popupModels.textContent = '';
    popupWebsiteUrl.innerHTML = '';
    popupFeatures.innerHTML = '';
    popupCategories.innerHTML = '';



    if (data.techStack) {
        const boldText = document.createElement('strong');
        boldText.textContent = 'Tech Stack: ';
        popupTechStack.appendChild(boldText);

        const content = document.createElement('span');
        content.textContent = data.techStack;
        popupTechStack.appendChild(content);
    }

    if (data.description) {
        const boldText = document.createElement('strong');
        boldText.textContent = 'Description: ';
        popupDescription.appendChild(boldText);

        const content = document.createElement('span');
        content.textContent = data.description;
        popupDescription.appendChild(content);
    }

    if (data.models) {
        const boldText = document.createElement('strong');
        boldText.textContent = 'Models: ';
        popupModels.appendChild(boldText);

        const content = document.createElement('span');
        content.textContent = data.models;
        popupModels.appendChild(content);
    }

    if (data.websiteUrl && data.websiteUrl.length > 0) {
        const boldText = document.createElement('strong');
        boldText.textContent = 'Website URL: ';
        popupWebsiteUrl.appendChild(boldText);

        const websiteContainer = document.createElement('div');
        websiteContainer.classList.add('website-links');

        data.websiteUrl.forEach((urlObj, index) => {
            const websiteLink = document.createElement('a');
            websiteLink.textContent = urlObj.Name;
            websiteLink.href = urlObj.URL;
            websiteLink.target = '_blank'; // Opens the link in a new tab
            websiteLink.rel = 'noopener noreferrer'; // Recommended for security when using target="_blank"
            websiteLink.style.color = 'blue';

            if (index < data.websiteUrl.length - 1) {
                websiteLink.style.marginRight = '0.5em';
            }

            websiteContainer.appendChild(websiteLink);
        });
        popupWebsiteUrl.appendChild(websiteContainer);
    }

    if (data.features && data.features.length > 0) {
        popupFeatures.innerHTML = data.features.map(feature => `<li>${feature}</li>`).join('');
    }

    if (data.categories && data.categories.length > 0) {
        const categories = generateCategoryElements(data.categories);
        popupCategories.innerHTML = '';
        categories.forEach(category => {
            popupCategories.appendChild(category);
        });
    }

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        const activeBox = document.querySelector('.box.active');
        if (activeBox) {
            activeBox.classList.remove('active');
        }
    }
}


function initializeScript() {
    const popup = document.getElementById('popup');
    const boxes = document.querySelectorAll('.box');
    const overlay = document.getElementById('overlay');

    boxes.forEach(box => {
        box.addEventListener('click', () => {
            boxes.forEach(otherBox => otherBox.classList.remove('active'));
            box.classList.add('active');
            openPopup(box.dataset.index);
            // Show the overlay when a popup is opened
            overlay.style.display = 'block';
        });
    });

    overlay.addEventListener('click', () => {
        closePopup();
        // Hide the overlay when clicked
        overlay.style.display = 'none';
    });

    // Event listener to close the popup when clicking outside it
    document.addEventListener('click', (event) => {
        const isClickInsidePopup = popup.contains(event.target);

        if (!isClickInsidePopup) {
            closePopup();
            // Hide the overlay when clicking outside the popup
            overlay.style.display = 'none';
        }
    });

    boxes.forEach(box => {
        box.addEventListener('click', (event) => {
            event.stopPropagation();
            openPopup(box.dataset.index);
            // Show the overlay when a popup is opened
            overlay.style.display = 'block';
        });
    });
}

initializeScript();
