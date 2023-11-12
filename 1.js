function uploadFile() {
    var form = document.getElementById("uploadForm");
    var fileInput = document.getElementById("noteFile");
    var uploadStatus = document.getElementById("uploadStatus");

    var formData = new FormData(form);

    // Perform an AJAX request (you can use a library like Axios or Fetch)
    // to send the formData to the server for handling the file upload.

    // Example using Fetch:
    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        uploadStatus.innerHTML = data.message;
    })
    .catch(error => {
        console.error('Error:', error);
        uploadStatus.innerHTML = 'An error occurred during file upload.';
    });
}
