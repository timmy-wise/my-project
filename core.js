document.getElementById('download-btn').addEventListener('click', function() {
    // Hide the current content
    document.getElementById('main-content').style.display = 'none';
    
    // Show the new subjects menu
    document.getElementById('subjects-menu').style.display = 'block';
    
    // Optionally, you can hide the help section or modify it
    document.getElementById('help-section').style.display = 'none';
});


document.getElementById('go-back-btn').addEventListener('click', function() {
    // Show the original content
    document.getElementById('main-content').style.display = 'flex'; // Display the main content again
    
    // Hide the subjects menu
    document.getElementById('subjects-menu').style.display = 'none';
    
    // Optionally, show the help section again
    document.getElementById('help-section').style.display = 'block';
});

document.querySelector('.button').addEventListener('click', function() {
    // Create a duplicate of the "Select Category" menu
    const subjectsMenu = document.getElementById('subjects-menu');
    const clonedSubjectsMenu = subjectsMenu.cloneNode(true); // Clone the menu (deep clone)
    document.getElementById('main-content').parentElement.appendChild(clonedSubjectsMenu);
    const goBackBtn = clonedSubjectsMenu.querySelector('#go-back-btn');
    goBackBtn.addEventListener('click', function() {
        // Show the original content
        document.getElementById('main-content').style.display = 'flex'; // Display the main content again
        
        // Hide the cloned subjects menu
        clonedSubjectsMenu.style.display = 'none';
        clonedSubjectsMenu.id = 'cloned-menu';
        
        // Optionally, show the help section again
        document.getElementById('help-section').style.display = 'block';
    });
        // Show the cloned menu
        document.getElementById('main-content').style.display = 'none';
        clonedSubjectsMenu.style.display = 'block'; // Make sure the cloned menu is visible
        document.getElementById('help-section').style.display = 'none';


        const clonedLinks = clonedSubjectsMenu.querySelectorAll('a');
        clonedLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent the default link behavior
        
                // Trigger the file input dialog
                document.getElementById('upload-file').click();
            });
        });
        
        
        // Now, handle the file selection event
        document.getElementById('upload-file').addEventListener('change', function(event) {
            const file = event.target.files[0];  // Get the selected file
            if (!file) return;  // If no file is selected, do nothing
            
            // Handle the file upload here (for example, sending it to the server)
            const formData = new FormData();
            formData.append('file', file);  // Add the selected file to the form data
        
            console.log("Sending file upload request...");
            fetch('http://localhost:3000/uploads', {
                method: 'POST',
                body: formData
            })
            .then(response => response.text())
            .then(data => console.log(data))
            .catch(error => console.error(error));
        });
});

    const clonedLinksD = document.getElementById('subjects-menu').querySelectorAll('a');
    clonedLinksD.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior
        
            document.getElementById('alertmsg').style.display = 'block'
            document.querySelector('.submenu').classList.add('blurred');
            });
        });
    function closeAlr(){
            document.querySelector('.alert').style.display = 'none'; // Hide alert
            document.querySelector('.submenu').classList.remove('blurred'); // Remove blur effect
        }
//help menu

document.getElementById('help-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default link behavior

    // Show the help content and hide the "Help Section"
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('help-section').style.display = 'none';
    document.getElementById('help-content').style.display = 'block';
});

// Close the help content when the "Close" button is clicked
document.getElementById('close-help').addEventListener('click', function() {
    // Hide the help content and show the "Help Section" link again
    document.getElementById('main-content').style.display = 'flex';
    document.getElementById('help-section').style.display = 'block';
    document.getElementById('help-content').style.display = 'none';
});
