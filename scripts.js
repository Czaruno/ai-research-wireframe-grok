// scripts.js

// Function to simulate form submission (e.g., submitting a brief)
function submitForm() {
    alert('Form submitted successfully!');
    // In a real application, this would send data to the server
}

// Function to validate form fields (checks if required fields are filled)
function validateForm() {
    const inputs = document.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            alert(`Please fill out the ${input.name} field.`);
        }
    });
    return isValid;
}

// Event listener for submit buttons (e.g., "Submit Brief" in preview.html)
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-primary') && event.target.textContent === 'Submit Brief') {
        if (validateForm()) {
            submitForm();
        }
    }
});

// Function to simulate editing a client
function editClient() {
    alert('Editing client details...');
    // In a real application, this would open a form or modal to edit client information
}

// Event listener for edit buttons (e.g., "Edit Client" in client_detail.html)
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-primary') && event.target.textContent === 'Edit Client') {
        editClient();
    }
});

// Function to simulate adding a new source
function addNewSource() {
    alert('Adding a new source...');
    // In a real application, this would open a form to add a new source
}

// Event listener for add new source button (e.g., in source_overview.html)
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-primary') && event.target.textContent === 'Add New Source') {
        addNewSource();
    }
});

// Additional functions can be added here for other interactions
