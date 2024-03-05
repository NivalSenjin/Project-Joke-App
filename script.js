function getJoke() {
    // Fetch joke data from JokeAPI
    fetch('https://v2.jokeapi.dev/joke/Any?type=single')
        .then(response => response.json())
        .then(data => {
            // Check if the API request was successful
            if (data.type === 'single') {
                displayJoke(data.joke);
            } else {
                alert('Failed to fetch a joke. Please try again later.');
            }  
        })
        .catch(error => {
            console.error('Error fetching joke data:', error);
            alert('An error occurred while fetching joke data. Please try again later.');
        });
}

function displayJoke(joke) {
    const jokeContainer = document.getElementById('joke-container');
    const jokeElement = document.getElementById('joke');
    jokeElement.textContent = joke;
}







