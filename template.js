
       
// Define project data
mlProjectsData = [
    {
        title: 'Melanoma Skin Cancer Detection',
        description: '',
        tags: ['Deep Learning', 'Neural Networks'],
        image: 'projects/ML Projects/image2.png',
        link: 'projects/ML Projects/project1.html'
    }
    // Add more projects as needed
];

sqlProjectsData = [
    {
        title: 'SweepShift: Refining Layoffs Data for Analysis',
        description: '',
        tags: ['Data cleaning', 'Data Analysis'],
        image: 'projects/SQL/image2.png',
        link: 'projects/SQL/project1.html'
    }
    // Add more projects as needed
];
excelProjectsData = [
            {
                title: 'Coffee Shop Sales',
                description: '',
                tags: ['Dashboard', 'Data Analysis'],
                image: 'projects/Excel/image.png',
                link: 'projects/Excel/project1.html'
            }
            // Add more projects as needed
        ];
tabProjectsData = [
            // {
            //     title: 'tab 1',
            //     description: 'Project description goes here. It should briefly describe the project and its key features.',
            //     tags: ['Machine Learning', 'Data Analysis'],
            //     image: 'project-image.jpg',
            //     link: 'projects/ML Projects/project.html'
            // }
            // Add more projects as needed
        ];
awsProjectsData = [
            // {
            //     title: 'aws 1',
            //     description: 'Project description goes here. It should briefly describe the project and its key features.',
            //     tags: ['Machine Learning', 'Data Analysis'],
            //     image: 'project-image.jpg',
            //     link: 'projects/ML Projects/project.html'
            // }
            {
                title: 'Image Gallery Application using Flask',
                description: '',
                tags: ['GCP', 'Flask', 'Firebase'],
                image: 'projects/cloud/image.png',
                link: 'projects/cloud/project1.html'
            }
            // Add more projects as needed
        ];

// Function to create and add project cards dynamically
function addProjectCards(category, projects) {
    const container = document.getElementById(category + '-content');

    projects.forEach(project => {
        const cardHtml = `
        <div class="col-md-4 mb-4">
            <div class="card shadow">
                <img src="${project.image}" class="card-img-top" alt="Project Image">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="tags">
                        ${project.tags.map(tag => `<span class="badge badge-secondary">${tag}</span>`).join('')}
                    </div>
                    <a href="${project.link}" class="btn btn-primary">View Project</a>
                </div>
            </div>
        </div>
        `;

        container.innerHTML += cardHtml;
    });
}

// Add ML Projects
addProjectCards('ml-projects', mlProjectsData);
addProjectCards('sql', sqlProjectsData);
addProjectCards('excel', excelProjectsData);
addProjectCards('tableau', tabProjectsData);
addProjectCards('aws', awsProjectsData);


// document.getElementById('projectForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form submission

//     // Get form values
//     const category = document.getElementById('projectCategory').value;
//     const projectName = document.getElementById('projectName').value;
//     const projectTags = document.getElementById('projectTags').value.split(',').map(tag => tag.trim());
//     const projectImage = document.getElementById('projectImage').value; // You may need to handle file input differently

//     // Create project object
//     const newProject = {
//         title: projectName,
//         description: '', // You can add description later if needed
//         tags: projectTags,
//         image: projectImage, // Make sure to handle file input properly
//         link: '#' // You may want to update the link based on your project structure
//     };

//     // Append new project to the corresponding category
//     switch (category) {
//         case 'mlProjectsData':
//             mlProjectsData.push(newProject);
//             break;
//         case 'sqlProjectsData':
//             sqlProjectsData.push(newProject);
//             break;
//         case 'excelProjectsData':
//             excelProjectsData.push(newProject);
//             break;
//         case 'tabProjectsData':
//             tabProjectsData.push(newProject);
//             break;
//         case 'awsProjectsData':
//             awsProjectsData.push(newProject);
//             break;
//         default:
//             // Handle invalid category
//             break;
//     }

//     // Optionally, you can update the UI to reflect the new project addition

//     // Reset the form
//     document.getElementById('projectForm').reset();
// });