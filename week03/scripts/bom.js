document.addEventListener('DOMContentLoaded', function () {
    const input = document.querySelector('#favchap');
    const button = document.querySelector('button');
    const list = document.querySelector('#list');

    // Declare chaptersArray and assign it the result of getChapterList or an empty array
    let chaptersArray = getChapterList() || [];

    button.addEventListener('click', function () {
        if (input.value !== '') {
            const chapter = input.value;

            // Call displayList with the input.value argument
            displayList(chapter);

            // Push the input.value into the chaptersArray
            chaptersArray.push(chapter);

            // Update the localStorage with the new array
            setChapterList();

            // Set the input.value to nothing
            input.value = '';

            // Set the focus back to the input
            input.focus();
        } else {
            input.focus();
        }
    });

    // Function to display list item and handle delete button
    function displayList(chapter) {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = chapter;
        deleteButton.textContent = 'X';

        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', function () {
            // Remove the ❌ and call deleteChapter to remove from array and localStorage
            const cleanedChapter = chapter.slice(0, chapter.length - 1);
            deleteChapter(cleanedChapter);

            // Remove the list item
            list.removeChild(li);
            input.focus();
        });
    }

    // Function to set localStorage item
    function setChapterList() {
        localStorage.setItem('bomEntries', JSON.stringify(chaptersArray));
    }

    // Function to get localStorage item
    function getChapterList() {
        const storedEntries = localStorage.getItem('bomEntries');
        return storedEntries ? JSON.parse(storedEntries) : [];
    }

    // Function to delete chapter from array and update localStorage
    function deleteChapter(chapter) {
        // Redefine chaptersArray using array.filter to exclude the chapter to be removed
        chaptersArray = chaptersArray.filter((item) => item !== chapter);

        // Update the localStorage with the updated array
        setChapterList();
    }

    // Load entries from localStorage on application load
    loadEntriesFromLocalStorage();

    // Function to load entries from localStorage
    function loadEntriesFromLocalStorage() {
        chaptersArray.forEach((chapter) => {
            // Call displayList for each entry in chaptersArray
            displayList(chapter);
        });
    }
});
