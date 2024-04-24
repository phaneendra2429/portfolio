<?php
// Retrieve form data
$projectCategory = $_POST['projectCategory'];
$projectName = $_POST['projectName'];
$projectTags = $_POST['projectTags'];
$projectImageName = $_FILES['projectImage']['name'];
$projectImageTmpName = $_FILES['projectImage']['tmp_name'];

// Move uploaded image to a desired location
$uploadsDirectory = 'uploads/'; // Directory where uploaded images will be stored
$targetFilePath = $uploadsDirectory . $projectImageName;
move_uploaded_file($projectImageTmpName, $targetFilePath);

// Generate HTML content for the new project card
$newProjectCard = "
<div class='col-md-4 mb-4'>
    <div class='card shadow'>
        <img src='$targetFilePath' class='card-img-top' alt='Project Image'>
        <div class='card-body'>
            <h5 class='card-title'>$projectName</h5>
            <p class='card-text'>Project description goes here. It should briefly describe the project and its key features.</p>
            <div class='tags'>
                " . implode(' ', array_map(function($tag) {
                    return "<span class='badge badge-primary'>$tag</span>";
                }, explode(',', $projectTags))) . "
            </div>
            <a href='#' class='btn btn-primary'>View Project</a>
        </div>
    </div>
</div>
";

// Read current index.html content
$currentContent = file_get_contents('index.html');

// Append new project card to the appropriate project category section
$updatedContent = preg_replace("/\<div id='$projectCategory'\ class='container tab-pane.*?\<\/div\>/s", "<div id='$projectCategory' class='container tab-pane'>$newProjectCard</div>", $currentContent);

// Update index.html file with the new content
file_put_contents('index.html', $updatedContent);

// Redirect back to index.html
header('Location: index.html');
exit;
?>
