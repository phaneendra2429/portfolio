        // Define project data
        const mlProjectsData = [
            {
                title: 'Project Title 1',
                description: 'Project description goes here. It should briefly describe the project and its key features.',
                tags: ['Machine Learning', 'Data Analysis'],
                image: 'project-image.jpg',
                link: 'projects/ML Projects/project.html'
            }
            // Add more projects as needed
        ];
      
      const sqlProjectsData = [
            {
                title: 'SweepShift: Refining Layoffs Data for Analysis',
                description: '',
                tags: ['Data cleaning', 'Data Analysis'],
                image: 'projects/SQL/image2.png',
                link: 'projects/SQL/project1.html'
            }
            // Add more projects as needed
        ];
const excelProjectsData = [
            {
                title: 'Coffee Shop Sales',
                description: '',
                tags: ['Dashboard', 'Data Analysis'],
                image: 'projects/Excel/image.png',
                link: 'projects/Excel/project1.html'
            }
            // Add more projects as needed
        ];
const tabProjectsData = [
            {
                title: 'tab 1',
                description: 'Project description goes here. It should briefly describe the project and its key features.',
                tags: ['Machine Learning', 'Data Analysis'],
                image: 'project-image.jpg',
                link: 'projects/ML Projects/project.html'
            }
            // Add more projects as needed
        ];
const awsProjectsData = [
            {
                title: 'aws 1',
                description: 'Project description goes here. It should briefly describe the project and its key features.',
                tags: ['Machine Learning', 'Data Analysis'],
                image: 'project-image.jpg',
                link: 'projects/ML Projects/project.html'
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
      
