document.addEventListener('DOMContentLoaded', function () {
    // Get the current year and update the span with id "currentYear"
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Get the last modified date of the document and update the element with id "lastModified"
    document.getElementById('lastModified').textContent = 'Last Modified: ' + document.lastModified;
});
