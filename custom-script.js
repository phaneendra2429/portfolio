document.addEventListener("DOMContentLoaded", function() {
    const projectForm = document.getElementById("projectForm");

    projectForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const projectCategory = document.getElementById("projectCategory").value;
        const projectName = document.getElementById("projectName").value;
        const projectTags = document.getElementById("projectTags").value;
        const projectImage = document.getElementById("projectImage").files[0];

        // Log form data for testing
        console.log("Project Category:", projectCategory);
        console.log("Project Name:", projectName);
        console.log("Project Tags:", projectTags);
        console.log("Project Image:", projectImage);

        const projectCard = document.createElement("div");
        projectCard.classList.add("col-md-4", "mb-4");

        projectCard.innerHTML = `
            <div class="card shadow">
                <img src="#" class="card-img-top" alt="Project Image">
                <div class="card-body">
                    <h5 class="card-title">${projectName}</h5>
                    <p class="card-text"></p>
                    <div class="tags">
                        <span class="badge badge-primary">${projectTags}</span>
                    </div>
                    <a href="#" class="btn btn-primary">View Project</a>
                </div>
            </div>
        `;

        const tabContent = document.getElementById("tableau");

        // Log tabContent for testing
        console.log("ID Search:", projectCategory.toLowerCase());
        console.log("Tab Content:", tabContent);

        tabContent.appendChild(projectCard);

        projectForm.reset();
    });
});
